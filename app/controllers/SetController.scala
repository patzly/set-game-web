package controllers

import com.google.inject.Guice
import de.htwg.se.set.controller.IController
import de.htwg.se.set.controller.controller.*
import de.htwg.se.set.{controller, module}
import de.htwg.se.set.module.SetModule
import de.htwg.se.set.view.Tui
import play.api.*
import play.api.mvc.*

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

  private def result =
    Ok(views.html.index(ansiToHtml(controller.toString), ansiToHtml(controller.currentState)))

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
    result
  }

  def goToPlayerCount(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(GoToPlayerCountAction())
    result
  }

  def switchEasy(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(SwitchEasyAction())
    result
  }

  def changePlayerCount(playerCount: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ChangePlayerCountAction(playerCount))
    result
  }

  def addPlayer(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount + 1))
    result
  }

  def removePlayer(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ChangePlayerCountAction(controller.settings.playerCount - 1))
    result
  }

  def selectPlayer(number: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(SelectPlayerAction(number))
    result
  }

  def addColumn(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(AddColumnAction())
    result
  }

  def selectCards(coordinates: String): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(SelectCardsAction(coordinates.split("-").toList))
    result
  }

  def exit(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ExitAction())
    result
  }

  def undo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(UndoAction())
    result
  }

  def redo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(RedoAction())
    result
  }

  def rules(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.rules())
  }

  private def ansiToHtml(text: String): String = {
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
