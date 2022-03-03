// choose number of players
players = 2;

// run program
for (let i = 0; i < 15; i++) {
  shuffleDeck();
}
renderDeck();

// deal player cards
player1 = dealPlayerCards();
renderPlayerCards("Player 1", player1);

player2 = dealPlayerCards();
renderPlayerCards("Player 2", player2);

renderDeck();

// deal flop
dealFlop();
renderFlop();
renderDeck();

// deal turn
dealTurn();
renderTurn();
renderDeck();

// deal river
dealRiver();
renderRiver();
renderDeck();

// check win
let player1_hand = getBestHand(player1);
let player2_hand = getBestHand(player2);
console.log(player1_hand);
console.log(player2_hand);
if (player1_hand.rank > player2_hand.rank) console.log("player 1 wins");
if (player2_hand.rank > player1_hand.rank) console.log("player 2 wins");
if (player2_hand.rank === player1_hand.rank) {
  // first card
  if (player1_hand.hand[0] > player2_hand.hand[0]) console.log("player 1 wins");
  else if (player1_hand.hand[0] < player2_hand.hand[0]) console.log("player 2 wins");
  // second card
  else if (player1_hand.hand[1] > player2_hand.hand[1]) console.log("players 1 wins");
  else if (player1_hand.hand[1] < player2_hand.hand[1]) console.log("players 2 wins");
  // third card
  else if (player1_hand.hand[1] > player2_hand.hand[1]) console.log("players 1 wins");
  else if (player1_hand.hand[1] < player2_hand.hand[1]) console.log("players 2 wins");
  // fourth card
  else if (player1_hand.hand[1] > player2_hand.hand[1]) console.log("players 1 wins");
  else if (player1_hand.hand[1] < player2_hand.hand[1]) console.log("players 2 wins");
  // fifth card
  else if (player1_hand.hand[1] > player2_hand.hand[1]) console.log("players 1 wins");
  else if (player1_hand.hand[1] < player2_hand.hand[1]) console.log("players 2 wins");
  else console.log("players tie");
}
