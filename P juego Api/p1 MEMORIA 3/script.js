const apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=8';
let cards = [];
let flippedCards = [];
let matchedCards = [];

// Fetch cards from API
async function fetchCards() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        cards = data.cards.concat(data.cards); // Duplicate the cards for matching pairs
        shuffle(cards);
        displayCards();
    } catch (error) {
        console.error('Error fetching cards:', error);
    }
}

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Display cards on the game board
function displayCards() {
    const gameContainer = document.getElementById('game-container');
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-id', card.code);
        cardElement.addEventListener('click', flipCard);
        const imgElement = document.createElement('img');
        imgElement.src = card.image;
        cardElement.appendChild(imgElement);
        gameContainer.appendChild(cardElement);
    });
}

// Flip card when clicked
function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.firstChild.style.display = 'block';
        flippedCards.push(this);
    }
    if (flippedCards.length === 2) {
        setTimeout(checkForMatch, 1000);
    }
}

// Check if flipped cards are a match
function checkForMatch() {
    const [card1, card2] = flippedCards;
    const code1 = card1.getAttribute('data-id');
    const code2 = card2.getAttribute('data-id');
    if (code1 === code2) {
        matchedCards.push(card1, card2);
        flippedCards = [];
        if (matchedCards.length === cards.length) {
            setTimeout(() => alert('Congratulations! You won!'), 500);
        }
    } else {
        setTimeout(() => {
            card1.firstChild.style.display = 'none';
            card2.firstChild.style.display = 'none';
            flippedCards = [];
        }, 500);
    }
}

// Start the game
fetchCards();
