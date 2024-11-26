import {initializeWebSocket} from './websocket.js';
import {setupUIHandlers, toggleButtons, toggleCheckboxes} from './ui.js';
import {cards, fetchCards, reset, selectPlayer, setCards, updateMessage} from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    let canUndo = false;
    let canRedo = false;
    let easy = false;
    let playerCount = 0;

    const websocket = initializeWebSocket("ws://localhost:9000/socket");

    websocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("Received from server:", data);
        if (data.cardsChanged) fetchCards(websocket);
        if (data.messageChanged) updateMessage(data.message);
        if (data.reload) setTimeout(() => location.reload(), 100);
        if (data.reset) setTimeout(() => location.reload(), 100);

        canUndo = data.canUndo ?? canUndo;
        canRedo = data.canRedo ?? canRedo;
        easy = data.easy ?? easy;
        playerCount = data.playercount ?? playerCount;


        selectPlayer(data.selectedPlayer);
        toggleButtons(canUndo, canRedo, easy, playerCount);
    }

    setupUIHandlers(websocket);

    fetchCards();
});
