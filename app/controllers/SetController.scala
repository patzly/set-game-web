package controllers

import com.google.inject.Guice
import de.htwg.se.set.controller.IController
import de.htwg.se.set.module.SetModule
import de.htwg.se.set.{controller, module}
import org.apache.pekko.actor.{ActorSystem, Props}
import org.apache.pekko.stream.{Materializer, SystemMaterializer}
import play.api.*
import _root_.controllers.AnsiConverter.toHtml
import play.api.libs.json.*
import play.api.libs.streams.ActorFlow
import play.api.mvc.*

import javax.inject.*


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
        card.toJson.as[JsObject] ++ Json.obj("name" -> toHtml(card.toString))
      }
    ))
  }


  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index(controller, this, toHtml(controller.toString), toHtml(controller.currentState)))
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
}
