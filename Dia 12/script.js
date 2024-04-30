function loadCard () {
    fetch ('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then (response => response.json())
    .then (data => {
        const data = data.cards[0];
        document.getElementById('card').innerHTML = `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
    })
}