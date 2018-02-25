

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		tries++;
		document.getElementById("tries").textContent = tries;
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			matches++;
			document.getElementById("matches").textContent = matches;
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
};

var flipCard = function() {
	if (cardsInPlay.length ===2 ) {
		return;
	}
	var cardId = this.getAttribute("data-id");
	if (cards[cardId] === cardsInPlay[0]) {
		return;
	}
	console.log("User flipped " + cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId]);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatchWait();
};

  var createBoard = function() {
  	for (var i = 0; i < cards.length; i++) {
  		var cardElement = document.createElement("img");
  		cardElement.setAttribute("src", "images/back.png");
  		cardElement.setAttribute("data-id", i);
  		cardElement.addEventListener("click", flipCard);
  		document.getElementById("game-board").appendChild(cardElement);
  	}
  };

  var resetBoard = function(){
	cardsInPlay = [];
	var cardImgs = document.querySelectorAll("img");
	for (var i = 0; i < cardImgs.length; i++) {
		cardImgs[i].setAttribute("src", "images/back.png");
	}
};

document.querySelector("button").addEventListener("click", resetBoard);

createBoard();
