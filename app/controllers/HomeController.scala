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
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val injector = Guice.createInjector(new SetModule)
  private val controller = injector.getInstance(classOf[IController])
  private var tui: Tui = _

  private def captureOutput(action: => Unit): String = {
    val byteArrayStream = new ByteArrayOutputStream()
    val printStream = new PrintStream(byteArrayStream)
    val oldOut = System.out
    synchronized {
      try {
        System.setOut(printStream)
        action
        System.out.flush()
        byteArrayStream.toString()
      } finally {
        System.setOut(oldOut)
      }
    }
  }

  private def result(action: => Unit) = Ok(views.html.index(ansiToHtml(captureOutput(action))))

  def rules(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.rules("Spielregeln"))
  }


  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      tui = Tui(controller)
    }
  }

  def startGame(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(StartGameAction())
    }
  }

  def goToPlayerCount(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(GoToPlayerCountAction())
    }
  }

  def switchEasy(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(SwitchEasyAction())
    }
  }

  def changePlayerCount(playerCount: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(ChangePlayerCountAction(playerCount))
    }
  }

  def selectPlayer(number: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(SelectPlayerAction(number))
    }
  }

  def addColumn(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(AddColumnAction())
    }
  }

  def selectCards(coordinates: String): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(SelectCardsAction(coordinates.split("-").toList))
    }
  }

  def exit(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(ExitAction())
    }
  }

  def undo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(UndoAction())
    }
  }

  def redo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    result {
      controller.handleAction(RedoAction())
    }
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
