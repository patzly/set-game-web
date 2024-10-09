package controllers

import com.google.inject.Guice

import javax.inject.*
import play.api.*
import play.api.mvc.*
import de.htwg.se.set.module
import de.htwg.se.set.controller
import de.htwg.se.set.module.SetModule
import de.htwg.se.set.controller.IController
import de.htwg.se.set.controller.controller.{ChangePlayerCountAction, Controller, RedoAction, SelectPlayerAction, StartGameAction, SwitchEasyAction, UndoAction}
import org.apache.pekko.util.ByteString
import play.api.http.HttpEntity
//import de.htwg.se.set.module.SetModule

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  //private val injector = Guice.createInjector(new SetModule)
  val injector = Guice.createInjector(new SetModule) //auf das Scala Projekt der Jar wird zugegriffen
  val controller = injector.getInstance(classOf[IController])

  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(ansiToHtml(controller.toString)).as("text/html; charset=utf-8")
  }

  def start(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(StartGameAction())
    Ok(ansiToHtml(controller.toString)).as("text/html; charset=utf-8")
  }
  def undo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(UndoAction())
    Ok(ansiToHtml(controller.toString)).as("text/html; charset=utf-8")
  }

  def redo(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(RedoAction())
    Ok(ansiToHtml(controller.toString)).as("text/html; charset=utf-8")
  }

  def switchEasy(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(SwitchEasyAction())
    Ok(ansiToHtml(controller.toString)).as("text/html; charset=utf-8")
  }
  def changePlayerCount(playerCount: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(ChangePlayerCountAction(playerCount) )
    Ok(ansiToHtml(controller.toString)).as("text/html; charset=utf-8")
  }
  def selectPlayer(playerNumber: Int): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    controller.handleAction(SelectPlayerAction(playerNumber) )
    Ok(ansiToHtml(controller.toString)).as("text/html; charset=utf-8")
  }

  private def ansiToHtml(text: String): String = {
    // Ersetze ANSI-Farb- und Formatierungs-Codes durch HTML
    val html = text
      // Formatierungen
      .replaceAll("\u001B\\[1m", "<strong>") // Bold
      .replaceAll("\u001B\\[4m", "<u>")      // Underline
      // Farben
      .replaceAll("\u001B\\[31m", "<span style='color:red;'>")    // Rot
      .replaceAll("\u001B\\[32m", "<span style='color:green;'>")  // Grün
      .replaceAll("\u001B\\[33m", "<span style='color:yellow;'>") // Gelb
      .replaceAll("\u001B\\[34m", "<span style='color:blue;'>")   // Blau
      .replaceAll("\u001B\\[35m", "<span style='color:purple;'>") // Lila
      .replaceAll("\u001B\\[36m", "<span style='color:cyan;'>")   // Cyan
      // Reset
      .replaceAll("\u001B\\[0m", "</span></strong></u>")

    // Schließe die offenen Tags, um sicherzustellen, dass sie richtig im HTML sind
    val resetHtml = html
      .replaceAll("</span></strong></u>", "</strong></u></span>")

    // Zeilenumbrüche
    val formattedHtml = resetHtml
      .replaceAll("\n", "<br>")

    // Füge den HTML-Code für die monospaced Schriftart hinzu und setze den Hintergrund auf schwarz
    s"""
  <style>
    body {
      background-color: black;
      color: white; /* Weißer Text für bessere Lesbarkeit */
      font-family: "Courier New", monospace;
    }
  </style>
  <pre>$formattedHtml</pre>
  """
  }



}
