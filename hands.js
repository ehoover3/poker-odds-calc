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

function getRoyalFlush() {
  let isRoyalFlush = "???";
  console.log(`Royal Flush -----> ${isRoyalFlush}`);
}
function getStraightFlush() {
  let isStraightFlush = "???";
  console.log(`Straight Flush --> ${isStraightFlush}`);
}
function getFourOfAKind() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let fourOfAKind = "n/a";

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

  if (playerHand.ace >= 4) fourOfAKind = "Four Aces";
  else if (playerHand.king >= 4) fourOfAKind = "Four Kings";
  else if (playerHand.queen >= 4) fourOfAKind = "Four Queens";
  else if (playerHand.jack >= 4) fourOfAKind = "Four Jacks";
  else if (playerHand.ten >= 4) fourOfAKind = "Four 10's";
  else if (playerHand.nine >= 4) fourOfAKind = "Four 9's";
  else if (playerHand.eight >= 4) fourOfAKind = "Four 8's";
  else if (playerHand.seven >= 4) fourOfAKind = "Four 7's";
  else if (playerHand.six >= 4) fourOfAKind = "Four 6's";
  else if (playerHand.five >= 4) fourOfAKind = "Four 5's";
  else if (playerHand.four >= 4) fourOfAKind = "Four 4's";
  else if (playerHand.three >= 4) fourOfAKind = "Four 3's";
  else if (playerHand.two >= 4) fourOfAKind = "Four 2's";
  console.log(`Four of a Kind --> ${fourOfAKind}`);
}
function getFullHouse() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let fullHouse = "n/a";

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

  if (playerHand.ace >= 2 && playerHand.king >= 2) fullHouse = "Aces over Kings";
  if (playerHand.ace >= 2 && playerHand.queen >= 2) fullHouse = "Aces over Queens";
  if (playerHand.ace >= 2 && playerHand.jack >= 2) fullHouse = "Aces over Jacks";
  if (playerHand.ace >= 2 && playerHand.ten >= 2) fullHouse = "Aces over 10's";
  if (playerHand.ace >= 2 && playerHand.nine >= 2) fullHouse = "Aces over 9's";
  if (playerHand.ace >= 2 && playerHand.eight >= 2) fullHouse = "Aces over 8's";
  if (playerHand.ace >= 2 && playerHand.seven >= 2) fullHouse = "Aces over 7's";
  if (playerHand.ace >= 2 && playerHand.six >= 2) fullHouse = "Aces over 6's";
  if (playerHand.ace >= 2 && playerHand.five >= 2) fullHouse = "Aces over 5's";
  if (playerHand.ace >= 2 && playerHand.four >= 2) fullHouse = "Aces over 4's";
  if (playerHand.ace >= 2 && playerHand.three >= 2) fullHouse = "Aces over 3's";
  if (playerHand.ace >= 2 && playerHand.two >= 2) fullHouse = "Aces over 2's";
  if (playerHand.king >= 2 && playerHand.queen >= 2) fullHouse = "Kings over Queens";
  if (playerHand.king >= 2 && playerHand.jack >= 2) fullHouse = "Kings over Jacks";
  if (playerHand.king >= 2 && playerHand.ten >= 2) fullHouse = "Kings over 10's";
  if (playerHand.king >= 2 && playerHand.nine >= 2) fullHouse = "Kings over 9's";
  if (playerHand.king >= 2 && playerHand.eight >= 2) fullHouse = "Kings over 8's";
  if (playerHand.king >= 2 && playerHand.seven >= 2) fullHouse = "Kings over 7's";
  if (playerHand.king >= 2 && playerHand.six >= 2) fullHouse = "Kings over 6's";
  if (playerHand.king >= 2 && playerHand.five >= 2) fullHouse = "Kings over 5's";
  if (playerHand.king >= 2 && playerHand.four >= 2) fullHouse = "Kings over 4's";
  if (playerHand.king >= 2 && playerHand.three >= 2) fullHouse = "Kings over 3's";
  if (playerHand.king >= 2 && playerHand.two >= 2) fullHouse = "Kings over 2's";
  if (playerHand.queen >= 2 && playerHand.jack >= 2) fullHouse = "Queens over Jacks";
  if (playerHand.queen >= 2 && playerHand.ten >= 2) fullHouse = "Queens over 10's";
  if (playerHand.queen >= 2 && playerHand.nine >= 2) fullHouse = "Queens over 9's";
  if (playerHand.queen >= 2 && playerHand.eight >= 2) fullHouse = "Queens over 8's";
  if (playerHand.queen >= 2 && playerHand.seven >= 2) fullHouse = "Queens over 7's";
  if (playerHand.queen >= 2 && playerHand.six >= 2) fullHouse = "Queens over 6's";
  if (playerHand.queen >= 2 && playerHand.five >= 2) fullHouse = "Queens over 5's";
  if (playerHand.queen >= 2 && playerHand.four >= 2) fullHouse = "Queens over 4's";
  if (playerHand.queen >= 2 && playerHand.three >= 2) fullHouse = "Queens over 3's";
  if (playerHand.queen >= 2 && playerHand.two >= 2) fullHouse = "Queens over 2's";
  if (playerHand.jack >= 2 && playerHand.ten >= 2) fullHouse = "Jacks over 10's";
  if (playerHand.jack >= 2 && playerHand.nine >= 2) fullHouse = "Jacks over 9's";
  if (playerHand.jack >= 2 && playerHand.eight >= 2) fullHouse = "Jacks over 8's";
  if (playerHand.jack >= 2 && playerHand.seven >= 2) fullHouse = "Jacks over 7's";
  if (playerHand.jack >= 2 && playerHand.six >= 2) fullHouse = "Jacks over 6's";
  if (playerHand.jack >= 2 && playerHand.five >= 2) fullHouse = "Jacks over 5's";
  if (playerHand.jack >= 2 && playerHand.four >= 2) fullHouse = "Jacks over 4's";
  if (playerHand.jack >= 2 && playerHand.three >= 2) fullHouse = "Jacks over 3's";
  if (playerHand.jack >= 2 && playerHand.two >= 2) fullHouse = "Jacks over 2's";
  if (playerHand.ten >= 2 && playerHand.nine >= 2) fullHouse = "10's over 9's";
  if (playerHand.ten >= 2 && playerHand.eight >= 2) fullHouse = "10's over 8's";
  if (playerHand.ten >= 2 && playerHand.seven >= 2) fullHouse = "10's over 7's";
  if (playerHand.ten >= 2 && playerHand.six >= 2) fullHouse = "10's over 6's";
  if (playerHand.ten >= 2 && playerHand.five >= 2) fullHouse = "10's over 5's";
  if (playerHand.ten >= 2 && playerHand.four >= 2) fullHouse = "10's over 4's";
  if (playerHand.ten >= 2 && playerHand.three >= 2) fullHouse = "10's over 3's";
  if (playerHand.ten >= 2 && playerHand.two >= 2) fullHouse = "10's over 2's";
  if (playerHand.nine >= 2 && playerHand.eight >= 2) fullHouse = "9's over 8's";
  if (playerHand.nine >= 2 && playerHand.seven >= 2) fullHouse = "9's over 7's";
  if (playerHand.nine >= 2 && playerHand.six >= 2) fullHouse = "9's over 6's";
  if (playerHand.nine >= 2 && playerHand.five >= 2) fullHouse = "9's over 5's";
  if (playerHand.nine >= 2 && playerHand.four >= 2) fullHouse = "9's over 4's";
  if (playerHand.nine >= 2 && playerHand.three >= 2) fullHouse = "9's over 3's";
  if (playerHand.nine >= 2 && playerHand.two >= 2) fullHouse = "9's over 2's";
  if (playerHand.eight >= 2 && playerHand.seven >= 2) fullHouse = "8's over 7's";
  if (playerHand.eight >= 2 && playerHand.six >= 2) fullHouse = "8's over 6's";
  if (playerHand.eight >= 2 && playerHand.five >= 2) fullHouse = "8's over 5's";
  if (playerHand.eight >= 2 && playerHand.four >= 2) fullHouse = "8's over 4's";
  if (playerHand.eight >= 2 && playerHand.three >= 2) fullHouse = "8's over 3's";
  if (playerHand.eight >= 2 && playerHand.two >= 2) fullHouse = "8's over 2's";
  if (playerHand.seven >= 2 && playerHand.six >= 2) fullHouse = "7's over 6's";
  if (playerHand.seven >= 2 && playerHand.five >= 2) fullHouse = "7's over 5's";
  if (playerHand.seven >= 2 && playerHand.four >= 2) fullHouse = "7's over 4's";
  if (playerHand.seven >= 2 && playerHand.three >= 2) fullHouse = "7's over 3's";
  if (playerHand.seven >= 2 && playerHand.two >= 2) fullHouse = "7's over 2's";
  if (playerHand.six >= 2 && playerHand.five >= 2) fullHouse = "6's over 5's";
  if (playerHand.six >= 2 && playerHand.four >= 2) fullHouse = "6's over 4's";
  if (playerHand.six >= 2 && playerHand.three >= 2) fullHouse = "6's over 3's";
  if (playerHand.six >= 2 && playerHand.two >= 2) fullHouse = "6's over 2's";
  if (playerHand.five >= 2 && playerHand.four >= 2) fullHouse = "5's over 4's";
  if (playerHand.five >= 2 && playerHand.three >= 2) fullHouse = "5's over 3's";
  if (playerHand.five >= 2 && playerHand.two >= 2) fullHouse = "5's over 2's";
  if (playerHand.four >= 2 && playerHand.three >= 2) fullHouse = "4's over 3's";
  if (playerHand.four >= 2 && playerHand.two >= 2) fullHouse = "4's over 2's";
  if (playerHand.three >= 2 && playerHand.two >= 2) fullHouse = "3's over 2's";

  console.log(`Full House ------> ${fullHouse}`);
}
function getFlush() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let flush = "n/a";

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

  if (playerHand.heart >= 5) flush = "Hearts Flush";
  if (playerHand.diamond >= 5) flush = "Diamonds Flush";
  if (playerHand.club >= 5) flush = "Clubs Flush";
  if (playerHand.spade >= 5) flush = "Spades Flush";

  console.log(`Flush -----------> ${flush}`);
}
function getStraight() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let straight = "n/a";

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
    playerHand.king > 0 &&
    playerHand.queen > 0 &&
    playerHand.jack > 0 &&
    playerHand.ten > 0
  )
    straight = "Ace High Straight";
  else if (
    playerHand.king > 0 &&
    playerHand.queen > 0 &&
    playerHand.jack > 0 &&
    playerHand.ten > 0 &&
    playerHand.nine > 0
  )
    straight = "King High Straight";
  else if (
    playerHand.queen > 0 &&
    playerHand.jack > 0 &&
    playerHand.ten > 0 &&
    playerHand.nine > 0 &&
    playerHand.eight > 0
  )
    straight = "Queen High Straight";
  else if (
    playerHand.jack > 0 &&
    playerHand.ten > 0 &&
    playerHand.nine > 0 &&
    playerHand.eight > 0 &&
    playerHand.seven > 0
  )
    straight = "Jack High Straight";
  else if (
    playerHand.ten > 0 &&
    playerHand.nine > 0 &&
    playerHand.eight > 0 &&
    playerHand.seven > 0 &&
    playerHand.six > 0
  )
    straight = "10 High Straight";
  else if (
    playerHand.nine > 0 &&
    playerHand.eight > 0 &&
    playerHand.seven > 0 &&
    playerHand.six > 0 &&
    playerHand.five > 0
  )
    straight = "9 High Straight";
  else if (
    playerHand.eight > 0 &&
    playerHand.seven > 0 &&
    playerHand.six > 0 &&
    playerHand.five > 0 &&
    playerHand.four > 0
  )
    straight = "8 High Straight";
  else if (
    playerHand.seven > 0 &&
    playerHand.six > 0 &&
    playerHand.five > 0 &&
    playerHand.four > 0 &&
    playerHand.three > 0
  )
    straight = "7 High Straight";
  else if (
    playerHand.six > 0 &&
    playerHand.five > 0 &&
    playerHand.four > 0 &&
    playerHand.three > 0 &&
    playerHand.two > 0
  )
    straight = "6 High Straight";
  else if (
    playerHand.five > 0 &&
    playerHand.four > 0 &&
    playerHand.three > 0 &&
    playerHand.two > 0 &&
    playerHand.ace > 0
  )
    straight = "5 High Straight";

  console.log(`Straight --------> ${straight}`);
}
function getThreeOfAKind() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isThreeOfAKind = "n/a";

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

  if (playerHand.ace >= 3) isThreeOfAKind = "Three Aces";
  else if (playerHand.king >= 3) isThreeOfAKind = "Three Kings";
  else if (playerHand.queen >= 3) isThreeOfAKind = "Three Queens";
  else if (playerHand.jack >= 3) isThreeOfAKind = "Three Jacks";
  else if (playerHand.ten >= 3) isThreeOfAKind = "Three 10's";
  else if (playerHand.nine >= 3) isThreeOfAKind = "Three 9's";
  else if (playerHand.eight >= 3) isThreeOfAKind = "Three 8's";
  else if (playerHand.seven >= 3) isThreeOfAKind = "Three 7's";
  else if (playerHand.six >= 3) isThreeOfAKind = "Three 6's";
  else if (playerHand.five >= 3) isThreeOfAKind = "Three 5's";
  else if (playerHand.four >= 3) isThreeOfAKind = "Three 4's";
  else if (playerHand.three >= 3) isThreeOfAKind = "Three 3's";
  else if (playerHand.two >= 3) isThreeOfAKind = "Three 2's";

  console.log(`Three of a Kind -> ${isThreeOfAKind}`);
}
function getTwoPair() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let twoPair = "n/a";

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

  if (playerHand.ace >= 2 && playerHand.king >= 2) twoPair = "Aces over Kings";
  else if (playerHand.ace >= 2 && playerHand.queen >= 2) twoPair = "Aces over Queens";
  else if (playerHand.ace >= 2 && playerHand.jack >= 2) twoPair = "Aces over Jacks";
  else if (playerHand.ace >= 2 && playerHand.ten >= 2) twoPair = "Aces over 10's";
  else if (playerHand.ace >= 2 && playerHand.nine >= 2) twoPair = "Aces over 9's";
  else if (playerHand.ace >= 2 && playerHand.eight >= 2) twoPair = "Aces over 8's";
  else if (playerHand.ace >= 2 && playerHand.seven >= 2) twoPair = "Aces over 7's";
  else if (playerHand.ace >= 2 && playerHand.six >= 2) twoPair = "Aces over 6's";
  else if (playerHand.ace >= 2 && playerHand.five >= 2) twoPair = "Aces over 5's";
  else if (playerHand.ace >= 2 && playerHand.four >= 2) twoPair = "Aces over 4's";
  else if (playerHand.ace >= 2 && playerHand.three >= 2) twoPair = "Aces over 3's";
  else if (playerHand.ace >= 2 && playerHand.two >= 2) twoPair = "Aces over 2's";
  else if (playerHand.king >= 2 && playerHand.queen >= 2) twoPair = "Kings over Queens";
  else if (playerHand.king >= 2 && playerHand.jack >= 2) twoPair = "Kings over Jacks";
  else if (playerHand.king >= 2 && playerHand.ten >= 2) twoPair = "Kings over 10's";
  else if (playerHand.king >= 2 && playerHand.nine >= 2) twoPair = "Kings over 9's";
  else if (playerHand.king >= 2 && playerHand.eight >= 2) twoPair = "Kings over 8's";
  else if (playerHand.king >= 2 && playerHand.seven >= 2) twoPair = "Kings over 7's";
  else if (playerHand.king >= 2 && playerHand.six >= 2) twoPair = "Kings over 6's";
  else if (playerHand.king >= 2 && playerHand.five >= 2) twoPair = "Kings over 5's";
  else if (playerHand.king >= 2 && playerHand.four >= 2) twoPair = "Kings over 4's";
  else if (playerHand.king >= 2 && playerHand.three >= 2) twoPair = "Kings over 3's";
  else if (playerHand.king >= 2 && playerHand.two >= 2) twoPair = "Kings over 2's";
  else if (playerHand.queen >= 2 && playerHand.jack >= 2) twoPair = "Queens over Jacks";
  else if (playerHand.queen >= 2 && playerHand.ten >= 2) twoPair = "Queens over 10's";
  else if (playerHand.queen >= 2 && playerHand.nine >= 2) twoPair = "Queens over 9's";
  else if (playerHand.queen >= 2 && playerHand.eight >= 2) twoPair = "Queens over 8's";
  else if (playerHand.queen >= 2 && playerHand.seven >= 2) twoPair = "Queens over 7's";
  else if (playerHand.queen >= 2 && playerHand.six >= 2) twoPair = "Queens over 6's";
  else if (playerHand.queen >= 2 && playerHand.five >= 2) twoPair = "Queens over 5's";
  else if (playerHand.queen >= 2 && playerHand.four >= 2) twoPair = "Queens over 4's";
  else if (playerHand.queen >= 2 && playerHand.three >= 2) twoPair = "Queens over 3's";
  else if (playerHand.queen >= 2 && playerHand.two >= 2) twoPair = "Queens over 2's";
  else if (playerHand.jack >= 2 && playerHand.ten >= 2) twoPair = "Jacks over 10's";
  else if (playerHand.jack >= 2 && playerHand.nine >= 2) twoPair = "Jacks over 9's";
  else if (playerHand.jack >= 2 && playerHand.eight >= 2) twoPair = "Jacks over 8's";
  else if (playerHand.jack >= 2 && playerHand.seven >= 2) twoPair = "Jacks over 7's";
  else if (playerHand.jack >= 2 && playerHand.six >= 2) twoPair = "Jacks over 6's";
  else if (playerHand.jack >= 2 && playerHand.five >= 2) twoPair = "Jacks over 5's";
  else if (playerHand.jack >= 2 && playerHand.four >= 2) twoPair = "Jacks over 4's";
  else if (playerHand.jack >= 2 && playerHand.three >= 2) twoPair = "Jacks over 3's";
  else if (playerHand.jack >= 2 && playerHand.two >= 2) twoPair = "Jacks over 2's";
  else if (playerHand.ten >= 2 && playerHand.nine >= 2) twoPair = "10's over 9's";
  else if (playerHand.ten >= 2 && playerHand.eight >= 2) twoPair = "10's over 8's";
  else if (playerHand.ten >= 2 && playerHand.seven >= 2) twoPair = "10's over 7's";
  else if (playerHand.ten >= 2 && playerHand.six >= 2) twoPair = "10's over 6's";
  else if (playerHand.ten >= 2 && playerHand.five >= 2) twoPair = "10's over 5's";
  else if (playerHand.ten >= 2 && playerHand.four >= 2) twoPair = "10's over 4's";
  else if (playerHand.ten >= 2 && playerHand.three >= 2) twoPair = "10's over 3's";
  else if (playerHand.ten >= 2 && playerHand.two >= 2) twoPair = "10's over 2's";
  else if (playerHand.nine >= 2 && playerHand.eight >= 2) twoPair = "9's over 8's";
  else if (playerHand.nine >= 2 && playerHand.seven >= 2) twoPair = "9's over 7's";
  else if (playerHand.nine >= 2 && playerHand.six >= 2) twoPair = "9's over 6's";
  else if (playerHand.nine >= 2 && playerHand.five >= 2) twoPair = "9's over 5's";
  else if (playerHand.nine >= 2 && playerHand.four >= 2) twoPair = "9's over 4's";
  else if (playerHand.nine >= 2 && playerHand.three >= 2) twoPair = "9's over 3's";
  else if (playerHand.nine >= 2 && playerHand.two >= 2) twoPair = "9's over 2's";
  else if (playerHand.eight >= 2 && playerHand.seven >= 2) twoPair = "8's over 7's";
  else if (playerHand.eight >= 2 && playerHand.six >= 2) twoPair = "8's over 6's";
  else if (playerHand.eight >= 2 && playerHand.five >= 2) twoPair = "8's over 5's";
  else if (playerHand.eight >= 2 && playerHand.four >= 2) twoPair = "8's over 4's";
  else if (playerHand.eight >= 2 && playerHand.three >= 2) twoPair = "8's over 3's";
  else if (playerHand.eight >= 2 && playerHand.two >= 2) twoPair = "8's over 2's";
  else if (playerHand.seven >= 2 && playerHand.six >= 2) twoPair = "7's over 6's";
  else if (playerHand.seven >= 2 && playerHand.five >= 2) twoPair = "7's over 5's";
  else if (playerHand.seven >= 2 && playerHand.four >= 2) twoPair = "7's over 4's";
  else if (playerHand.seven >= 2 && playerHand.three >= 2) twoPair = "7's over 3's";
  else if (playerHand.seven >= 2 && playerHand.two >= 2) twoPair = "7's over 2's";
  else if (playerHand.six >= 2 && playerHand.five >= 2) twoPair = "6's over 5's";
  else if (playerHand.six >= 2 && playerHand.four >= 2) twoPair = "6's over 4's";
  else if (playerHand.six >= 2 && playerHand.three >= 2) twoPair = "6's over 3's";
  else if (playerHand.six >= 2 && playerHand.two >= 2) twoPair = "6's over 2's";
  else if (playerHand.five >= 2 && playerHand.four >= 2) twoPair = "5's over 4's";
  else if (playerHand.five >= 2 && playerHand.three >= 2) twoPair = "5's over 3's";
  else if (playerHand.five >= 2 && playerHand.two >= 2) twoPair = "5's over 2's";
  else if (playerHand.four >= 2 && playerHand.three >= 2) twoPair = "4's over 3's";
  else if (playerHand.four >= 2 && playerHand.two >= 2) twoPair = "4's over 2's";
  else if (playerHand.three >= 2 && playerHand.two >= 2) twoPair = "3's over 2's";

  console.log(`Two Pair --------> ${twoPair}`);
}
function getPair() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let isPair = false;
  let pair = "n/a";
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

  if (playerHand.ace >= 2) pair = "Pair of Aces";
  else if (playerHand.king >= 2) pair = "Pair of Kings";
  else if (playerHand.queen >= 2) pair = "Pair of Queens";
  else if (playerHand.jack >= 2) pair = "Pair of Jacks";
  else if (playerHand.ten >= 2) pair = "Pair of 10's";
  else if (playerHand.nine >= 2) pair = "Pair of 9's";
  else if (playerHand.eight >= 2) pair = "Pair of 8's";
  else if (playerHand.seven >= 2) pair = "Pair of 7's";
  else if (playerHand.six >= 2) pair = "Pair of 6's";
  else if (playerHand.five >= 2) pair = "Pair of 5's";
  else if (playerHand.four >= 2) pair = "Pair of 4's";
  else if (playerHand.three >= 2) pair = "Pair of 3's";
  else if (playerHand.two >= 2) pair = "Pair of 2's";

  console.log(`Pair ------------> ${pair}`);
}
function getHighCard() {
  let cards = [...playerA, ...flopData, ...turnData, ...riverData];
  let highCard = "Three";
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

  if (playerHand.ace >= 1) highCard = "Ace";
  else if (playerHand.king >= 1) highCard = "King";
  else if (playerHand.queen >= 1) highCard = "Queen";
  else if (playerHand.jack >= 1) highCard = "Jack";
  else if (playerHand.ten >= 1) highCard = "Ten";
  else if (playerHand.nine >= 1) highCard = "Nine";
  else if (playerHand.eight >= 1) highCarde = "Eight";
  else if (playerHand.seven >= 1) highCard = "Seven";
  else if (playerHand.six >= 1) highCard = "Six";
  else if (playerHand.five >= 1) highCard = "Five";
  else if (playerHand.four >= 1) highCard = "Four";
  else if (playerHand.three >= 1) highCard = "Three";
  else if (playerHand.two >= 1) highCard = "Two";

  console.log(`High Card -------> ${highCard}`);
}
