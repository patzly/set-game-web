<template>
  <div class="settings">
    <div class="row">
      <div class="label">PLAYERS</div>
      <div class="value">
        <a href="#"
           class="button-left"
           :class="{ disabled: playerCount <= 1 }"
           @click.prevent="removePlayer">&lt;</a>
        {{ playerCount }}
        <a href="#"
           class="button-right"
           :class="{ disabled: playerCount >= 10 }"
           @click.prevent="addPlayer">></a>
      </div>
    </div>
    <div class="row">
      <div class="label">EASY MODE</div>
      <div class="value">
        <a href="#"
           class="highlight"
           @click.prevent="toggleEasyMode">
          {{ easyMode ? "ON" : "OFF" }}
        </a>
      </div>
    </div>
    <div class="start">
      <a href="#" class="start-button" @click.prevent="startGame()">START GAME</a>
    </div>
  </div>
</template>

<script>
import { getWebSocket } from "../../../public/javascripts/websocket";

export default {
  name: "settings-component",
  props: {
    playerCount: Number, // Von der Eltern-Komponente übergeben
    easyMode: Boolean, // Von der Eltern-Komponente übergeben
    offlineMode: Boolean,
  },
  methods: {
    addPlayer() {
      if (!this.offlineMode) {
        const websocket = getWebSocket();
        if (websocket.readyState === WebSocket.OPEN) {
          // WebSocket senden
          websocket.send(JSON.stringify({ action: "addPlayer" }));
        } else {
          console.warn("WebSocket offline: Spieleranzahl wird nur lokal aktualisiert.");
          // Nur lokal aktualisieren, wenn WebSocket offline ist
          this.$emit("update:playerCount", this.playerCount + 1);
        }
      } else {
        this.$emit("update:playerCount", this.playerCount + 1);
      }
    },
    removePlayer() {
      if (!this.offlineMode) {
      const websocket = getWebSocket();
      if (websocket.readyState === WebSocket.OPEN) {
        // WebSocket senden
        websocket.send(JSON.stringify({ action: "removePlayer" }));
      } else {
        console.warn("WebSocket offline: Spieleranzahl wird nur lokal aktualisiert.");
        // Nur lokal aktualisieren, wenn WebSocket offline ist
        this.$emit("update:playerCount", this.playerCount - 1);
      }
    } else {
        this.$emit("update:playerCount", this.playerCount - 1);
      }
      },
    toggleEasyMode() {
      const websocket = getWebSocket();
      if (websocket.readyState === WebSocket.OPEN) {
        websocket.send(JSON.stringify({ action: "switchEasy" }));
      } else {
        console.warn("WebSocket offline: Easy Mode kann nicht geändert werden.");
      }
    },
    startGame() {
      const websocket = getWebSocket();
      if (websocket.readyState === WebSocket.OPEN) {
        websocket.send(JSON.stringify({ action: "startGame" }));
      } else {
        console.error("WebSocket offline: Das Spiel kann nicht gestartet werden.");
      }
    },
  },
};
</script>

<style scoped>
/* Füge hier spezifische Styles für die Settings-Komponente hinzu */
</style>
