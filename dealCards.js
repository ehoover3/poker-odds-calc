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
  playerA = [cardA, cardB];
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

function renderDeck() {
  deckDiv.innerHTML = "";
  deckData.forEach((card) => {
    let div = document.createElement("div");
    div.textContent = card.card;
    let suit = card.name.split("").splice(1)[0];
    if (suit === "♥") div.className = "hearts";
    if (suit === "♦") div.className = "diamonds";
    if (suit === "♠") div.className = "spades";
    if (suit === "♣") div.className = "clubs";
    deckDiv.append(div);
  });
}

function renderPlayerCards(player) {
  let playerDiv = document.createElement("div");
  playerDiv.textContent = player;
  playerDiv.className = "player";

  playerA.forEach((card) => {
    let cardDiv = document.createElement("div");
    cardDiv.textContent = card.card;
    cardDiv.className = "player";
    let suit = card.name.split("").splice(1)[0];
    if (suit === "♥") cardDiv.classList.add("hearts");
    if (suit === "♦") cardDiv.classList.add("diamonds");
    if (suit === "♠") cardDiv.classList.add("spades");
    if (suit === "♣") cardDiv.classList.add("clubs");
    playerDiv.append(cardDiv);
  });
  playersDiv.append(playerDiv);
}

function renderFlop() {
  flopData.forEach((card) => {
    let div = document.createElement("div");
    div.textContent = card.card;
    let suit = card.name.split("").splice(1)[0];
    if (suit === "♥") div.className = "hearts";
    if (suit === "♦") div.className = "diamonds";
    if (suit === "♠") div.className = "spades";
    if (suit === "♣") div.className = "clubs";
    flopDiv.append(div);
  });
}

function renderTurn() {
  turnData.forEach((card) => {
    let div = document.createElement("div");
    div.textContent = card.card;
    let suit = card.name.split("").splice(1)[0];
    if (suit === "♥") div.className = "hearts";
    if (suit === "♦") div.className = "diamonds";
    if (suit === "♠") div.className = "spades";
    if (suit === "♣") div.className = "clubs";
    turnDiv.append(div);
  });
}

function renderRiver() {
  riverData.forEach((card) => {
    let div = document.createElement("div");
    div.textContent = card.card;
    let suit = card.name.split("").splice(1)[0];
    if (suit === "♥") div.className = "hearts";
    if (suit === "♦") div.className = "diamonds";
    if (suit === "♠") div.className = "spades";
    if (suit === "♣") div.className = "clubs";
    riverDiv.append(div);
  });
}
