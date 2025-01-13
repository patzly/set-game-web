<template>
  <div id="app">
    <menu-component
        v-if="!home"
        :offlineMode="home"
        :can-undo="canUndo"
        :can-redo="canRedo"
        :gameState="gameState"
        :gameId="gameId"
    />

    <div class="main">
      <home-component
          v-if="home"
          :offlineMode="home"
          @updateWebSocket="setWebSocket"
          @localCreateGame="handleLocalCreateGame"
          @localJoinGame="handleLocalJoinGame"
      />
      <settings-component
          v-if="!gameState && !home"
          :offlineMode="home"
          :playerCount="playerCount"
          :easyMode="easyMode"
          @update:playerCount="playerCount = $event"
      />
      <cards-component
          v-if="gameState"
          :offlineMode="home"
          :cards="cards"
          :selectedPlayer="selectedPlayer"
      />
    </div>
    <bottom-component
        :gameState="gameState"
        :playerCount="playerCount"
        :selectedPlayer="selectedPlayer"
        :players="players"
        :message="message"
        :home="home"
        @end-session="handleEndSession"
        @select-player="handlePlayerSelection"
    />
    <offline-component
        v-if="!isOnline && !home"
        :disableOfflineMode="disableOfflineMode"
    />
  </div>
</template>
<script>
import MenuComponent from './components/MenuComponent.vue';
import SettingsComponent from './components/SettingsComponent.vue';
import CardsComponent from './components/CardsComponent.vue';
import BottomComponent from './components/BottomComponent.vue';
import OfflineComponent from './components/OfflineComponent.vue';
import { Card } from "../../public/javascripts/setVue";
import HomeComponent from "@/components/HomeComponent.vue";
import { initializeWebSocket } from "../../public/javascripts/websocket";

export default {
  name: 'MainComponent',
  components: {
    MenuComponent,
    HomeComponent,
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
      home: true,
      websocketTimeout: null, // Timeout für WebSocket-Verbindung
      loading: false, // Ladezustand
      gameId: "",
    };
  },
  methods: {
    setWebSocket(uniqueId) {
      this.loading = true; //// Ladezustand aktivieren
      this.isOnline = true;
      if (this.websocket != null && this.websocket.open) {
        this.websocket.close();
      }

      this.websocket = initializeWebSocket(`ws://setapp-bf0783a743ff.herokuapp.com/socket/${uniqueId}`);
      this.gameId = uniqueId;
      console.log("WebSocket updated in MainComponent:", this.websocket);

      this.websocketTimeout = setTimeout(() => {
        if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) {
          this.isOnline = false;
          console.log("WebSocket konnte nicht innerhalb von 5 Sekunden verbunden werden. Offline-Modus aktiviert.");
          this.loading = false; // Ladezustand deaktivieren
        }
      }, 100); // 5 Sekunden

        this.setupWebSocketHandlers();

    },
    disableOfflineMode() {
      // Setzt den offlineMode auf false
      this.home = true;
      this.isOnline = true;
      location.reload();
    },
    setupWebSocketHandlers() {
      if (!this.websocket) return;

      this.websocket.onopen = () => {
        // Wenn die Verbindung geöffnet wurde, stoppen wir den Timeout
        if (this.websocketTimeout) {
          clearTimeout(this.websocketTimeout);
          this.websocketTimeout = null;
        }
        this.isOnline = true; // WebSocket erfolgreich verbunden, Offline-Modus deaktivieren
        this.websocket.send(JSON.stringify({ action: "getState" }));
        this.loading = false; // Ladezustand deaktivieren
        console.log("WebSocket-Verbindung erfolgreich.");
      };

      this.websocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("WebSocket message:", data);

        this.canUndo = data.canUndo ?? this.canUndo;
        this.canRedo = data.canRedo ?? this.canRedo;
        this.gameState = data.inGame ?? this.gameState;
        this.easyMode = data.easy ?? this.easyMode;
        this.playerCount = data.playercount ?? this.playerCount;
        this.selectedPlayer = data.selectedPlayer !== null
            ? this.players.find(player => player.number === data.selectedPlayer)
            : null;

        this.message = data.message ?? this.message;

        if (data.cards) {
          this.cards = data.cards.map(c => new Card(c.number, c.color, c.shading, c.symbol, c.selected, c.name));
        }
        if (data.players) {
          this.players = data.players;
        }
      };

      this.websocket.onclose = () => {
        console.warn("WebSocket closed. Game may be disconnected.");
        this.websocket = null;
        this.isOnline = true;
        this.loading = false; // Ladezustand deaktivieren
      };
    },
    handleLocalCreateGame(uniqueId) {
      console.log(`Local game created with ID: ${uniqueId}`);
      this.home = false;
      this.setWebSocket(uniqueId);
    },
    handleLocalJoinGame(uniqueId) {
      console.log("Joined game locally.");
      this.home = false;
      this.setWebSocket(uniqueId);
    },
    handleEndSession() {
      this.websocket.close();
      this.websocket = null;
      this.home = true;
      location.reload();

    },
    handlePlayerSelection(player) {
      if (this.websocket) {
        this.websocket.send(JSON.stringify({
          action: "selectPlayer",
          playerNumber: player.number
        }));
      }
      this.selectedPlayer = player;
    }
  }
};
</script>

