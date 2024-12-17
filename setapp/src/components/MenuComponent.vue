<template>
  <div class="menu">
    <a href="#" class="undo" :class="{ disabled: !canUndo }" @click.prevent="triggerAction('undo')">UNDO</a>
    <a href="#" class="redo" :class="{ disabled: !canRedo }" @click.prevent="triggerAction('redo')">REDO</a>
    <a v-if="gameState" href="#" class="add-cards" @click.prevent="triggerAction('addColumn')">ADD CARDS</a>
    <a v-if="gameState" href="#" class="exit" @click.prevent="triggerAction('exit')">EXIT</a>
    <div class="game-id">
      <label for="gameIdInput">Game ID:</label>
      <input
          id="gameIdInput"
          type="text"
          :value="gameId"
          readonly
          @click="copyGameId"
          title="Klicken, um die Game-ID zu kopieren"
      />
    </div>
  </div>
</template>

<script>
import { getWebSocket } from "../../../public/javascripts/websocket";

export default {
  name: "menu-component",
  props: {
    canUndo: Boolean,
    canRedo: Boolean,
    gameState: Boolean,
    gameId: String,
  },
  methods: {
    triggerAction(action) {
      const websocket = getWebSocket();
      websocket.send(JSON.stringify({ action }));
    },
    copyGameId() {
      navigator.clipboard.writeText(this.gameId).then(() => {
        //alert("Game-ID wurde kopiert!");
      }).catch(err => {
        console.error("Fehler beim Kopieren der Game-ID:", err);
      });
    },
  },
};
</script>


