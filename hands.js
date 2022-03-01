const ROYAL_FLUSH = { name: "ROYAL_FLUSH", value: 9 };
const STRAIGHT_FLUSH = { name: "STRAIGHT_FLUSH", value: 8 };
const FOUR_OF_A_KIND = { name: "FOUR_OF_A_KIND", value: 7 };
const FULL_HOUSE = { name: "FULL_HOUSE", value: 6 };
const FLUSH = { name: "FLUSH", value: 5 };
const STRAIGHT = { name: "STRAIGHT", value: 4 };
const THREE_OF_A_KIND = { name: "THREE_OF_A_KIND", value: 3 };
const TWO_PAIR = { name: "TWO_PAIR", value: 2 };
const PAIR = { name: "PAIR", value: 1 };
const HIGH_CARD = { name: "HIGH_CARD", value: 0 };

const playerHand = document.querySelector("#playerHand");

function getRoyalFlush() {}
function getStraightFlush() {}
function getFourOfAKind() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isFourOfAKind = false;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[2].value &&
    cards[0].value === cards[3].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[2].value &&
    cards[0].value === cards[4].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[2].value &&
    cards[0].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[2].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[3].value &&
    cards[0].value === cards[4].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[3].value &&
    cards[0].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[3].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[4].value &&
    cards[0].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[4].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[1].value &&
    cards[0].value === cards[5].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[2].value &&
    cards[0].value === cards[3].value &&
    cards[0].value === cards[4].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[2].value &&
    cards[0].value === cards[3].value &&
    cards[0].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[2].value &&
    cards[0].value === cards[3].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[2].value &&
    cards[0].value === cards[4].value &&
    cards[0].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[2].value &&
    cards[0].value === cards[4].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[2].value &&
    cards[0].value === cards[5].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[3].value &&
    cards[0].value === cards[4].value &&
    cards[0].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[3].value &&
    cards[0].value === cards[4].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[3].value &&
    cards[0].value === cards[5].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[0].value === cards[4].value &&
    cards[0].value === cards[5].value &&
    cards[0].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[2].value &&
    cards[1].value === cards[3].value &&
    cards[1].value === cards[4].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[2].value &&
    cards[1].value === cards[3].value &&
    cards[1].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[2].value &&
    cards[1].value === cards[3].value &&
    cards[1].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[2].value &&
    cards[1].value === cards[4].value &&
    cards[1].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[2].value &&
    cards[1].value === cards[4].value &&
    cards[1].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[2].value &&
    cards[1].value === cards[5].value &&
    cards[1].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[3].value &&
    cards[1].value === cards[4].value &&
    cards[1].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[3].value &&
    cards[1].value === cards[4].value &&
    cards[1].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[3].value &&
    cards[1].value === cards[5].value &&
    cards[1].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[1].value === cards[4].value &&
    cards[1].value === cards[5].value &&
    cards[1].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[2].value === cards[3].value &&
    cards[2].value === cards[4].value &&
    cards[2].value === cards[5].value
  )
    isFourOfAKind = true;
  if (
    cards[2].value === cards[3].value &&
    cards[2].value === cards[4].value &&
    cards[2].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[2].value === cards[3].value &&
    cards[2].value === cards[5].value &&
    cards[2].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[2].value === cards[4].value &&
    cards[2].value === cards[5].value &&
    cards[2].value === cards[6].value
  )
    isFourOfAKind = true;
  if (
    cards[3].value === cards[4].value &&
    cards[3].value === cards[5].value &&
    cards[3].value === cards[6].value
  )
    isFourOfAKind = true;
  console.log(`${isFourOfAKind} - Four of a Kind`);
}
function getFullHouse() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isFullHouse = false;

  let playerHand = {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    jack: 0,
    queen: 0,
    king: 0,
    ace: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === 2) playerHand.two += 1;
    if (cards[i].value === 3) playerHand.three += 1;
    if (cards[i].value === 4) playerHand.four += 1;
    if (cards[i].value === 5) playerHand.five += 1;
    if (cards[i].value === 6) playerHand.six += 1;
    if (cards[i].value === 7) playerHand.seven += 1;
    if (cards[i].value === 8) playerHand.eight += 1;
    if (cards[i].value === 9) playerHand.nine += 1;
    if (cards[i].value === 10) playerHand.ten += 1;
    if (cards[i].value === 11) playerHand.jack += 1;
    if (cards[i].value === 12) playerHand.queen += 1;
    if (cards[i].value === 13) playerHand.king += 1;
    if (cards[i].value === 14) playerHand.ace += 1;
  }

  if (playerHand.ace >= 2 && playerHand.king >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.queen >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.jack >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.ten >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.nine >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.eight >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.seven >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.ace >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.queen >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.jack >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.ten >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.nine >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.eight >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.seven >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.king >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.jack >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.ten >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.nine >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.eight >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.seven >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.queen >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.ten >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.nine >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.eight >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.seven >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.jack >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.nine >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.eight >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.seven >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.ten >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.nine >= 2 && playerHand.eight >= 2) isFullHouse = true;
  if (playerHand.nine >= 2 && playerHand.seven >= 2) isFullHouse = true;
  if (playerHand.nine >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.nine >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.nine >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.nine >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.nine >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.eight >= 2 && playerHand.seven >= 2) isFullHouse = true;
  if (playerHand.eight >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.eight >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.eight >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.eight >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.eight >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.seven >= 2 && playerHand.six >= 2) isFullHouse = true;
  if (playerHand.seven >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.seven >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.seven >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.seven >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.six >= 2 && playerHand.five >= 2) isFullHouse = true;
  if (playerHand.six >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.six >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.six >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.five >= 2 && playerHand.four >= 2) isFullHouse = true;
  if (playerHand.five >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.five >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.four >= 2 && playerHand.three >= 2) isFullHouse = true;
  if (playerHand.four >= 2 && playerHand.two >= 2) isFullHouse = true;
  if (playerHand.three >= 2 && playerHand.two >= 2) isFullHouse = true;

  console.log(`${isFullHouse} - Full House`);
}
function getFlush() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isFlush = false;

  let playerHand = {
    heart: 0,
    diamond: 0,
    spade: 0,
    club: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].suit === "♥") playerHand.heart += 1;
    if (cards[i].suit === "♦") playerHand.diamond += 1;
    if (cards[i].suit === "♠") playerHand.spade += 1;
    if (cards[i].suit === "♣") playerHand.club += 1;
  }

  if (playerHand.heart >= 5) isFlush = true;
  if (playerHand.diamond >= 5) isFlush = true;
  if (playerHand.spade >= 5) isFlush = true;
  if (playerHand.club >= 5) isFlush = true;

  console.log(`${isFlush} - Flush`);
}
function getStraight() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isStraight = false;

  let playerHand = {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    jack: 0,
    queen: 0,
    king: 0,
    ace: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === 2) playerHand.two += 1;
    if (cards[i].value === 3) playerHand.three += 1;
    if (cards[i].value === 4) playerHand.four += 1;
    if (cards[i].value === 5) playerHand.five += 1;
    if (cards[i].value === 6) playerHand.six += 1;
    if (cards[i].value === 7) playerHand.seven += 1;
    if (cards[i].value === 8) playerHand.eight += 1;
    if (cards[i].value === 9) playerHand.nine += 1;
    if (cards[i].value === 10) playerHand.ten += 1;
    if (cards[i].value === 11) playerHand.jack += 1;
    if (cards[i].value === 12) playerHand.queen += 1;
    if (cards[i].value === 13) playerHand.king += 1;
    if (cards[i].value === 14) playerHand.ace += 1;
  }

  if (
    playerHand.ace > 0 &&
    playerHand.two > 0 &&
    playerHand.three > 0 &&
    playerHand.four > 0 &&
    playerHand.five > 0
  )
    isStraight = true;

  if (
    playerHand.two > 0 &&
    playerHand.three > 0 &&
    playerHand.four > 0 &&
    playerHand.five > 0 &&
    playerHand.six > 0
  )
    isStraight = true;

  if (
    playerHand.three > 0 &&
    playerHand.four > 0 &&
    playerHand.five > 0 &&
    playerHand.six > 0 &&
    playerHand.seven > 0
  )
    isStraight = true;

  if (
    playerHand.four > 0 &&
    playerHand.five > 0 &&
    playerHand.six > 0 &&
    playerHand.seven > 0 &&
    playerHand.eight > 0
  )
    isStraight = true;

  if (
    playerHand.five > 0 &&
    playerHand.six > 0 &&
    playerHand.seven > 0 &&
    playerHand.eight > 0 &&
    playerHand.nine > 0
  )
    isStraight = true;

  if (
    playerHand.six > 0 &&
    playerHand.seven > 0 &&
    playerHand.eight > 0 &&
    playerHand.nine > 0 &&
    playerHand.ten > 0
  )
    isStraight = true;

  if (
    playerHand.seven > 0 &&
    playerHand.eight > 0 &&
    playerHand.nine > 0 &&
    playerHand.ten > 0 &&
    playerHand.jack > 0
  )
    isStraight = true;

  if (
    playerHand.eight > 0 &&
    playerHand.nine > 0 &&
    playerHand.ten > 0 &&
    playerHand.jack > 0 &&
    playerHand.queen > 0
  )
    isStraight = true;

  if (
    playerHand.nine > 0 &&
    playerHand.ten > 0 &&
    playerHand.jack > 0 &&
    playerHand.queen > 0 &&
    playerHand.king > 0
  )
    isStraight = true;

  if (
    playerHand.ten > 0 &&
    playerHand.jack > 0 &&
    playerHand.queen > 0 &&
    playerHand.king > 0 &&
    playerHand.ace > 0
  )
    isStraight = true;

  console.log(`${isStraight} - Straight`);
}
function getThreeOfAKind() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isThreeOfAKind = false;

  let playerHand = {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    jack: 0,
    queen: 0,
    king: 0,
    ace: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === 2) playerHand.two += 1;
    if (cards[i].value === 3) playerHand.three += 1;
    if (cards[i].value === 4) playerHand.four += 1;
    if (cards[i].value === 5) playerHand.five += 1;
    if (cards[i].value === 6) playerHand.six += 1;
    if (cards[i].value === 7) playerHand.seven += 1;
    if (cards[i].value === 8) playerHand.eight += 1;
    if (cards[i].value === 9) playerHand.nine += 1;
    if (cards[i].value === 10) playerHand.ten += 1;
    if (cards[i].value === 11) playerHand.jack += 1;
    if (cards[i].value === 12) playerHand.queen += 1;
    if (cards[i].value === 13) playerHand.king += 1;
    if (cards[i].value === 14) playerHand.ace += 1;
  }

  if (playerHand.ace >= 3) isThreeOfAKind = true;
  if (playerHand.king >= 3) isThreeOfAKind = true;
  if (playerHand.queen >= 3) isThreeOfAKind = true;
  if (playerHand.jack >= 3) isThreeOfAKind = true;
  if (playerHand.ten >= 3) isThreeOfAKind = true;
  if (playerHand.nine >= 3) isThreeOfAKind = true;
  if (playerHand.eight >= 3) isThreeOfAKind = true;
  if (playerHand.seven >= 3) isThreeOfAKind = true;
  if (playerHand.six >= 3) isThreeOfAKind = true;
  if (playerHand.five >= 3) isThreeOfAKind = true;
  if (playerHand.four >= 3) isThreeOfAKind = true;
  if (playerHand.three >= 3) isThreeOfAKind = true;
  if (playerHand.two >= 3) isThreeOfAKind = true;
  console.log(`${isThreeOfAKind} - Three of a Kind`);
}
function getTwoPair() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isTwoPair = false;

  let playerHand = {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    jack: 0,
    queen: 0,
    king: 0,
    ace: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === 2) playerHand.two += 1;
    if (cards[i].value === 3) playerHand.three += 1;
    if (cards[i].value === 4) playerHand.four += 1;
    if (cards[i].value === 5) playerHand.five += 1;
    if (cards[i].value === 6) playerHand.six += 1;
    if (cards[i].value === 7) playerHand.seven += 1;
    if (cards[i].value === 8) playerHand.eight += 1;
    if (cards[i].value === 9) playerHand.nine += 1;
    if (cards[i].value === 10) playerHand.ten += 1;
    if (cards[i].value === 11) playerHand.jack += 1;
    if (cards[i].value === 12) playerHand.queen += 1;
    if (cards[i].value === 13) playerHand.king += 1;
    if (cards[i].value === 14) playerHand.ace += 1;
  }

  if (playerHand.ace >= 2 && playerHand.king >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.queen >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.jack >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.ten >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.nine >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.eight >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.seven >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.ace >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.queen >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.jack >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.ten >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.nine >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.eight >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.seven >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.king >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.jack >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.ten >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.nine >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.eight >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.seven >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.queen >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.ten >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.nine >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.eight >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.seven >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.jack >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.nine >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.eight >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.seven >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.ten >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.nine >= 2 && playerHand.eight >= 2) isTwoPair = true;
  if (playerHand.nine >= 2 && playerHand.seven >= 2) isTwoPair = true;
  if (playerHand.nine >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.nine >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.nine >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.nine >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.nine >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.eight >= 2 && playerHand.seven >= 2) isTwoPair = true;
  if (playerHand.eight >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.eight >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.eight >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.eight >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.eight >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.seven >= 2 && playerHand.six >= 2) isTwoPair = true;
  if (playerHand.seven >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.seven >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.seven >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.seven >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.six >= 2 && playerHand.five >= 2) isTwoPair = true;
  if (playerHand.six >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.six >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.six >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.five >= 2 && playerHand.four >= 2) isTwoPair = true;
  if (playerHand.five >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.five >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.four >= 2 && playerHand.three >= 2) isTwoPair = true;
  if (playerHand.four >= 2 && playerHand.two >= 2) isTwoPair = true;
  if (playerHand.three >= 2 && playerHand.two >= 2) isTwoPair = true;

  console.log(`${isTwoPair} - Two Pair`);
}
function getPair() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isPair = false;
  let playerHand = {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    jack: 0,
    queen: 0,
    king: 0,
    ace: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === 2) playerHand.two += 1;
    if (cards[i].value === 3) playerHand.three += 1;
    if (cards[i].value === 4) playerHand.four += 1;
    if (cards[i].value === 5) playerHand.five += 1;
    if (cards[i].value === 6) playerHand.six += 1;
    if (cards[i].value === 7) playerHand.seven += 1;
    if (cards[i].value === 8) playerHand.eight += 1;
    if (cards[i].value === 9) playerHand.nine += 1;
    if (cards[i].value === 10) playerHand.ten += 1;
    if (cards[i].value === 11) playerHand.jack += 1;
    if (cards[i].value === 12) playerHand.queen += 1;
    if (cards[i].value === 13) playerHand.king += 1;
    if (cards[i].value === 14) playerHand.ace += 1;
  }

  if (playerHand.ace >= 2) isPair = true;
  if (playerHand.king >= 2) isPair = true;
  if (playerHand.queen >= 2) isPair = true;
  if (playerHand.jack >= 2) isPair = true;
  if (playerHand.ten >= 2) isPair = true;
  if (playerHand.nine >= 2) isPair = true;
  if (playerHand.eight >= 2) isPair = true;
  if (playerHand.seven >= 2) isPair = true;
  if (playerHand.six >= 2) isPair = true;
  if (playerHand.five >= 2) isPair = true;
  if (playerHand.four >= 2) isPair = true;
  if (playerHand.three >= 2) isPair = true;
  if (playerHand.two >= 2) isPair = true;

  console.log(`${isPair} - Pair`);
}
function getHighCard() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isHighCard = false;
  let playerHand = {
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    jack: 0,
    queen: 0,
    king: 0,
    ace: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === 2) playerHand.two += 1;
    if (cards[i].value === 3) playerHand.three += 1;
    if (cards[i].value === 4) playerHand.four += 1;
    if (cards[i].value === 5) playerHand.five += 1;
    if (cards[i].value === 6) playerHand.six += 1;
    if (cards[i].value === 7) playerHand.seven += 1;
    if (cards[i].value === 8) playerHand.eight += 1;
    if (cards[i].value === 9) playerHand.nine += 1;
    if (cards[i].value === 10) playerHand.ten += 1;
    if (cards[i].value === 11) playerHand.jack += 1;
    if (cards[i].value === 12) playerHand.queen += 1;
    if (cards[i].value === 13) playerHand.king += 1;
    if (cards[i].value === 14) playerHand.ace += 1;
  }

  if (playerHand.ace >= 1) isPair = true;
  else if (playerHand.king >= 1) isPair = true;
  else if (playerHand.queen >= 1) isPair = true;
  else if (playerHand.jack >= 1) isPair = true;
  else if (playerHand.ten >= 1) isPair = true;
  else if (playerHand.nine >= 1) isPair = true;
  else if (playerHand.eight >= 1) isPair = true;
  else if (playerHand.seven >= 1) isPair = true;
  else if (playerHand.six >= 1) isPair = true;
  else if (playerHand.five >= 1) isPair = true;
  else if (playerHand.four >= 1) isPair = true;
  else if (playerHand.three >= 1) isPair = true;
  else if (playerHand.two >= 1) isPair = true;

  console.log("High Card", highCard);
}
