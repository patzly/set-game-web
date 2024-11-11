document.addEventListener("DOMContentLoaded", () => {
    const cardCheckboxes = () => document.querySelectorAll(".card-checkbox");
    const playerLinks = document.querySelectorAll(".player-selection a");
    const numRows = 3;

    cardCheckboxes().forEach(checkbox => checkbox.addEventListener("change", handleCheckboxChange));
    toggleCheckboxes();

    playerLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            link.classList.toggle("selected");

            toggleCheckboxes();

            const playerNumber = link.textContent.match(/\d+/)[0];
            window.location.href = `/selectPlayer/${playerNumber}`;
        });
    });

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
        fetch(`/selectCards/${coordinatesParam}`, { method: "GET" })
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(data => console.log("Action processed successfully:", data))
            .catch(error => console.error("Fetch error:", error));

        resetSelection();
    }

    function resetSelection() {
        playerLinks.forEach(link => link.classList.remove("selected"));
        cardCheckboxes().forEach(checkbox => (checkbox.checked = false));
        toggleCheckboxes();
        setTimeout(() => {
            window.location.href = window.location.origin;
        }, 100);  // Verzögerung von 100ms


    }



});
