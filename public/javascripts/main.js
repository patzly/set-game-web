document.addEventListener("DOMContentLoaded", () => {

    const playerLinks = document.querySelectorAll(".player-selection a");
    const numRows = 3;

    let canUndo = false;
    let canRedo = true;

    let easy = false;

    let cardCheckboxes = [];

    let playerCount = 0;


    class Card {
        constructor(number, color, symbol, selected, name) {
            this.number = number;
            this.color = color;
            this.symbol = symbol;
            this.selected = selected;
            this.name = name;
        }
    }

    let cards = [];


    toggleCheckboxes();


    fetchCards();

    const websocket = new WebSocket("ws://localhost:9000/socket");


    websocket.onopen = function () {
        console.log("WebSocket connected");

    };

    websocket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        console.log("Received from server:", data);

        // Beispiel: Zugriff auf serverseitige JSON-Daten
        if (data.succes) console.log(data.message);
        if (data.error) console.log("Error: ", data.message);

        if (data.reload) {
            setTimeout(function () {
                location.reload();
            }, 100);
        }

        if (data.cardsChanged) fetchCards();
        if (data.messageChanged) {
            updateMessage(data.message);
            resetSelection();
        }

        canUndo = data.canUndo
        canRedo = data.canRedo


        if (data.easy != null) {
            easy = data.easy;
        }

        if (data.playercount != null) {
            playerCount = data.playercount;
        }

        selectPlayer(data.selectedPlayer);
        toggleButtons();


    };

    websocket.onerror = function (error) {
        console.error("WebSocket error:", error);
    };


    $('.exit').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "exit"}));
    });


    $('.add-cards').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "addColumn"}));

    });


    $('.start-button').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "startGame"}));

    });


    $('.redo').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "redo"}));
    });

    $('.undo').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "undo"}));
    });


    $('.mode-switch').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "switchEasy"}));

    });

    $('.button-right').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "addPlayer"}));

    });

    $('.button-left').on('click', function (event) {
        event.preventDefault();
        websocket.send(JSON.stringify({action: "removePlayer"}));

    });


    $('.player-link').on('click', function (event) {
        event.preventDefault();
        const playerNumber = $(this).text().match(/\d+/)[0];
        websocket.send(JSON.stringify({
            action: "selectPlayer", playerNumber: playerNumber
        }));


    });


    function selectPlayer(player_number) {
        if (player_number == null) {
            return;
        }
        $('.player-link').removeClass('selected');
        $(`.player-link:contains('PLAYER ${player_number}')`).addClass('selected');
        toggleCheckboxes();
    }


    function toggleButtons() {
        const playerCountElement = document.getElementById("player-count");

        playerCountElement.textContent = playerCount;
        if (playerCount > 1) {
            $('#remove-player').removeClass('disabled');
        } else {
            $('#remove-player').addClass('disabled');
        }

        if (playerCount < 10) {
            $('#add-player').removeClass('disabled');
        } else {
            $('#add-player').addClass('disabled');
        }

        if (canUndo) {
            $('.undo').removeClass('disabled');
        } else {
            $('.undo').addClass('disabled');
        }

        if (canRedo) {
            $('.undo').removeClass('disabled');
        } else {
            $('.undo').addClass('disabled');
        }

        if (easy) {
            $('.mode-switch').text("ON")
        } else {
            $('.mode-switch').text("OFF")
        }
    }


    function isPlayerSelected() {
        return document.querySelector(".player-selection .selected") !== null;
    }

    function toggleCheckboxes() {
        cardCheckboxes.forEach(checkbox => {
            checkbox.disabled = !isPlayerSelected();
            if (!isPlayerSelected()) checkbox.checked = false;
        });
    }

    function handleCheckboxChange() {
        const selectedCards = Array.from(cardCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => parseInt(checkbox.id.replace("card-", ""), 10));

        if (selectedCards.length === 3) handleSelectCards(selectedCards);
    }

    function handleSelectCards(selectedIndices) {
        const coordinates = selectedIndices.map(index => {
            const col = String.fromCharCode(97 + Math.floor(index / numRows));
            const row = (index % numRows) + 1;
            return `${col}${row}`;
        });

        const coordinatesParam = coordinates.join("-");
        websocket.send(JSON.stringify({
            action: "selectCards", coordinates: coordinatesParam
        }));
        console.log(coordinatesParam);

    }

    function resetSelection() {
        playerLinks.forEach(link => link.classList.remove("selected"));
        cardCheckboxes().forEach(checkbox => (checkbox.checked = false));
        toggleCheckboxes();
        setTimeout(() => {
            window.location.href = window.location.origin;
        }, 100);
    }


    function renderCards() {
        const cardsContainer = document.querySelector(".cards");

        if (!cardsContainer) {
            console.error("Container '.cards' nicht gefunden!"); // Debugging
            return;
        }

        cardsContainer.innerHTML = ""; // Löscht den Inhalt des divs

        cards.forEach((card, idx) => {
            // Erstelle die Checkbox (input)
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `card-${idx}`;
            checkbox.classList.add("card-checkbox");
            checkbox.checked = card.selected;

            // Erstelle das Label
            const label = document.createElement("label");
            label.setAttribute("for", `card-${idx}`);
            label.classList.add("card");
            if (card.selected) {
                label.classList.add("selected");
            }

            // Füge den Namen der Karte ein (HTML)
            label.innerHTML = card.name;

            // Füge Checkbox und Label zum Container hinzu
            cardsContainer.appendChild(checkbox);
            cardsContainer.appendChild(label);


            cardCheckboxes.push(checkbox);

            // Event für Checkbox
            checkbox.addEventListener("change", handleCheckboxChange);
        });
    }


    function fetchCards() {
        cards = [];
        cardCheckboxes = [];
        $.ajax({
            url: '/cards', method: 'GET', dataType: 'json', success: function (data) {
                console.log("Empfangene Karten:", data.cards); // Debugging

                data.cards.forEach((c) => {
                    console.log("Karte wird hinzugefügt:", c); // Debugging
                    cards.push(new Card(c.number, c.color, c.symbol, c.selected, c.name));
                });

                renderCards(); // Karten rendern
                toggleCheckboxes();
            }, error: function (xhr, status, error) {
                console.error("Fehler beim Laden der Karten:", error);
            }
        });
    }

    function updateMessage(message) {
        const message_element = document.querySelector(".message");

        if (!message_element) {
            console.error("Label '.message' nicht gefunden!"); // Debugging
            return;
        }
        message_element.textContent = message

    }

});