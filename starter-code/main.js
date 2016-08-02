var board = document.getElementById('game-board');

var numCards = 4;

var cards = ['queen', 'queen', 'king', 'king'];
var suits = ['clubs', 'diamonds', 'clubs', 'diamonds'];
var cardsInPlay = [];



function createBoard() {
	for (var i = 0; i < numCards; i++) {
		var cardBox = document.createElement('div');
		cardBox.className = 'cardbox';
		
		var card = document.createElement('div');
		card.className = 'card';
		card.setAttribute('data-card', cards[i]);
		card.setAttribute('suit', suits[i]);
		cardBox.appendChild(card);
		board.appendChild(cardBox);
		card.addEventListener('click', isTwoCards);
	}
}

function isTwoCards() {
	var cardType = this.getAttribute('data-card');
	var cardSuit = this.getAttribute('suit');
	this.className += ' flipped';
	this.innerHTML = '<img src="img/' + cardType + '_' + cardSuit + '.png" alt="' + cardType + ' of ' + cardSuit + '" />';
	cardsInPlay.push(cardType);
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	var allCards = document.getElementsByClassName('card');
	for (var i = 0; i < allCards.length; i++ ) {
		allCards[i].innerHTML = '';
	}
}

createBoard();



