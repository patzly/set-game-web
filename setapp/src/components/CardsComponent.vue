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

function createStripedPattern(color, strokeWidth) {
  const patternCanvas = document.createElement("canvas");
  const patternContext = patternCanvas.getContext("2d");

  // Give the pattern a width and height of 50
  patternCanvas.width = strokeWidth * 2;
  patternCanvas.height = strokeWidth * 2;

  // Give the pattern a background color and draw an arc
  patternContext.fillStyle = color;
  patternContext.fillRect(0, 0, patternCanvas.width, strokeWidth);

  // Create our primary canvas and fill it with the pattern
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  return ctx.createPattern(patternCanvas, "repeat");
}

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
      this.$forceUpdate();
      const canvasArray = this.$refs[`cardCanvas-${canvasId}`];

      if (Array.isArray(canvasArray) && canvasArray[0]?.tagName === "CANVAS") {
        const canvas = canvasArray[0];
        const card = this.localCards[canvasId]
        console.log(card, canvasId);
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          this.$forceUpdate();

          let color;
          if (card.color === "RED") {
            color = '#da0100';
          } else if (card.color === "GREEN") {
            color = '#ffa800';
          } else if (card.color === "BLUE") {
            color = '#060488';
          }
          ctx.strokeStyle = color;
          ctx.lineWidth = 5;
          if (card.shading === "SOLID") {
            ctx.fillStyle = color;
          } else if (card.shading === "STRIPED") {
            ctx.fillStyle = createStripedPattern(color, 5);
          } else if (card.shading === "OUTLINED") {
            ctx.fillStyle = 'white';
          } else {
            // Easy mode
            ctx.fillStyle = color;
          }
          const outerMargin = 10;
          const w = canvas.width - outerMargin * 2
          const h = canvas.height - outerMargin * 2
          const symbolWidth = w / 5
          const symbolHeight = h / 2
          let positions;
          if (card.number === 1) {
            positions = [w / 2 + outerMargin];
          } else if (card.number === 2) {
            const space = card.symbol !== "SQUIGGLE" ? w / 4 : w / 3;
            const extra = (space - symbolWidth) / 2 - (card.symbol !== "SQUIGGLE" ? 0 : 45);
            positions = [
              space + symbolWidth / 2 + outerMargin + extra,
              2 * space + symbolWidth / 2 + outerMargin + extra
            ];
          } else if (card.number === 3) {
            const space = card.symbol !== "SQUIGGLE" ? w / 4 : w / 3;
            const extra = card.symbol !== "SQUIGGLE" ? 0 : -45;
            positions = [
                space + outerMargin + extra,
              2 * space + outerMargin + extra,
              3 * space + outerMargin + extra
            ];
          }
          if (card.symbol === "OVAL") {
            for (let i = 0; i < positions.length; i++) {
              ctx.roundRect(
                  positions[i] - symbolWidth / 2,
                  h / 2 + outerMargin - symbolHeight / 2,
                  symbolWidth,
                  symbolHeight,
                  symbolWidth / 2
              );
              ctx.fill();
              ctx.stroke();
            }
          } else if (card.symbol === "DIAMOND") {
            for (let i = 0; i < positions.length; i++) {
              const x = positions[i];
              const y = h / 2 + outerMargin - symbolHeight / 2;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x - symbolWidth / 2, y + symbolHeight / 2);
              ctx.lineTo(x, y + symbolHeight);
              ctx.lineTo(x + symbolWidth / 2, y + symbolHeight / 2);
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
            }
          } else if (card.symbol === "SQUIGGLE") {
            for (let i = 0; i < positions.length; i++) {
              const x = positions[i];
              const y = h / 2 + outerMargin - symbolHeight / 2;

              ctx.save();

              const scale = 0.65;
              ctx.scale(scale, scale);
              ctx.translate(x + 100, y + 120);
              ctx.rotate(Math.PI / 2); // 90 degrees

              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.bezierCurveTo(8.4, 21.9, -14.3, 45.8, -41.0, 39.0);
              ctx.bezierCurveTo(-51.7, 36.3, -61.8, 27.0, -77.0, 38.0);
              ctx.bezierCurveTo(-94.4, 50.6, -98.6, 43.3, -99.0, 25.0);
              ctx.bezierCurveTo(-99.4, 7.0, -84.9, -5.3, -68.0, -3.0);
              ctx.bezierCurveTo(-44.8, -0.8, -42.1, 16.5, -15.0, -1.0);
              ctx.bezierCurveTo(-8.7, -5.0, -3.1, -8.1, 0, 0);
              ctx.closePath();

              ctx.restore();

              ctx.fill();
              ctx.stroke();
            }
            this.$forceUpdate();
          }
        } else {
          console.warn(`Canvas context for ID ${canvasId} could not be retrieved.`);
        }
      } else {
        console.warn(`Canvas with ID ${canvasId} is not valid or not found.`);
      }
    },

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
          this.$forceUpdate();
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
