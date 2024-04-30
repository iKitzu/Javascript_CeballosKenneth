const apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=10';

async function createMemoryGame() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  const cards = data.cards.concat(data.cards); // Duplicating the cards to make pairs
  const shuffledCards = shuffle(cards);

  const cardsContainer = document.getElementById('cards-container');

  shuffledCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.value = card.code;
    cardElement.textContent = card.code;
    cardElement.addEventListener('click', handleCardClick);
    cardsContainer.appendChild(cardElement);
  });
}

function handleCardClick() {
  this.style.backgroundColor = 'transparent';
  this.removeEventListener('click', handleCardClick);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

createMemoryGame();
