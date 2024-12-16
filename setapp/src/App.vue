<template>
  <div id="app">
    <menu-component
        :offlineMode="offlineMode"
        :can-undo="canUndo"
        :can-redo="canRedo"
        :gameState="gameState"
    />
    <div class="main">
      <settings-component
          v-if="!gameState"
          :offlineMode="offlineMode"
          :playerCount="playerCount"
          :easyMode="easyMode"
          @update:playerCount="playerCount = $event"
      />
      <cards-component
          v-if="gameState"
          :offlineMode="offlineMode"
          :cards="cards"
          :selectedPlayer="selectedPlayer"
      />
    </div>
    <bottom-component
        :offlineMode="offlineMode"
        :gameState="gameState"
        :playerCount="playerCount"
        :selectedPlayer="selectedPlayer"
        :players="players"
        :message="message"
        @select-player="handlePlayerSelection"
    />
    <offline-component v-if="!isOnline"></offline-component>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import { getWebSocket, initializeWebSocket } from "../../public/javascripts/websocket.js";
import SettingsComponent from './components/SettingsComponent.vue';
import CardsComponent from './components/CardsComponent.vue';
import BottomComponent from './components/BottomComponent.vue';
import OfflineComponent from './components/OfflineComponent.vue';
import {Card} from "../../public/javascripts/setVue";

export default {
  name: 'MainComponent',
  components: {
    MenuComponent,
    SettingsComponent,
    CardsComponent,
    BottomComponent,
    OfflineComponent
  },
  data() {
    return {
      websocket: null,
      canUndo: false,
      canRedo: false,
      gameState: false,
      playerCount: 1,
      easyMode: false,
      cards: [],
      selectedCardIndices: [],
      selectedPlayer: null,
      players: [],
      message: "",
      isOnline: navigator.onLine,
      offlineMode: false
    };
  },
  mounted() {
    // WebSocket initialisieren
    if (!this.offlineMode) {
      this.websocket = initializeWebSocket("ws://localhost:9000/socket");
      this.setupWebSocketHandlers();
    }

    // Überwache Netzwerkverbindung
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);

    // Zustand aus Local Storage wiederherstellen
    const storedState = localStorage.getItem('mainComponentState');
    if (storedState) {
      Object.assign(this, JSON.parse(storedState));
    }
  },
  watch: {
    // Reagiere auf Änderungen an Daten und speichere sie
    gameState: "saveState",
    playerCount: "saveState",
    easyMode: "saveState",
    cards: "saveState",
    selectedPlayer: "saveState",
    players: "saveState",
    canUndo: "saveState",
    canRedo: "saveState",
    message: "saveState",
    isOnline: "saveState",
  },
  methods: {
    setupWebSocketHandlers() {
      this.websocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("WebSocket message:", data);

        // Aktualisiere die Daten und speichere sie
        this.canUndo = data.canUndo ?? this.canUndo;
        this.canRedo = data.canRedo ?? this.canRedo;
        this.gameState = data.inGame ?? this.gameState;
        this.easyMode = data.easy ?? this.easyMode;
        this.playerCount = data.playercount ?? this.playerCount;
        this.selectedPlayer = data.selectedPlayer ?? null;
        this.message = data.message ?? this.message;

        if (data.selectedPlayer != null) {
          this.selectedPlayer = this.players.find(player => player.number === data.selectedPlayer);
        }
        if (data.cards) {
          this.cards = data.cards.map(c => new Card(c.number, c.color, c.symbol, c.selected, c.name));
        }
        if (data.players) {
          this.players = data.players;
        }

        // Speichere den aktualisierten Zustand
        this.saveState();
      };
    },
    saveState() {
      // Speichere den Zustand der gesamten Komponente
      localStorage.setItem('mainComponentState', JSON.stringify({
        gameState: this.gameState,
        playerCount: this.playerCount,
        easyMode: this.easyMode,
        cards: this.cards,
        selectedPlayer: this.selectedPlayer,
        players: this.players,
        canUndo: this.canUndo,
        canRedo: this.canRedo,
        message: this.message,
        isOnline: this.isOnline,
      }));
    },
    handlePlayerSelection(player) {
      const websocket = getWebSocket();
      websocket.send(JSON.stringify({
        action: "selectPlayer",
        playerNumber: player.number
      }));

      this.selectedPlayer = player;
    },
    handleOnline() {
      this.isOnline = true;
      console.log("Online");
    },
    handleOffline() {
      this.isOnline = false;
      console.log("Offline");
    }
  }
};
</script>

<style scoped>
/* Fügen Sie hier allgemeine Styles für die MainComponent hinzu, falls nötig */
</style>
