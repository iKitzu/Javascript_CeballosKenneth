document.addEventListener('DOMContentLoaded', function() {
    const baseURL = 'https://deckofcardsapi.com/api/deck';
    let deckId;
    let playerHand = [];
    let dealerHand = [];

    const playerHandElement = document.getElementById('player-hand');
    const dealerHandElement = document.getElementById('dealer-hand');
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');
    const resetButton = document.getElementById('reset-button');

    // Función para inicializar el juego
    function initGame() {
        fetch(`${baseURL}/new/shuffle/?deck_count=1`)
            .then(response => response.json())
            .then(data => {
                deckId = data.deck_id;
                startGame();
            })
            .catch(error => console.error('Error al inicializar el juego:', error));
    }

    // Función para comenzar el juego
    function startGame() {
        playerHand = [];
        dealerHand = [];
        playerHandElement.innerHTML = '';
        dealerHandElement.innerHTML = '';

        drawCard(playerHand);
        drawCard(dealerHand);
        drawCard(playerHand);

        updateHands();
    }

    // Función para dibujar una carta
    function drawCard(hand) {
        fetch(`${baseURL}/${deckId}/draw/?count=1`)
            .then(response => response.json())
            .then(data => {
                const card = data.cards[0];
                hand.push(card);
                updateHands();
            })
            .catch(error => console.error('Error al dibujar carta:', error));
    }

    // Función para actualizar las manos de jugador y crupier
    function updateHands() {
        playerHandElement.innerHTML = '';
        dealerHandElement.innerHTML = '';

        playerHand.forEach(card => addCardToHand(card, playerHandElement));
        dealerHand.forEach(card => addCardToHand(card, dealerHandElement, dealerHand.length === 1));
    }

    // Función para agregar una carta a la mano
    function addCardToHand(card, handElement, isHidden = false) {
        const img = document.createElement('img');
        img.src = isHidden ? 'https://deckofcardsapi.com/static/img/unknown.png' : card.image;
        img.alt = `${card.value} of ${card.suit}`;
        handElement.appendChild(img);
    }

    // Event listener para el botón "Hit"
    hitButton.addEventListener('click', function() {
        drawCard(playerHand);
    });

    // Event listener para el botón "Stand"
    standButton.addEventListener('click', function() {
        // Aquí puedes implementar la lógica del crupier
    });

    // Event listener para el botón "Reset"
    resetButton.addEventListener('click', function() {
        initGame();
    });

    // Inicializar el juego al cargar la página
    initGame();
});
