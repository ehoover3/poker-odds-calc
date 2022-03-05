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
let player1_r = getBestHand(player1);
let player2_r = getBestHand(player2);
console.log(player1_r);
console.log(player2_r);
if (player1_r.str < player2_r.str) console.log("player 1 wins");
else if (player2_r.str < player1_r.str) console.log("player 2 wins");
else console.log("players tie");
