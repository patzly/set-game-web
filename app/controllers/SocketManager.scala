package controllers

import de.htwg.se.set.controller.IController
import org.apache.pekko.actor.*
import play.api.libs.json.{JsValue, Json}

class SocketManager(controller: IController) extends Actor {
  private var clients = Set.empty[ActorRef]

  override def receive: Receive = {
    case Connect(client) =>
      clients += client
      println(s"Client connected: $client")
      // Sende aktuellen Spielstatus an neuen Client
      //client ! controller.game.toJson.toString

    case Disconnect(client) =>
      clients -= client
      println(s"Client disconnected: $client")

    case Broadcast(message) =>
      clients.foreach(_ ! message)
  }
}

// Nachrichten für den SocketManager
case class Connect(client: ActorRef)

case class Disconnect(client: ActorRef)

case class Broadcast(message: JsValue)





