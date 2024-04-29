let currentCard;
let nextCard;

function newGame() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then(response => response.json())
        .then(data => {
            currentCard = data.cards[0];
            document.getElementById('card-container').innerHTML = `<img src="${currentCard.image}" alt="${currentCard.value} of ${currentCard.suit}">`;
        });
}

function guess(choice) {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then(response => response.json())
        .then(data => {
            nextCard = data.cards[0];
            document.getElementById('card-container').innerHTML += `<img src="${nextCard.image}" alt="${nextCard.value} of ${nextCard.suit}">`;
            let resultMessage = '';
            if ((choice === 'higher' && nextCard.value > currentCard.value) || (choice === 'lower' && nextCard.value < currentCard.value)) {
                resultMessage = '¡Correcto!';
            } else {
                resultMessage = '¡Incorrecto!';
            }
            resultMessage += ` La siguiente carta es un(a) ${nextCard.value} de ${nextCard.suit}.`;
            document.getElementById('result').innerText = resultMessage;
            currentCard = nextCard;
        });
}

newGame();
