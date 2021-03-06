let deckData = [
  // hearts
  { name: "Aâ¥", card: "ğ±", value: 14, suit: "â¥" },
  { name: "Kâ¥", card: "ğ¾", value: 13, suit: "â¥" },
  { name: "Qâ¥", card: "ğ½", value: 12, suit: "â¥" },
  { name: "Jâ¥", card: "ğ»", value: 11, suit: "â¥" },
  { name: "Tâ¥", card: "ğº", value: 10, suit: "â¥" },
  { name: "9â¥", card: "ğ¹", value: 9, suit: "â¥" },
  { name: "8â¥", card: "ğ¸", value: 8, suit: "â¥" },
  { name: "7â¥", card: "ğ·", value: 7, suit: "â¥" },
  { name: "6â¥", card: "ğ¶", value: 6, suit: "â¥" },
  { name: "5â¥", card: "ğµ", value: 5, suit: "â¥" },
  { name: "4â¥", card: "ğ´", value: 4, suit: "â¥" },
  { name: "3â¥", card: "ğ³", value: 3, suit: "â¥" },
  { name: "2â¥", card: "ğ²", value: 2, suit: "â¥" },
  // diamonds
  { name: "Aâ¦", card: "ğ", value: 14, suit: "â¦" },
  { name: "Kâ¦", card: "ğ", value: 13, suit: "â¦" },
  { name: "Qâ¦", card: "ğ", value: 12, suit: "â¦" },
  { name: "Jâ¦", card: "ğ", value: 11, suit: "â¦" },
  { name: "Tâ¦", card: "ğ", value: 10, suit: "â¦" },
  { name: "9â¦", card: "ğ", value: 9, suit: "â¦" },
  { name: "8â¦", card: "ğ", value: 8, suit: "â¦" },
  { name: "7â¦", card: "ğ", value: 7, suit: "â¦" },
  { name: "6â¦", card: "ğ", value: 6, suit: "â¦" },
  { name: "5â¦", card: "ğ", value: 5, suit: "â¦" },
  { name: "4â¦", card: "ğ", value: 4, suit: "â¦" },
  { name: "3â¦", card: "ğ", value: 3, suit: "â¦" },
  { name: "2â¦", card: "ğ", value: 2, suit: "â¦" },
  // spades
  { name: "Aâ ", card: "ğ¡", value: 14, suit: "â " },
  { name: "Kâ ", card: "ğ®", value: 13, suit: "â " },
  { name: "Qâ ", card: "ğ­", value: 12, suit: "â " },
  { name: "Jâ ", card: "ğ«", value: 11, suit: "â " },
  { name: "Tâ ", card: "ğª", value: 10, suit: "â " },
  { name: "9â ", card: "ğ©", value: 9, suit: "â " },
  { name: "8â ", card: "ğ¨", value: 8, suit: "â " },
  { name: "7â ", card: "ğ§", value: 7, suit: "â " },
  { name: "6â ", card: "ğ¦", value: 6, suit: "â " },
  { name: "5â ", card: "ğ¥", value: 5, suit: "â " },
  { name: "4â ", card: "ğ¤", value: 4, suit: "â " },
  { name: "3â ", card: "ğ£", value: 3, suit: "â " },
  { name: "2â ", card: "ğ¢", value: 2, suit: "â " },
  // clubs
  { name: "Aâ£", card: "ğ", value: 14, suit: "â£" },
  { name: "Kâ£", card: "ğ", value: 13, suit: "â£" },
  { name: "Qâ£", card: "ğ", value: 12, suit: "â£" },
  { name: "Jâ£", card: "ğ", value: 11, suit: "â£" },
  { name: "Tâ£", card: "ğ", value: 10, suit: "â£" },
  { name: "9â£", card: "ğ", value: 9, suit: "â£" },
  { name: "8â£", card: "ğ", value: 8, suit: "â£" },
  { name: "7â£", card: "ğ", value: 7, suit: "â£" },
  { name: "6â£", card: "ğ", value: 6, suit: "â£" },
  { name: "5â£", card: "ğ", value: 5, suit: "â£" },
  { name: "4â£", card: "ğ", value: 4, suit: "â£" },
  { name: "3â£", card: "ğ", value: 3, suit: "â£" },
  { name: "2â£", card: "ğ", value: 2, suit: "â£" },
];

// helper functions
function shuffleDeck() {
  deckData.forEach(() => {
    let randomCard = Math.floor(Math.random() * (deckData.length - 1));
    let card = deckData[deckData.length - 1];
    deckData[deckData.length - 1] = deckData[randomCard];
    deckData[randomCard] = card;
  });
}

function dealPlayerCards() {
  let cardA = deckData.pop();
  let cardB = deckData.pop();
  return [cardA, cardB];
}

function dealFlop() {
  let cardA = deckData.pop();
  let cardB = deckData.pop();
  let cardC = deckData.pop();
  flopData = [cardA, cardB, cardC];
}

function dealTurn() {
  let cardA = deckData.pop();
  turnData = [cardA];
}

function dealRiver() {
  let cardA = deckData.pop();
  riverData = [cardA];
}
