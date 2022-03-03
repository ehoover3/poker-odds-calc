let deckData = [
  // hearts
  { name: "A♥", card: "🂱", value: 14, suit: "♥" },
  { name: "K♥", card: "🂾", value: 13, suit: "♥" },
  { name: "Q♥", card: "🂽", value: 12, suit: "♥" },
  { name: "J♥", card: "🂻", value: 11, suit: "♥" },
  { name: "T♥", card: "🂺", value: 10, suit: "♥" },
  { name: "9♥", card: "🂹", value: 9, suit: "♥" },
  { name: "8♥", card: "🂸", value: 8, suit: "♥" },
  { name: "7♥", card: "🂷", value: 7, suit: "♥" },
  { name: "6♥", card: "🂶", value: 6, suit: "♥" },
  { name: "5♥", card: "🂵", value: 5, suit: "♥" },
  { name: "4♥", card: "🂴", value: 4, suit: "♥" },
  { name: "3♥", card: "🂳", value: 3, suit: "♥" },
  { name: "2♥", card: "🂲", value: 2, suit: "♥" },
  // diamonds
  { name: "A♦", card: "🃁", value: 14, suit: "♦" },
  { name: "K♦", card: "🃎", value: 13, suit: "♦" },
  { name: "Q♦", card: "🃍", value: 12, suit: "♦" },
  { name: "J♦", card: "🃋", value: 11, suit: "♦" },
  { name: "T♦", card: "🃊", value: 10, suit: "♦" },
  { name: "9♦", card: "🃉", value: 9, suit: "♦" },
  { name: "8♦", card: "🃈", value: 8, suit: "♦" },
  { name: "7♦", card: "🃇", value: 7, suit: "♦" },
  { name: "6♦", card: "🃆", value: 6, suit: "♦" },
  { name: "5♦", card: "🃅", value: 5, suit: "♦" },
  { name: "4♦", card: "🃄", value: 4, suit: "♦" },
  { name: "3♦", card: "🃃", value: 3, suit: "♦" },
  { name: "2♦", card: "🃂", value: 2, suit: "♦" },
  // spades
  { name: "A♠", card: "🂡", value: 14, suit: "♠" },
  { name: "K♠", card: "🂮", value: 13, suit: "♠" },
  { name: "Q♠", card: "🂭", value: 12, suit: "♠" },
  { name: "J♠", card: "🂫", value: 11, suit: "♠" },
  { name: "T♠", card: "🂪", value: 10, suit: "♠" },
  { name: "9♠", card: "🂩", value: 9, suit: "♠" },
  { name: "8♠", card: "🂨", value: 8, suit: "♠" },
  { name: "7♠", card: "🂧", value: 7, suit: "♠" },
  { name: "6♠", card: "🂦", value: 6, suit: "♠" },
  { name: "5♠", card: "🂥", value: 5, suit: "♠" },
  { name: "4♠", card: "🂤", value: 4, suit: "♠" },
  { name: "3♠", card: "🂣", value: 3, suit: "♠" },
  { name: "2♠", card: "🂢", value: 2, suit: "♠" },
  // clubs
  { name: "A♣", card: "🃑", value: 14, suit: "♣" },
  { name: "K♣", card: "🃞", value: 13, suit: "♣" },
  { name: "Q♣", card: "🃝", value: 12, suit: "♣" },
  { name: "J♣", card: "🃛", value: 11, suit: "♣" },
  { name: "T♣", card: "🃚", value: 10, suit: "♣" },
  { name: "9♣", card: "🃙", value: 9, suit: "♣" },
  { name: "8♣", card: "🃘", value: 8, suit: "♣" },
  { name: "7♣", card: "🃗", value: 7, suit: "♣" },
  { name: "6♣", card: "🃖", value: 6, suit: "♣" },
  { name: "5♣", card: "🃕", value: 5, suit: "♣" },
  { name: "4♣", card: "🃔", value: 4, suit: "♣" },
  { name: "3♣", card: "🃓", value: 3, suit: "♣" },
  { name: "2♣", card: "🃒", value: 2, suit: "♣" },
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
