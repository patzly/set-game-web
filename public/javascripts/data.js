import {getWebSocket} from './websocket.js';

export let cards = [];
export let cardCheckboxes = [];

// Definiere die Card-Klasse
export class Card {
    constructor(number, color, symbol, selected, name) {
        this.number = number;
        this.color = color;
        this.symbol = symbol;
        this.selected = selected;
        this.name = name;
    }
}

export function setCards(c) {
    this.cards = c;
}

export function fetchCards() {
    cards = [];
    cardCheckboxes = [];
    $.ajax({
        url: '/cards',
        method: 'GET',
        dataType: 'json',
        success: (data) => {
            console.log("Received cards:", data.cards);

            data.cards.forEach(c => {
                cards.push(new Card(c.number, c.color, c.symbol, c.selected, c.name));
            });

            renderCards();
            toggleCheckboxes();
        },
        error: (xhr, status, error) => {
            console.error("Error fetching cards:", error);
        }
    });
}

function renderCards() {
    const cardsContainer = document.querySelector(".cards");
    if (!cardsContainer) {
        console.error("Container '.cards' not found!");
        return;
    }

    cardsContainer.innerHTML = "";
    cards.forEach((card, idx) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `card-${idx}`;
        checkbox.classList.add("card-checkbox");
        checkbox.checked = card.selected;

        const label = document.createElement("label");
        label.setAttribute("for", `card-${idx}`);
        label.classList.add("card");
        if (card.selected) {
            label.classList.add("selected");
        }

        // Füge den Namen der Karte ein (HTML)
        label.innerHTML = card.name;

        cardsContainer.appendChild(checkbox);
        cardsContainer.appendChild(label);

        cardCheckboxes.push(checkbox);
        checkbox.addEventListener("change", handleCheckboxChange);
    });
}

function handleCheckboxChange() {
    const websocket = getWebSocket();

    const selectedCards = Array.from(cardCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => parseInt(checkbox.id.replace("card-", ""), 10));

    if (selectedCards.length === 3) handleSelectCards(selectedCards);
}

function handleSelectCards(selectedIndices) {
    const websocket = getWebSocket();

    const coordinates = selectedIndices.map(index => {
        const col = String.fromCharCode(97 + Math.floor(index / 3));
        const row = (index % 3) + 1;
        return `${col}${row}`;
    });

    const coordinatesParam = coordinates.join("-");
    websocket.send(JSON.stringify({
        action: "selectCards",
        coordinates: coordinatesParam
    }));
    console.log(coordinatesParam);
}

export function reset() {
    const playerLinks = document.querySelectorAll('.player-link');
    playerLinks.forEach(link => link.classList.remove('selected'));
}

export function selectPlayer(playerNumber) {
    if (playerNumber == null) {
        return;
    }

    // Entferne die Klasse 'selected' von allen Links
    const playerLinks = document.querySelectorAll('.player-link');
    playerLinks.forEach(link => link.classList.remove('selected'));

    // Markiere den gewählten Spieler
    const selectedLink = [...playerLinks].find(link => link.textContent.includes(`PLAYER ${playerNumber}`));
    if (selectedLink) {
        selectedLink.classList.add('selected');
    }

    toggleCheckboxes();
}

export function toggleCheckboxes() {
    const cardCheckboxes = document.querySelectorAll('.card-checkbox');
    const isPlayerSelected = document.querySelector('.player-link.selected') !== null;

    cardCheckboxes.forEach(checkbox => {
        checkbox.disabled = !isPlayerSelected;
        if (!isPlayerSelected) checkbox.checked = false;
    });
}

export function updateMessage(message) {
    const message_element = document.querySelector(".message");

    if (!message_element) {
        console.error("Label '.message' nicht gefunden!"); // Debugging
        return;
    }
    message_element.textContent = message
}

