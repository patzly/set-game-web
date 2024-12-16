<template>
  <div class="cards">
    <div v-for="(card, index) in localCards" :key="index" class="card-container">
      <input
          type="checkbox"
          :id="'card-' + index"
          class="card-checkbox"
          :checked="card.selected"
          :disabled="!isPlayerSelected"
          @change="handleCheckboxChange(index)"
      />
      <label
          :for="'card-' + index"
          :class="{ card: true, selected: card.selected ?? false }"
          v-html="card.name">
      </label>
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
    // Wenn sich die Prop `cards` ändert, aktualisiere die lokale Kopie
    cards: {
      immediate: true,
      handler(newCards) {
        this.localCards = [...newCards];
      },
    },
  },
};
</script>

<style scoped>
/* Add any styles needed for the cards component */
</style>
