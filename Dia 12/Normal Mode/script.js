document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('game-board');
    const restartBtn = document.getElementById('restart-btn');
    let flippedCards = [];
    let matchedCards = 0;
  
    // Function to fetch random cards from Deck of Cards API
    async function fetchCards() {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=8');
      const data = await response.json();
      return data.cards;
    }
  
    // Function to duplicate and shuffle cards
    function duplicateAndShuffle(cards) {
      const duplicatedCards = [...cards, ...cards];
      return duplicatedCards.sort(() => Math.random() - 0.5);
    }
  
    // Function to create card elements
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
  
    // Function to handle card click
    function handleCardClick() {
      if (flippedCards.length < 2 && !this.classList.contains('flip')) {
        this.classList.add('flip');
        flippedCards.push(this);
  
        if (flippedCards.length === 2) {
          setTimeout(checkForMatch, 1000);
        }
      }
    }
  
    // Function to check for card match
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
  
    // Function to restart the game
    function restartGame() {
      matchedCards = 0;
      flippedCards = [];
      gameBoard.innerHTML = '';
      startGame();
    }
  
    // Function to start the game
    async function startGame() {
      const cardsData = await fetchCards();
      const shuffledCards = duplicateAndShuffle(cardsData);
      shuffledCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardElement.addEventListener('click', handleCardClick);
        gameBoard.appendChild(cardElement);
      });
    }
  
    // Event listener for restart button
    restartBtn.addEventListener('click', restartGame);
  
    // Start the game
    startGame();
  });
  

  // LImbo
