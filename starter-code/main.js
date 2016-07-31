var board = document.getElementById('game-board');

var numCards = 4;

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];



function createBoard() {
	for (var i = 0; i < numCards; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('data-card', cards[i]);
		board.appendChild(card);
		card.addEventListener('click', isTwoCards);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		return true;
	} else {
		alert("Sorry, try again.");
		return false;
	}
}

createBoard();



