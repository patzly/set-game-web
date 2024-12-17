package controllers

import com.google.inject.Guice
import de.htwg.se.set.controller.IController
import de.htwg.se.set.module.SetModule
import org.apache.pekko.actor.{ActorSystem, Props}
import org.apache.pekko.stream.{Materializer, SystemMaterializer}
import play.api._
import play.api.libs.json._
import play.api.libs.streams.ActorFlow
import play.api.mvc._
import javax.inject._
import scala.collection.mutable
import AnsiConverter.toHtml

@Singleton
class SetController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val injector = Guice.createInjector(new SetModule)
  // A map to store controllers by gameId
  private val controllersMap: mutable.Map[String, IController] = mutable.Map()

  implicit val system: ActorSystem = ActorSystem("MyActorSystem")
  implicit val materializer: Materializer = SystemMaterializer(system).materializer
  private val socketManager = system.actorOf(Props(new SocketManager()), "SocketManager")

  def gameToJson(gameId: String): Action[AnyContent] = Action {
    val gameController = getOrCreateController(gameId)
    Ok(gameController.game.toJson)
  }

  def cards(gameId: String): Action[AnyContent] = Action {
    val gameController = getOrCreateController(gameId)
    Ok(Json.obj(
      "success" -> true,
      "cards" -> gameController.game.tableCards.map { card =>
        card.toJson.as[JsObject] ++ Json.obj("name" -> toHtml(card.toString))
      }
    ))
  }

  def socket(gameId: String) = WebSocket.accept[JsValue, JsValue] { request =>
    ActorFlow.actorRef { out =>
      println(s"Connect received for gameId: $gameId")
      // Hole den spezifischen IController für das Spiel
      val gameController = getOrCreateController(gameId)  // Stelle sicher, dass hier der Controller zurückgegeben wird, kein Map
      Props(new SetWebSocketActor(out, socketManager, gameController, gameId))
    }
  }


  private def getOrCreateController(gameId: String): IController = {
    controllersMap.getOrElseUpdate(gameId, {
      val controllerInstance = injector.getInstance(classOf[IController])
      controllerInstance
    })
  }
}
