export function setupUIHandlers(websocket) {
    document.querySelectorAll('.exit').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "exit"}));
    }));

    document.querySelectorAll('.add-cards').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "addColumn"}));
    }));

    document.querySelectorAll('.start-button').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "startGame"}));
    }));

    document.querySelectorAll('.redo').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "redo"}));
    }));

    document.querySelectorAll('.undo').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "undo"}));
    }));

    document.querySelectorAll('.mode-switch').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "switchEasy"}));
    }));

    document.querySelectorAll('.button-right').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "addPlayer"}));
    }));

    document.querySelectorAll('.button-left').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        websocket.send(JSON.stringify({action: "removePlayer"}));
    }));

    document.querySelectorAll('.player-link').forEach(el => el.addEventListener('click', (e) => {
        e.preventDefault();
        const playerNumber = e.target.textContent.match(/\d+/)[0];
        websocket.send(JSON.stringify({
            action: "selectPlayer",
            playerNumber: playerNumber
        }));
    }));
}

export function toggleButtons(canUndo, canRedo, easy, playerCount) {
    document.getElementById("player-count").textContent = playerCount;

    toggleClass('#remove-player', 'disabled', playerCount <= 1);
    toggleClass('#add-player', 'disabled', playerCount >= 10);
    toggleClass('.undo', 'disabled', !canUndo);
    toggleClass('.redo', 'disabled', !canRedo);
    document.querySelector('.mode-switch').textContent = easy ? "ON" : "OFF";
}

function toggleClass(selector, className, condition) {
    document.querySelector(selector)?.classList.toggle(className, condition);
}

export function toggleCheckboxes() {
    const isPlayerSelected = document.querySelector(".player-selection .selected") !== null;
    document.querySelectorAll(".card-checkbox").forEach(checkbox => {
        checkbox.disabled = !isPlayerSelected;
        if (!isPlayerSelected) checkbox.checked = false;
    });
}
