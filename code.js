// choose number of players
players = 2;

// run program
for (let i = 0; i < 15; i++) {
  shuffleDeck();
}
renderDeck();

// deal player cards
dealPlayerCards("Player A");
renderPlayerCards("Player A");

dealPlayerCards("Player B");
renderPlayerCards("Player B");

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
getStraightorRoyalFlush();
getFourOfAKind();
getFullHouse();
getFlush();
getStraight();
getThreeOfAKind();
getTwoPair();
getPair();
getHighCard();
