let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

function newGame() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4')
        .then(response => response.json())
        .then(data => {
            playerHand = [data.cards[0], data.cards[1]];
            dealerHand = [data.cards[2], data.cards[3]];
            renderHands();
        });
}

function renderHands() {
    document.getElementById('player-cards').innerHTML = '';
    document.getElementById('dealer-cards').innerHTML = '';

    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand.slice(0, 1)); // Show only one card of dealer

    playerHand.forEach(card => {
        document.getElementById('player-cards').innerHTML += `<img src="${card.image}" alt="${card.value} of ${card.suit}" class="card">`;
    });

    dealerHand.forEach(card => {
        document.getElementById('dealer-cards').innerHTML += `<img src="${card.image}" alt="${card.value} of ${card.suit}" class="card">`;
    });

    document.getElementById('player-score').innerText = `Puntuación: ${playerScore}`;
    document.getElementById('dealer-score').innerText = `Puntuación: ${dealerScore}`;
}

function calculateScore(hand) {
    let score = 0;
    let numAces = 0;

    hand.forEach(card => {
        if (card.value === 'ACE') {
            numAces++;
            score += 11;
        } else if (['JACK', 'QUEEN', 'KING'].includes(card.value)) {
            score += 10;
        } else {
            score += parseInt(card.value);
        }
    });

    while (score > 21 && numAces > 0) {
        score -= 10;
        numAces--;
    }

    return score;
}

function hit() {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
            playerHand.push(data.cards[0]);
            renderHands();
            if (playerScore > 21) {
                endGame("¡Te pasaste! Perdiste.");
            }
        });
}

function stand() {
    while (dealerScore < 17) {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
            .then(response => response.json())
            .then(data => {
                dealerHand.push(data.cards[0]);
                dealerScore = calculateScore(dealerHand);
                renderHands();
            });
    }

    if (dealerScore > 21 || dealerScore < playerScore) {
        endGame("¡Ganaste!");
    } else if (dealerScore > playerScore) {
        endGame("¡Perdiste!");
    } else {
        endGame("¡Empate!");
    }
}

function endGame(result) {
    document.getElementById('game-result').innerText = result;
    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;
}

newGame();
