document.getElementById("volver-btn").onclick = function() {
  window.location.href = "http://127.0.0.1:5500/Dia%2012/index.html";
};

document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('game-board');
    const restartBtn = document.getElementById('restart-btn');
    const linterna = document.querySelector('.linterna');
    const sizeDegradado = 150;    

    let flippedCards = [];
    let matchedCards = 0;

    async function fetchCards(numberOfCards) {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${numberOfCards / 2}`);
      const data = await response.json();
      return data.cards;
    }

    function duplicateAndShuffle(cards) {
      const duplicatedCards = [...cards, ...cards];
      return duplicatedCards.sort(() => Math.random() - 0.5);
    }

    function createCardElement(card) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.id = card.code;

      const imgFront = document.createElement('img');
      imgFront.classList.add('front-face');
      imgFront.src = card.image;
      imgFront.alt = `${card.value} of ${card.suit}`;

      const imgBack = document.createElement('img');
      imgBack.classList.add('back-face');
      imgBack.src = 'https://deckofcardsapi.com/static/img/back.png';
      imgBack.alt = 'Card Back';

      cardElement.appendChild(imgFront);
      cardElement.appendChild(imgBack);

      return cardElement;
    }

    function handleCardClick() {
      if (flippedCards.length < 2 && !this.classList.contains('flip')) {
        this.classList.add('flip');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
          setTimeout(checkForMatch, 1000);
        }
      }
    }

    function checkForMatch() {
      const [firstCard, secondCard] = flippedCards;
      const firstImage = firstCard.querySelector('.front-face').src;
      const secondImage = secondCard.querySelector('.front-face').src;

      if (firstImage === secondImage) {
        matchedCards += 2;
        if (matchedCards === 16) {
          alert('¡Felicidades! ¡Has completado el juego!');
        }
      } else {
        flippedCards.forEach(card => card.classList.remove('flip'));
      }
      flippedCards = [];
    }

    function restartGame(numCards) {
      matchedCards = 0;
      flippedCards = [];
      gameBoard.innerHTML = '';
      startGame(numCards);
    }

    async function startGame(numCards) {
      const cardsData = await fetchCards(numCards);
      const shuffledCards = duplicateAndShuffle(cardsData);
      shuffledCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardElement.addEventListener('click', handleCardClick);
        gameBoard.appendChild(cardElement);
      });
    }

    restartBtn.addEventListener('click', function() {
      const numCards = document.getElementById('num-cards').value;
      if (numCards % 2 !== 0) {
        alert('Por favor, ingrese un número par de cartas.');
        return;
      }
      restartGame(numCards);
    });

    startGame(16); // Iniciar el juego con -8- 16  cartas por defecto

    // Agregar efecto de linterna que sigue el movimiento del ratón
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      linterna.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, black ${sizeDegradado}px)`;
    });
});
