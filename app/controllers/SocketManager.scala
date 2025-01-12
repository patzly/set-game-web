package controllers

import de.htwg.se.set.controller.IController
import org.apache.pekko.actor.*
import play.api.libs.json.{JsValue, Json}
import scala.collection.mutable

class SocketManager(controllersMap: mutable.Map[String, IController]) extends Actor {
  private var gameClients = Map.empty[String, Set[ActorRef]]

  override def receive: Receive = {
    case Connect(client, gameId) =>
      val updatedClients = gameClients.getOrElse(gameId, Set.empty) + client
      gameClients += (gameId -> updatedClients)
      println(s"Client connected to gameId: $gameId, client: $client")

    case Disconnect(client, gameId) =>
      gameClients.get(gameId).foreach { clients =>
        val updatedClients = clients - client
        if (updatedClients.isEmpty) {
          // Entferne den Controller und die Clients, wenn keine mehr übrig sind
          gameClients -= gameId
          controllersMap.remove(gameId)
          println(s"All clients disconnected. Removed controller for gameId: $gameId")
        } else {
          gameClients += (gameId -> updatedClients)
          println(s"Client disconnected from gameId: $gameId, client: $client")
        }
      }

    case Broadcast(message, gameId) =>
      gameClients.get(gameId).foreach { clients =>
        clients.foreach(_ ! message)
      }
  }
}

// Nachrichten für den SocketManager
case class Connect(client: ActorRef, gameId: String)

case class Disconnect(client: ActorRef, gameId: String)

case class Broadcast(message: JsValue, gameId: String)
