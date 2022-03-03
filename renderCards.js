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

function renderPlayerCards(player, playerData) {
  let playerDiv = document.createElement("div");
  playerDiv.className = "player";

  let cardsDiv = document.createElement("div");
  cardsDiv.classList = "playerCards";
  playerData.forEach((card) => {
    let cardDiv = document.createElement("div");
    cardDiv.textContent = card.card;
    cardDiv.className = "player";
    let suit = card.name.split("").splice(1)[0];
    if (suit === "♥") cardDiv.classList.add("hearts");
    if (suit === "♦") cardDiv.classList.add("diamonds");
    if (suit === "♠") cardDiv.classList.add("spades");
    if (suit === "♣") cardDiv.classList.add("clubs");
    cardsDiv.append(cardDiv);
  });

  let playerNameDiv = document.createElement("div");
  playerNameDiv.textContent = player;

  playerDiv.append(cardsDiv);
  playerDiv.append(playerNameDiv);
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
