package controllers

import com.google.inject.Guice
import de.htwg.se.set.controller.IController
import de.htwg.se.set.controller.controller.*
import de.htwg.se.set.{controller, module}
import de.htwg.se.set.module.SetModule
import de.htwg.se.set.view.Tui
import play.api.*
import play.api.mvc.*

import play.api.libs.json._

import java.io.{ByteArrayOutputStream, PrintStream}
import javax.inject.*

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class SetController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val injector = Guice.createInjector(new SetModule)
  private val controller = injector.getInstance(classOf[IController])

  def gameToJson(): Action[AnyContent] = Action {
    Ok(controller.game.toJson)
  }

  private def result =
    Ok(views.html.index(controller, this,ansiToHtml(controller.toString), ansiToHtml(controller.currentState)))

  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result
  }

  def continue(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    val input = request.body.asFormUrlEncoded.flatMap(_.get("input").flatMap(_.headOption)).map(identity).getOrElse("")
    controller.handleAction(controller.actionFromInput(input))
    result
  }

  def startGame(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(StartGameAction())
    Ok(Json.obj(
      "success" -> true
    ))
  }

  def goToPlayerCount(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(GoToPlayerCountAction())
    result
  }

  def switchEasy(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(SwitchEasyAction())
    Ok(Json.obj(
      "success" -> true,
      "easy" -> controller.settings.easy
    ))
  }

  def changePlayerCount(playerCount: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ChangePlayerCountAction(playerCount))
    result
  }

  def addPlayer(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount + 1))
    Ok(Json.obj(
      "success" -> true,
      "message" -> s"Spielerzahl erhöht!",
      "spielerzahl" -> JsNumber(controller.settings.playerCount)
    ))
  }

  def removePlayer(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount - 1))
    Ok(Json.obj(
      "success" -> true,
      "message" -> s"Spielerzahl verringert!",
      "spielerzahl" -> JsNumber(controller.settings.playerCount)
    ))
  }

  import play.api.libs.json._

  def selectPlayer(number: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(SelectPlayerAction(number))

    val response = Map("success" -> JsBoolean(true), "message" -> JsString(s"Player $number selected"))
    Ok(Json.toJson(response))
  }


  def addColumn(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(AddColumnAction())
    Ok(Json.obj(
      "success" -> true
    ))
  }

  def selectCards(coordinates: String): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    val coordinatesList = coordinates.split("-").toList
    controller.handleAction(SelectCardsAction(coordinatesList))

    Ok(Json.obj(
      "success" -> true,
      "message" -> s"Karten mit den Koordinaten ${coordinatesList.mkString(", ")} wurden ausgewählt"
    ))
  }


  def exit(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ExitAction())
    Ok(Json.obj(
      "success" -> true
    ))
  }

  def undo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(UndoAction())
    Ok(Json.obj(
      "success" -> true,
      "canUndo" -> controller.canUndo
    ))
  }

  def redo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(RedoAction())
    Ok(Json.obj(
      "success" -> true,
      "canRedo" -> controller.canRedo
    ))
  }

  def rules(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.rules())

  }

  def ansiToHtml(text: String): String = {
    val html = text
      // Formatierungen
      .replaceAll("\u001B\\[1m", "<strong>") // Bold
      .replaceAll("\u001B\\[4m", "<u>")      // Underline
      // Farben
      .replaceAll("\u001B\\[31m", "<span style='color: #963832;'>")    // Rot
      .replaceAll("\u001B\\[32m", "<span style='color: #1f801c;'>")  // Grün
      .replaceAll("\u001B\\[33m", "<span style='color: #aa8a1e;'>") // Gelb
      .replaceAll("\u001B\\[34m", "<span style='color: #113dbb;'>")   // Blau
      .replaceAll("\u001B\\[35m", "<span style='color:purple;'>") // Lila
      .replaceAll("\u001B\\[36m", "<span style='color: #398789;'>")   // Cyan
      // Reset
      .replaceAll("\u001B\\[0m", "</span></strong></u>")
    // Schließe offene Tags, konvertiere Zeilenumbrüche
    html.replaceAll("</span></strong></u>", "</strong></u></span>").replaceAll("\n", "<br>")
  }
}
