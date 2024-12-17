
package controllers

import controllers.AnsiConverter.toHtml
import de.htwg.se.set.controller.IController
import de.htwg.se.set.controller.controller.*
import de.htwg.se.set.model.GameMode
import org.apache.pekko.actor.{Actor, ActorRef}
import play.api.libs.json.{JsObject, JsValue, Json}

class SetWebSocketActor(out: ActorRef, socketManager: ActorRef, controller: IController, gameId: String) extends Actor {

  override def preStart(): Unit = socketManager ! Connect(out, gameId)

  override def postStop(): Unit = socketManager ! Disconnect(out, gameId)

  override def receive: Receive = {
    case msg: JsValue =>
      (msg \ "action").asOpt[String] match {
        case Some(action) => handleAction(action, msg)
        case None => sendError("Keine gültige Anfrage gesendet!")
      }
  }

  private val actionHandlers: Map[String, JsValue => Unit] = Map(
    "startGame" -> { _ =>
      controller.handleAction(StartGameAction())
      sendSuccess("Game started!")
      broadcastGameState(inGame = true)
    },
    "undo" -> { _ =>
      controller.handleAction(UndoAction())
      sendSuccess("Successfully rolled back!")
      broadcastUndoRedo()
      broadcastGameState(controller.settings.mode != GameMode.SETTINGS)
    },
    "redo" -> { _ =>
      controller.handleAction(RedoAction())
      sendSuccess("Successfully rolled forward!")
      broadcastUndoRedo()
      broadcastGameState(controller.settings.mode != GameMode.SETTINGS)
    },
    "addColumn" -> { _ =>
      controller.handleAction(AddColumnAction())
      sendSuccess("AddColumAction started!")
      broadcastGame()
    },
    "switchEasy" -> { _ =>
      controller.handleAction(SwitchEasyAction())
      sendSuccess("Mode switched!")
      broadcastSettings()
      broadcastUndoRedo()
    },
    "addPlayer" -> { _ =>
      controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount + 1))
      sendSuccess("Player count increased!")
      broadcastSettings()
      broadcastUndoRedo()
    },
    "removePlayer" -> { _ =>
      controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount - 1))
      sendSuccess("Player count decreased!")
      broadcastSettings()
      broadcastUndoRedo()
    },
    "exit" -> { _ =>
      controller.handleAction(ExitAction())
      sendSuccess("Successfully left the game!")
      broadcastGameState(inGame = false)
    },
    "selectPlayer" -> { msg =>
      val playerNumber = (msg \ "playerNumber").asOpt[Int].getOrElse(1)
      controller.handleAction(SelectPlayerAction(playerNumber))
      sendSuccess(s"Player $playerNumber selected!")
      broadcast(Json.obj("selectedPlayer" -> playerNumber, "message" -> controller.game.message))
    },
    "selectCards" -> { msg =>
      val coordinates = (msg \ "coordinates").asOpt[String].getOrElse("")
      val coordinatesList = coordinates.split("-").toList
      controller.handleAction(SelectCardsAction(coordinatesList))
      sendSuccess(s"Karten mit den Koordinaten ${coordinatesList.mkString(", ")} wurden ausgewählt.")
      broadcast(Json.obj("message" -> controller.game.message))
      broadcastGame()
    },
    "getState" -> { _ =>
      broadcastGameState(controller.settings.mode != GameMode.SETTINGS)
    },
    "getPlayer" -> { _ =>
      broadcast(Json.obj("players" -> controller.game.players.map(_.toJson.as[JsObject])))
    },
    "getSettings" -> { _ =>
      broadcastSettings()
    }
  )

  private def handleAction(action: String, msg: JsValue): Unit = {
    actionHandlers.get(action) match {
      case Some(handler) => handler(msg)
      case None => sendError("Keine gültige Anfrage gesendet!")
    }
  }

  // Helper methods for broadcasting and responding
  private def sendSuccess(msg: String): Unit =
    out ! Json.obj("success" -> true, "msg" -> msg)

  private def sendError(msg: String): Unit =
    out ! Json.obj("status" -> "error", "message" -> msg)

  private def broadcastGameState(inGame: Boolean): Unit = {
    broadcast(Json.obj("inGame" -> inGame))
    if (inGame) broadcastGame() else broadcastSettings()
  }

  private def broadcastGame(): Unit =
    broadcast(Json.obj(
      "message" -> controller.game.message,
      "cards" -> controller.game.tableCards.map(card => card.toJson.as[JsObject] ++ Json.obj("name" -> toHtml(card.toString))),
      "players" -> controller.game.players.map(_.toJson.as[JsObject])
    ))

  private def broadcastSettings(): Unit =
    broadcast(Json.obj(
      "canUndo" -> controller.canUndo,
      "canRedo" -> controller.canRedo,
      "easy" -> controller.settings.easy,
      "playercount" -> controller.settings.playerCount
    ))

  private def broadcastUndoRedo(): Unit =
    broadcast(Json.obj("canUndo" -> controller.canUndo, "canRedo" -> controller.canRedo))

  private def broadcast(json: JsObject): Unit = socketManager ! Broadcast(json, gameId: String)


}
