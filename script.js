
function showGame(gameName) {
    alert("Welcome to " + gameName +
    "!\n\nGet ready for your gaming adventure!");
}

function searchGames() {
    const searchInput = document
        .getElementById("gameSearch")
        .value.toLowerCase();

    const cards = document.querySelectorAll(".game-card");

    let found = 0;

    cards.forEach(function(card) {
        const gameName = card
            .querySelector("h3")
            .textContent.toLowerCase();

        if (gameName.includes(searchInput)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("noResults").style.display =
        found === 0 ? "block" : "none";
}

console.log("GameZone loaded successfully!");
