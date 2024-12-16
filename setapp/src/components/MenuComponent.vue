<template>
  <div class="menu">
    <a href="#" class="undo" :class="{ disabled: !canUndo }" @click.prevent="triggerAction('undo')">UNDO</a>
    <a href="#" class="redo" :class="{ disabled: !canRedo }" @click.prevent="triggerAction('redo')">REDO</a>

    <a v-if="gameState" href="#" class="add-cards" @click.prevent="triggerAction('addColumn')">ADD CARDS</a>
    <a v-if="gameState" href="#" class="exit" @click.prevent="triggerAction('exit')">EXIT</a>
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
  },
  methods: {
    triggerAction(action) {
      const websocket = getWebSocket();
      websocket.send(JSON.stringify({ action }));
    },
  },
};
</script>

<style scoped>
/* Add any styles needed for the menu component */
</style>
