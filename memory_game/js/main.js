console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){
	console.log("user flipped" + " " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
 if (cards.length === 2) {
 	console.log("one more match.");
 }
 else if (cardsInPlay[0] === cardsInPlay[1]){
 	alert("You found a match!");
 }
else{
	alert("Sorry try again.");
}
}

flipCard(0);
flipCard(1);
