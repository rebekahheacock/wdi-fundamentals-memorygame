var board = document.getElementById('game-board');

var numCards = 4;

var cards = ['queen', 'queen', 'king', 'king'];
var suits = ['clubs', 'diamonds', 'diamonds', 'clubs'];
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
	if (this.className !== 'card flipped') {
		this.className += ' flipped';
		this.innerHTML = '<img src="img/' + cardType + '_' + cardSuit + '.png" alt="' + cardType + ' of ' + cardSuit + '" />';
		cardsInPlay.push(cardType);
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
	}
}

/*
	Using a timeout because the image wasn't showing up before the alert.
	This way, the user can see both card images before acknowledging the alert.
*/
function isMatch(cardsInPlay) {
	setTimeout(function () {
        if (cardsInPlay[0] === cardsInPlay[1]) {
        	alert("Congrats! You found a match!");
        } 
        else {
        	alert("Sorry, try again.");
            var flippedCards = document.querySelectorAll('.flipped');
    		for (var i = 0; i < flippedCards.length; i++ ) {
    			flippedCards[i].innerHTML = '';
    			flippedCards[i].className = 'card';
    		}
        }
    }, 300);
	
	
}

createBoard();



