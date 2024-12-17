<template>
  <div class="game-options">
    <div class="row">
      <!-- CREATE GAME Button -->
      <a href="#"
         class="button create-game"
         @click.prevent="createGame">CREATE GAME</a>

      <!-- Join Game Input Field and Button in the same row -->
      <div class="join-game-wrapper">
        <input type="text"
               class="game-id-input"
               v-model="gameId"
               placeholder="Enter Game ID" />
        <a href="#"
           class="button join-game"
           @click.prevent="joinGame">JOIN GAME</a>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "home-component",
  props: {
    offlineMode: Boolean
  }
  ,
  data() {
    return {
      gameId: "" // Stores the entered Game ID
    };
  },
  methods: {
    createGame() {
      const uniqueId = this.generateUniqueId();
      this.$emit("localCreateGame", uniqueId);

    },

    joinGame() {
      if (!this.gameId) {
        console.warn("Game ID is required to join a game.");
        return;
      }

      this.$emit("localJoinGame", this.gameId);

    },

    generateUniqueId() {
      return Math.random().toString(36).substr(2, 9); // Generiert eine eindeutige ID
    }
  }
};
</script>

<style scoped>

</style>
