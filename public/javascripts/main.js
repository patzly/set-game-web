document.addEventListener("DOMContentLoaded", () => {
    const cardCheckboxes = () => document.querySelectorAll(".card-checkbox");
    const playerLinks = document.querySelectorAll(".player-selection a");
    const numRows = 3;

    let canUndo = false;
    let canRedo = true;

    let easy = false;

    let playerCount = 0;

    cardCheckboxes().forEach(checkbox => checkbox.addEventListener("change", handleCheckboxChange));
    toggleCheckboxes();



    $('.exit').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/exit',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Spiel beendett", data);
                location.reload();

            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Beenden des Spiels:", error);
            }
        });
    });


    $('.add-cards').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/addColumn',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Karten hinzugefügt", data);
                location.reload();

            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Hinzufügen der Karten:", error);
            }
        });
    });


    $('.start-button').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/startGame',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Spiel gestartet", data);
                location.reload();

            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Starten des Spiels:", error);
            }
        });
    });



    $('.redo').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/redo',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Redo gemacht", data);
                canRedo = data.canRedo;
                location.reload();

            },
            error: function (xhr, status, error) {
                console.error("Redo gescheitert:", error);
            }
        });
    });

    $('.undo').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/undo',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Undo gemacht", data);
                canUndo = data.canUndo;
                location.reload();

            },
            error: function (xhr, status, error) {
                console.error("Undo gescheitert:", error);
            }
        });
    });


    $('.mode-switch').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/switchEasy',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Modus gewechselt", data);
                easy = data.easy;
                toggleButtons();

            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Modi-Wechsel:", error);
            }
        });
    });

    $('.button-right').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/addPlayer',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Spieler wurde hinzugefügt:", data);
                $('#player-count').text(data.spielerzahl);
                playerCount = data.spielerzahl;
                toggleButtons();

            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Hinzufügen des Spielers:", error);
            }
        });
    });

    $('.button-left').on('click', function (event) {
        event.preventDefault();

        $.ajax({
            url: '/removePlayer',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Spieler wurde entfernt:", data);
                $('#player-count').text(data.spielerzahl);
                playerCount = data.spielerzahl;
                toggleButtons();
            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Entfernen des Spielers:", error);
            }
        });
    });


    $('.player-link').on('click', function (event) {
        event.preventDefault();
        const playerNumber = $(this).text().match(/\d+/)[0];
        $.ajax({
            url: `/selectPlayer/${playerNumber}`,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Spieler wurde erfolgreich ausgewählt:", data);

                $('.player-link').removeClass('selected');
                $(`.player-link:contains('PLAYER ${playerNumber}')`).addClass('selected');
                toggleCheckboxes();
            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Auswählen des Spielers:", error);
            }
        });
    });


    function toggleButtons() {
        // Überprüfe, ob mehr als 1 Spieler existiert
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
        cardCheckboxes().forEach(checkbox => {
            checkbox.disabled = !isPlayerSelected();
            if (!isPlayerSelected()) checkbox.checked = false;
        });
    }

    function handleCheckboxChange() {
        const selectedCards = Array.from(cardCheckboxes())
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
        $.ajax({
            url: `/selectCards/${coordinatesParam}`,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("Karten wurden erfolgreich ausgewählt:", data);

            },
            error: function (xhr, status, error) {
                console.error("Fehler beim Auswählen der Karten:", error);
            }
        });
        resetSelection();
    }

    function resetSelection() {
        playerLinks.forEach(link => link.classList.remove("selected"));
        cardCheckboxes().forEach(checkbox => (checkbox.checked = false));
        toggleCheckboxes();
        setTimeout(() => {
            window.location.href = window.location.origin;
        }, 100);
    }

});