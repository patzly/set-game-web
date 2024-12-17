<template>
  <div class="bottom">
    <div v-if="home" class="rules">
      <a href="/rules">GAME RULES</a>
    </div>
    <div v-if="!gameState && !home" class="end-session">
      <a href="#" @click.prevent="endSession()">END SESSION</a>
    </div>
    <div v-if="gameState" class="player-selection">
      <div v-for="player in players" :key="player.number">
        <a href="#"
           :class="{'selected': selectedPlayer && selectedPlayer.number === player.number}"
           @click.prevent="selectPlayer(player)">
          PLAYER {{ player.number }}: {{ player.sets.length }}
        </a>

      </div>
    </div>
    <div v-if="gameState" class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "bottom-component",
  props: {
    gameState: {
      type: Boolean,
      required: true,
    },
    playerCount: {
      type: Number,
      required: true,
    },
    selectedPlayer: {
      type: Object,
      default: () => null,
    },
    players: {
      type: Array,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    home: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    selectPlayer(player) {
      this.$emit('select-player', player);  // We send the 'select-player' event up
    },
    endSession() {
      this.$emit('end-session')// We send the 'select-player' event up
    }
  }
};
</script>

<style scoped>
/* Add any styles needed for the bottom component */
</style>
