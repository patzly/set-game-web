/*
import MenuComponent from './menuComponent.js';
import { getWebSocket, initializeWebSocket } from "../../setapp/src/websocket.js";
import SettingsComponent from './settingsComponent.js';
import cardsComponent from './cardListComponent.js';
import BottomComponent from './bottomComponent.js';
import OfflineComponent from './offlineComponent.js';  // Importiere das OfflineComponent
 */


export class Card {
    constructor(number, color, shading, symbol, selected, name) {
        this.number = number;
        this.color = color;
        this.shading = shading;
        this.symbol = symbol;
        this.selected = selected;
        this.name = name;
    }
}

/*
function isOnline() {
    return navigator.onLine;
}

new Vue({
    el: '#app',
    components: {
        MenuComponent,
        SettingsComponent,
        cardsComponent,
        BottomComponent,
        OfflineComponent,  // Füge OfflineComponent zu den Vue-Komponenten hinzu
    },
    data: {
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
        isOnline: navigator.onLine, // Zustand der Verbindung
    },
    created() {
        // WebSocket initialisieren
        this.websocket = initializeWebSocket("ws://localhost:9000/socket");
        this.setupWebSocketHandlers();

        // Überwache Netzwerkverbindung
        window.addEventListener('online', this.handleOnline);


        // Service Worker registrieren
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('Service Worker registered:', registration);
                    })
                    .catch(error => {
                        console.error('Service Worker registration failed:', error);
                    });
            });
        }
        window.addEventListener('offline', this.handleOffline);
    },
    methods: {
        setupWebSocketHandlers() {
            this.websocket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                console.log("WebSocket message:", data);

                // Update game state and other properties
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
            };
        },
        handlePlayerSelection(player) {
            const websocket = getWebSocket();
            websocket.send(JSON.stringify({
                action: "selectPlayer",
                playerNumber: player.number
            }));
            console.log(JSON.stringify({
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
    },
    template: `
        <div id="app">
            <menu-component 
                :can-undo="canUndo" 
                :can-redo="canRedo" 
                :gameState="gameState" 
            />
            <div class="main">
                <settings-component 
                    v-if="!gameState" 
                    :playerCount="playerCount" 
                    :easyMode="easyMode" 
                />
                <cards-component
                    v-if="gameState"
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
                @select-player="handlePlayerSelection"
            />
            <offline-component v-if="!isOnline"></offline-component>
        </div>
    `,
});

 */

