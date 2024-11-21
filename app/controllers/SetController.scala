package controllers

import com.google.inject.Guice
import de.htwg.se.set.controller.{Event, IController}
import de.htwg.se.set.controller.controller.*
import de.htwg.se.set.{controller, module}
import de.htwg.se.set.module.SetModule
import de.htwg.se.set.util.Observer
import de.htwg.se.set.view.Tui
import org.apache.pekko.actor.{Actor, ActorRef, ActorSystem, Props}
import play.api.*
import play.api.mvc.*
import play.api.libs.json.*

import java.io.{ByteArrayOutputStream, PrintStream}
import javax.inject.*
import play.api.libs.streams.ActorFlow

import scala.concurrent.{ExecutionContext, Future}
import org.apache.pekko.stream.Materializer
import org.apache.pekko.stream.SystemMaterializer

import scala.swing.Reactor


/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class SetController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val injector = Guice.createInjector(new SetModule)
  private val controller = injector.getInstance(classOf[IController])

  implicit val system: ActorSystem = ActorSystem("MyActorSystem")
  implicit val materializer: Materializer = SystemMaterializer(system).materializer
  private val socketManager = system.actorOf(Props(new SocketManager(controller)), "SocketManager")

  def gameToJson(): Action[AnyContent] = Action {
    Ok(controller.game.toJson)
  }

  def cards(): Action[AnyContent] = Action {
    Ok(Json.obj(
      "success" -> true,
      "cards" -> controller.game.tableCards.map { card =>
        card.toJson.as[JsObject] ++ Json.obj("name" -> ansiToHtml(card.toString))
      }
    ))
  }


  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index(controller, this, ansiToHtml(controller.toString), ansiToHtml(controller.currentState)))
  }


  def rules(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.rules())

  }


  def socket() = WebSocket.accept[JsValue, JsValue] { request =>
    ActorFlow.actorRef { out =>
      println("Connect received")
      Props(new SetWebSocketActor(out, socketManager))

    }
  }


  class SetWebSocketActor(out: ActorRef, socketManager: ActorRef) extends Actor
    with Observer {

    controller.add(this)

    override def update(event: Event): Unit =
      event match
        case Event.SETTINGS_CHANGED => out ! Json.obj("settingsChanged" -> true)
        case Event.CARDS_CHANGED => out ! Json.obj("cardsChanged" -> false)
        //case Event.SETTINGS_OR_GAME_CHANGED => out ! Json.obj("settingsChanged" -> true)
        case Event.STATE_CHANGED => out ! Json.obj("reload" -> false)
        case Event.MESSAGE_CHANGED => out ! Json.obj("messageChanged" -> true, "message" -> controller.game.message)
        case Event.PLAYERS_CHANGED => out ! Json.obj("reload" -> false)
        //case Event.GAME_MODE_CHANGED =>
        case _ => out ! Json.obj("reload" -> false)

    override def preStart(): Unit = {
      socketManager ! Connect(out)
    }

    /*
    override def postStop(): Unit = {
      socketManager ! Disconnect(out)
    }

     */

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

          case Some("addPlayer") =>
            controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount + 1))
            send_success("Playercount increased by one!")
            socketManager ! Broadcast(Json.obj("playercount" -> controller.settings.playerCount))

          case Some("removePlayer") =>
            controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount - 1))
            send_success("Playercount decreased by one!")
            socketManager ! Broadcast(Json.obj("playercount" -> JsNumber(controller.settings.playerCount)))

          case Some("exit") =>
            controller.handleAction(ExitAction())
            send_success("Successully left the game!")
            socketManager ! Broadcast(Json.obj("reload" -> true))

          case Some("selectPlayer") =>
            val playerNumber = (msg \ "playerNumber").asOpt[String].getOrElse("1").toInt
            controller.handleAction(SelectPlayerAction(playerNumber))
            send_success(s"Player $playerNumber selected!")
            socketManager ! Broadcast(Json.obj("selectedPlayer" -> JsNumber(playerNumber)))


          case Some("selectCards") =>
            val coordinates = (msg \ "coordinates").asOpt[String].get
            val coordinatesList = coordinates.split("-").toList
            controller.handleAction(SelectCardsAction(coordinatesList))
            send_success(s"Karten mit den Koordinaten ${coordinatesList.mkString(", ")} wurden ausgewählt")
            socketManager ! Broadcast(Json.obj("cardsChanged" -> true))


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

    def send_success(msg: String): Unit = {
      val jsonResponse = Json.obj(
        "success" -> true,
        "msg" -> msg
      )
      out ! jsonResponse
    }
  }


  def ansiToHtml(text: String): String = {
    val html = text
      // Formatierungen
      .replaceAll("\u001B\\[1m", "<strong>")
      // Bold
      .replaceAll("\u001B\\[4m", "<u>") // Underline
      // Farben
      .replaceAll("\u001B\\[31m", "<span style='color: #963832;'>")
      // Rot
      .replaceAll("\u001B\\[32m", "<span style='color: #1f801c;'>") // Grün
      .replaceAll("\u001B\\[33m", "<span style='color: #aa8a1e;'>") // Gelb
      .replaceAll("\u001B\\[34m", "<span style='color: #113dbb;'>") // Blau
      .replaceAll("\u001B\\[35m", "<span style='color:purple;'>") // Lila
      .replaceAll("\u001B\\[36m", "<span style='color: #398789;'>") // Cyan
      // Reset
      .replaceAll("\u001B\\[0m", "</span></strong></u>")
    // Schließe offene Tags, konvertiere Zeilenumbrüche
    html.replaceAll("</span></strong></u>", "</strong></u></span>").replaceAll("\n", "<br>")
  }
}
