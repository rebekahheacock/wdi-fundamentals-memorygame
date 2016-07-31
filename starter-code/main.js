/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

if (cardOne === cardTwo) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}

if (cardThree === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
*/

var board = document.getElementById('game-board');

var numCards = 4;



function createBoard() {
	for (var i = 0; i < numCards; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		board.appendChild(card);
	}
}

createBoard();

