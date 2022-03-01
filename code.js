// data
let players = 2;
let playerA = [];
let flopData = [];
let turnData = [];
let riverData = [];
let bestPossibleHand = false;

// query selectors
const deckDiv = document.querySelector("#deck");
const flopDiv = document.querySelector("#flop");
const turnDiv = document.querySelector("#turn");
const riverDiv = document.querySelector("#river");
const playerDiv = document.querySelector("#player");

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

function renderPlayerCards() {
  playerA.forEach((card) => {
    let div = document.createElement("div");
    div.textContent = card.card;
    let suit = card.name.split("").splice(1)[0];
    if (suit === "♥") div.className = "hearts";
    if (suit === "♦") div.className = "diamonds";
    if (suit === "♠") div.className = "spades";
    if (suit === "♣") div.className = "clubs";
    playerDiv.append(div);
  });
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

// run program
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
