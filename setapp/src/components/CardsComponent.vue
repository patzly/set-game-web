<template>
  <div class="cards">
    <div v-for="(card, index) in localCards" :key="index" class="card-container">
      <canvas
          :class="{ card: true, selected: card.selected ?? false }"
          :ref="'cardCanvas-' + index" />
      <input
          type="checkbox"
          :id="'card-' + index"
          class="card-checkbox"
          :checked="card.selected"
          :disabled="!isPlayerSelected"
          @change="handleCheckboxChange(index)"
      />

    </div>
  </div>
</template>

<script>
import { getWebSocket } from "../../../public/javascripts/websocket.js";

export default {
  name: "cards-component",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
    selectedIndices: {
      type: Array,
      default: () => [],
    },
    selectedPlayer: {
      type: Object,
      default: () => null,
    }
  },
  data() {
    return {
      localCards: [...this.cards], // Lokale Kopie der Karten
      sessionSelectedIndices: [...this.selectedIndices],
    };
  },
  methods: {
    renderCard(canvasId) {
      const canvasArray = this.$refs[`cardCanvas-${canvasId}`];

      if (Array.isArray(canvasArray) && canvasArray[0]?.tagName === "CANVAS") {
        const canvas = canvasArray[0];
        const card = this.localCards[canvasId]
        const ctx = canvas.getContext('2d');

        if (ctx) {
          // card.symbol === "DIAMOND"
          // card.symbol === "SQUIGGLE"
          // card.symbol === "OVAL"
          // card.color === "RED"
          // card.color === "GREEN"
          // card.color === "BLUE"
          // card.shading === "OUTLINED"
          // card.shading === "STRIPED"
          // card.shading === "SOLID"
          // card.number === 1

          if (card.color === "GREEN") {
            ctx.fillStyle = 'green';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          } else if (card.color === "BLUE") {
            ctx.fillStyle = 'blue';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          } else if (card.color === "RED") {
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

        } else {
          console.warn(`Canvas context for ID ${canvasId} could not be retrieved.`);
        }
      } else {
        console.warn(`Canvas with ID ${canvasId} is not valid or not found.`);
      }
    }


    ,
    handleCheckboxChange(index) {
      if (!this.selectedPlayer) {
        return;
      }

      const idx = this.sessionSelectedIndices.indexOf(index);
      if (idx > -1) {
        this.sessionSelectedIndices.splice(idx, 1);
      } else {
        this.sessionSelectedIndices.push(index);
      }

      // Lokale Kopie ändern, nicht direkt die Props
      this.localCards[index].selected = !this.localCards[index].selected;

      if (this.sessionSelectedIndices.length === 3) {
        this.selectCards(this.sessionSelectedIndices);
        this.resetSelection();
      }
    },

    selectCards(selectedIndices) {
      const websocket = getWebSocket();
      const coordinates = selectedIndices.map(index => {
        const col = String.fromCharCode(97 + Math.floor(index / 3));
        const row = (index % 3) + 1;
        return `${col}${row}`;
      });

      websocket.send(
          JSON.stringify({
            action: "selectCards",
            coordinates: coordinates.join("-"),
          })
      );

      console.log("Selected card coordinates:", coordinates);
    },

    resetSelection() {
      this.sessionSelectedIndices = [];
      this.localCards.forEach(card => (card.selected = false)); // Direkt die Referenz aktualisieren
    }

  },

  computed: {
    isPlayerSelected() {
      return this.selectedPlayer !== null;
    }
  },

  watch: {
    cards: {
      immediate: true,
      handler(newCards) {
        this.localCards = [...newCards];
        this.$nextTick(() => {
          this.localCards.forEach((_, index) => {
            this.renderCard(index);
          });
        });
      },
    },
  }
,
};
</script>

<style scoped>
/* Add any styles needed for the cards component */
</style>
