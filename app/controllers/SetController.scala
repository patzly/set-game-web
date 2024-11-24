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
      Props(new SetWebSocketActor(out, socketManager, controller))

    }
  }


  private def ansiToHtml(text: String): String = {
    val html = text
      // Formatierungen
      .replaceAll("\u001B\\[1m", "<strong>")
      // Bold
      .replaceAll("\u001B\\[4m", "<u>")
      // Underline
      // Farben
      .replaceAll("\u001B\\[31m", "<span style='color: #963832;'>")
      // Rot
      .replaceAll("\u001B\\[32m", "<span style='color: #1f801c;'>")
      // Grün
      .replaceAll("\u001B\\[33m", "<span style='color: #aa8a1e;'>")
      // Gelb
      .replaceAll("\u001B\\[34m", "<span style='color: #113dbb;'>")
      // Blau
      .replaceAll("\u001B\\[35m", "<span style='color:purple;'>")
      // Lila
      .replaceAll("\u001B\\[36m", "<span style='color: #398789;'>")
      // Cyan
      // Reset
      .replaceAll("\u001B\\[0m", "</span></strong></u>")
    // Schließe offene Tags, konvertiere Zeilenumbrüche
    html.replaceAll("</span></strong></u>", "</strong></u></span>").replaceAll("\n", "<br>")
  }
}
