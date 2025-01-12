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
        <LoginComponent
            v-if="!user && showLogin"
            @switch-to-register="showRegisterComponent"
            :onAuthenticated="handleAuthenticated"
        />
        <RegisterComponent
            v-if="!user && !showLogin"
            @switch-to-login="showLoginComponent"
            :onAuthenticated="handleAuthenticated"
        />
        <home-component
            v-if="home && user"
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import LoginComponent from "@/components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";
import MenuComponent from './components/MenuComponent.vue';
import SettingsComponent from './components/SettingsComponent.vue';
import CardsComponent from './components/CardsComponent.vue';
import BottomComponent from './components/BottomComponent.vue';
import OfflineComponent from './components/OfflineComponent.vue';
import HomeComponent from "@/components/HomeComponent.vue";
import { initializeWebSocket } from "../../public/javascripts/websocket";
import { Card } from "../../public/javascripts/setVue";

export default {
  name: 'MainComponent',
  components: {
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HomeComponent,
    SettingsComponent,
    CardsComponent,
    BottomComponent,
    OfflineComponent
  },
  data() {
    return {
      user: null, // Authentifizierter Benutzer
      showLogin: true, // Anzeigen der Login- oder Registrierungsansicht
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
    handleAuthenticated(user) {
      this.user = user; // Benutzer nach erfolgreicher Authentifizierung setzen
    },
    showRegisterComponent() {
      this.showLogin = false;
    },
    showLoginComponent() {
      this.showLogin = true;
    },
    setWebSocket(uniqueId) {
      this.loading = true; //// Ladezustand aktivieren
      this.isOnline = true;
      if (this.websocket != null && this.websocket.open) {
        this.websocket.close();
      }

      this.websocket = initializeWebSocket(`ws://localhost:9000/socket/${uniqueId}`);
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
      this.home = true;
      this.isOnline = true;
      location.reload();
    },
    setupWebSocketHandlers() {
      if (!this.websocket) return;

      this.websocket.onopen = () => {
        if (this.websocketTimeout) {
          clearTimeout(this.websocketTimeout);
          this.websocketTimeout = null;
        }
        this.isOnline = true;
        this.websocket.send(JSON.stringify({ action: "getState" }));
        this.loading = false;
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
        this.loading = false;
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
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  }
};
</script>
