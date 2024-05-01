const cardValues = ['ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING'];
let cards = [];
let flippedCards = [];
let matchedCards = [];
let gameBoard = document.getElementById('game-board');
let resultText = document.getElementById('result');

function startGame() {
    clearBoard();
    createCards();
    shuffleCards();
    renderBoard();
}

function clearBoard() {
    cards = [];
    flippedCards = [];
    matchedCards = [];
    resultText.textContent = '';
}

function createCards() {
    for (let value of cardValues) {
        for (let i = 0; i < 2; i++) {
            cards.push({ value: value, flipped: false, matched: false });
        }
    }
}

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function renderBoard() {
    gameBoard.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        if (card.flipped || card.matched) {
            cardElement.textContent = card.value;
        } else {
            cardElement.addEventListener('click', () => flipCard(index));
        }
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(index) {
    if (flippedCards.length < 2 && !cards[index].flipped) {
        cards[index].flipped = true;
        flippedCards.push(index);
        renderBoard();

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const index1 = flippedCards[0];
    const index2 = flippedCards[1];
    if (cards[index1].value === cards[index2].value) {
        cards[index1].matched = true;
        cards[index2].matched = true;
        matchedCards.push(index1, index2);
        if (matchedCards.length === cards.length) {
            resultText.textContent = '¡Felicidades! ¡Has ganado!';
        }
    } else {
        cards[index1].flipped = false;
        cards[index2].flipped = false;
    }
    flippedCards = [];
    renderBoard();
}
