package controllers

import de.htwg.se.set.controller.IController
import org.apache.pekko.actor.*
import play.api.libs.json.{JsValue, Json}

class SocketManager() extends Actor {
  private var gameClients = Map.empty[String, Set[ActorRef]]

  override def receive: Receive = {
    case Connect(client, gameId) =>
      // Sicherstellen, dass es eine Liste von Clients pro gameId gibt
      val updatedClients = gameClients.getOrElse(gameId, Set.empty) + client
      gameClients += (gameId -> updatedClients)
      println(s"Client connected to gameId: $gameId, client: $client")

    // Optional: Sende aktuellen Spielstatus an den neuen Client
    // client ! controller.game.toJson.toString

    case Disconnect(client, gameId) =>
      gameClients.get(gameId).foreach { clients =>
        gameClients += (gameId -> (clients - client))
      }
      println(s"Client disconnected from gameId: $gameId, client: $client")

    case Broadcast(message, gameId) =>
      // Nur Clients der entsprechenden gameId erhalten die Nachricht
      gameClients.get(gameId).foreach { clients =>
        clients.foreach(_ ! message)
      }
  }
}

// Nachrichten für den SocketManager, die jetzt auch die gameId berücksichtigen
case class Connect(client: ActorRef, gameId: String)

case class Disconnect(client: ActorRef, gameId: String)

case class Broadcast(message: JsValue, gameId: String)





