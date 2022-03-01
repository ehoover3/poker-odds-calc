// run program
shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();
renderDeck();

// deal player cards
dealPlayerCards();
renderPlayerCards();
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
getHighCard();
getPair();
getTwoPair();
getThreeOfAKind();
getStraight();
getFlush();
getFullHouse();
getFourOfAKind();
getStraightorRoyalFlush();
