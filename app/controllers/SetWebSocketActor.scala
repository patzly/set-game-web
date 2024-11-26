package controllers

import de.htwg.se.set.controller.controller.{AddColumnAction, ChangePlayerCountAction, ExitAction, RedoAction, SelectCardsAction, SelectPlayerAction, StartGameAction, SwitchEasyAction, UndoAction}
import de.htwg.se.set.controller.{Event, IController}
import org.apache.pekko.actor.{Actor, ActorRef}
import play.api.libs.json.{JsNumber, JsValue, Json}

class SetWebSocketActor(out: ActorRef, socketManager: ActorRef, controller: IController) extends Actor {

  override def preStart(): Unit = {
    socketManager ! Connect(out)
  }

  override def postStop(): Unit = {
    socketManager ! Disconnect(out)
  }

  override def receive: Receive = {
    case msg: JsValue =>
      (msg \ "action").asOpt[String] match {
        case Some("startGame") =>
          controller.handleAction(StartGameAction())
          send_success("Game started!")
          socketManager ! Broadcast(Json.obj("reload" -> true))
          
        case Some("undo") =>
          controller.handleAction(UndoAction())
          send_success("Successfully rolled back!")
          socketManager ! Broadcast(Json.obj("canUndo" -> controller.canUndo))
          socketManager ! Broadcast(Json.obj("reload" -> true))
          
        case Some("redo") =>
          controller.handleAction(RedoAction())
          send_success("Successfully rolled back!")
          socketManager ! Broadcast(Json.obj("canRedo" -> controller.canRedo))
          socketManager ! Broadcast(Json.obj("reload" -> true))
          
        case Some("addColumn") =>
          controller.handleAction(AddColumnAction())
          send_success("AddColumAction started!")
          socketManager ! Broadcast(Json.obj("cardsChanged" -> true))
          
        case Some("switchEasy") =>
          controller.handleAction(SwitchEasyAction())
          send_success("Mode switched!!")
          socketManager ! Broadcast(Json.obj("easy" -> controller.settings.easy))
          send_undo_redo()
          
        case Some("addPlayer") =>
          controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount + 1))
          send_success("Playercount increased by one!")
          socketManager ! Broadcast(Json.obj("playercount" -> controller.settings.playerCount))
          send_undo_redo()
          
        case Some("removePlayer") =>
          controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount - 1))
          send_success("Playercount decreased by one!")
          socketManager ! Broadcast(Json.obj("playercount" -> JsNumber(controller.settings.playerCount)))
          send_undo_redo()
          
        case Some("exit") =>
          controller.handleAction(ExitAction())
          send_success("Successully left the game!")
          socketManager ! Broadcast(Json.obj("reload" -> true))
          
        case Some("selectPlayer") =>
          val playerNumber = (msg \ "playerNumber").asOpt[String].getOrElse("1").toInt
          controller.handleAction(SelectPlayerAction(playerNumber))
          send_success(s"Player $playerNumber selected!")
          socketManager ! Broadcast(Json.obj("selectedPlayer" -> JsNumber(playerNumber)))
          send_game()

        case Some("selectCards") =>
          val coordinates = (msg \ "coordinates").asOpt[String].get
          val coordinatesList = coordinates.split("-").toList
          controller.handleAction(SelectCardsAction(coordinatesList))
          send_success(s"Karten mit den Koordinaten ${coordinatesList.mkString(", ")} wurden ausgewählt")
          //send_game()
          socketManager ! Broadcast(Json.obj("reset" -> true))

        case Some("getSettings") =>
          send_settings()
          
        case Some(_) =>
          val jsonResponse = Json.obj(
            "status" -> "error",
            "message" -> "Keine gültige Anfrage gesendet!"
          )
        case None =>
          val jsonResponse = Json.obj(
            "status" -> "error",
            "message" -> "Keine gültige Anfrage gesendet!"

          )
      }
  }

  private def send_success(msg: String): Unit = {
    val jsonResponse = Json.obj(
      "success" -> true,
      "msg" -> msg
    )
    out ! jsonResponse
  }

  private def send_undo_redo(): Unit = {
    socketManager ! Broadcast(
      Json.obj(
        "canUndo" -> controller.canUndo,
        "canRedo" -> controller.canRedo,
      ))
  }

  private def send_settings(): Unit = {
    socketManager ! Broadcast(
      Json.obj(
        "canUndo" -> controller.canUndo,
        "canRedo" -> controller.canRedo,
        "easy" -> controller.settings.easy,
        "playercount" -> JsNumber(controller.settings.playerCount)))
  }

  private def send_game(): Unit = {
    socketManager ! Broadcast(Json.obj(
      "selectedPlayer" -> JsNumber(controller.game.selectedPlayer.get.number),
      "cardsChanged" -> true,
      "messageChanged" -> true, "message" -> controller.game.message
    ))
  }
}