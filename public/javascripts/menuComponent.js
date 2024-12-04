import { getWebSocket } from "./websocket.js";

export default Vue.component('menu-component', {
    props: {
        canUndo: Boolean,
        canRedo: Boolean,
        gameState: Boolean,
    },
    template: `
        <div class="menu">
            <a href="#" class="undo" :class="{ disabled: !canUndo }" @click.prevent="triggerAction('undo')">UNDO</a>
            <a href="#" class="redo" :class="{ disabled: !canRedo }" @click.prevent="triggerAction('redo')">REDO</a>
            
            <!-- Nur anzeigen, wenn gameState true ist -->
            <a v-if="gameState" href="#" class="add-cards" @click.prevent="triggerAction('addColumn')">ADD CARDS</a>
            <a v-if="gameState" href="#" class="exit" @click.prevent="triggerAction('exit')">EXIT</a>
        </div>
    `,
    methods: {
        triggerAction(action) {
            const websocket = getWebSocket();
            websocket.send(JSON.stringify({ action }));
        },
    },
});

