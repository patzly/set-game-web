import { getWebSocket } from "./websocket.js";

export default {
    name: "settings-component",
    props: {
        playerCount: Number,
        easyMode: Boolean,
    },
    methods: {
        addPlayer() {
            const websocket = getWebSocket();
            websocket.send(
                JSON.stringify({ action: "addPlayer"})
            );
        },
        removePlayer() {
            const websocket = getWebSocket();
            websocket.send(
                JSON.stringify({ action: "removePlayer"})
            );
        },
        toggleEasyMode() {
            const websocket = getWebSocket();
            websocket.send(
                JSON.stringify({ action: "switchEasy" })
            );
        },
        startGame() {
            const websocket = getWebSocket();
            websocket.send(
                JSON.stringify({ action: "startGame" })
            );
        },
    },
    template: `
      <div class="settings">
            <div class="row">
                <div class="label">PLAYERS</div>
                <div class="value">
                    <a href="#" 
                       class="button-left" 
                       :class="{ disabled: playerCount <= 1 }" 
                       @click.prevent="removePlayer"></a>
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
      
    `,
};
