<template>
  <div id="app">
    <menu-component
        v-if="!home"
        :offlineMode="home"
        :can-undo="canUndo"
        :can-redo="canRedo"
        :gameState="gameState"
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
        :offlineMode="home"
        :gameState="gameState"
        :playerCount="playerCount"
        :selectedPlayer="selectedPlayer"
        :players="players"
        :message="message"
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
    };
  },
  methods: {
    setWebSocket(uniqueId) {
      this.loading = true; // Ladezustand aktivieren
      this.websocket = initializeWebSocket(`ws://localhost:9000/socket/${uniqueId}`);
      console.log("WebSocket updated in MainComponent:", this.websocket);

      this.websocketTimeout = setTimeout(() => {
        if (!this.websocket || this.websocket.readyState !== WebSocket.OPEN) {
          this.isOnline = false;
          console.log("WebSocket konnte nicht innerhalb von 5 Sekunden verbunden werden. Offline-Modus aktiviert.");
          this.loading = false; // Ladezustand deaktivieren
        }
      }, 50); // 5 Sekunden

        this.setupWebSocketHandlers();

    },
    disableOfflineMode() {
      // Setzt den offlineMode auf false
      this.home = true;
      this.isOnline = true;
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
          this.cards = data.cards.map(c => new Card(c.number, c.color, c.symbol, c.selected, c.name));
        }
        if (data.players) {
          this.players = data.players;
        }
      };

      this.websocket.onclose = () => {
        console.warn("WebSocket closed. Game may be disconnected.");
        this.websocket = null;
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

