function getBestHand(playerData) {
  let cards = [...playerData, ...flopData, ...turnData, ...riverData];

  let r = { hand: "", str: NaN };
  // console.log(cards);

  // initial data
  let cardData = {
    // values
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
    // suits
    hrt: 0,
    dmnd: 0,
    spade: 0,
    club: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    // values
    if (cards[i].value === 2) cardData.two += 1;
    if (cards[i].value === 3) cardData.three += 1;
    if (cards[i].value === 4) cardData.four += 1;
    if (cards[i].value === 5) cardData.five += 1;
    if (cards[i].value === 6) cardData.six += 1;
    if (cards[i].value === 7) cardData.seven += 1;
    if (cards[i].value === 8) cardData.eight += 1;
    if (cards[i].value === 9) cardData.nine += 1;
    if (cards[i].value === 10) cardData.ten += 1;
    if (cards[i].value === 11) cardData.jack += 1;
    if (cards[i].value === 12) cardData.queen += 1;
    if (cards[i].value === 13) cardData.king += 1;
    if (cards[i].value === 14) cardData.ace += 1;
    // suits
    if (cards[i].suit === "♥") cardData.hrt += 1;
    if (cards[i].suit === "♦") cardData.dmnd += 1;
    if (cards[i].suit === "♠") cardData.spade += 1;
    if (cards[i].suit === "♣") cardData.club += 1;
  }

  let topCards = [
    cards[0].value,
    cards[1].value,
    cards[2].value,
    cards[3].value,
    cards[4].value,
    cards[5].value,
    cards[6].value,
  ]
    .sort()
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();

  // flush calculations - part 1 of 2
  let flushCards = [cards[0], cards[1], cards[2], cards[3], cards[4], cards[5], cards[6]]
    .sort((a, b) => {
      return a.value - b.value;
    })
    .reverse();

  // flush calculations - part 2 of 2
  let hearts = flushCards.filter((card) => card.suit === "♥");
  let diamonds = flushCards.filter((card) => card.suit === "♦");
  let spades = flushCards.filter((card) => card.suit === "♠");
  let clubs = flushCards.filter((card) => card.suit === "♣");

  /////////////////////////////////////////////////////////////////////////////////

  // ROYAL FLUSH
  if (
    (cards.some((c) => c.value === "A♥") &&
      cards.some((c) => c.value === "K♥") &&
      cards.some((c) => c.value === "Q♥") &&
      cards.some((c) => c.value === "J♥") &&
      cards.some((c) => c.value === "T♥")) ||
    (cards.some((c) => c.value === "A♦") &&
      cards.some((c) => c.value === "K♦") &&
      cards.some((c) => c.value === "Q♦") &&
      cards.some((c) => c.value === "J♦") &&
      cards.some((c) => c.value === "T♦")) ||
    (cards.some((c) => c.value === "A♠") &&
      cards.some((c) => c.value === "K♠") &&
      cards.some((c) => c.value === "Q♠") &&
      cards.some((c) => c.value === "J♠") &&
      cards.some((c) => c.value === "T♠")) ||
    (cards.some((c) => c.value === "A♣") &&
      cards.some((c) => c.value === "K♣") &&
      cards.some((c) => c.value === "Q♣") &&
      cards.some((c) => c.value === "J♣") &&
      cards.some((c) => c.value === "T♣"))
  ) {
    r = { hand: "Royal Flush", str: 1 };
  }

  // STRAIGHT FLUSH
  else if (
    (cards.some((c) => c.value === "K♥") &&
      cards.some((c) => c.value === "Q♥") &&
      cards.some((c) => c.value === "J♥") &&
      cards.some((c) => c.value === "T♥") &&
      cards.some((c) => c.value === "9♥")) ||
    (cards.some((c) => c.value === "K♦") &&
      cards.some((c) => c.value === "Q♦") &&
      cards.some((c) => c.value === "J♦") &&
      cards.some((c) => c.value === "T♦") &&
      cards.some((c) => c.value === "9♦")) ||
    (cards.some((c) => c.value === "K♠") &&
      cards.some((c) => c.value === "Q♠") &&
      cards.some((c) => c.value === "J♠") &&
      cards.some((c) => c.value === "T♠") &&
      cards.some((c) => c.value === "9♠")) ||
    (cards.some((c) => c.value === "K♣") &&
      cards.some((c) => c.value === "Q♣") &&
      cards.some((c) => c.value === "J♣") &&
      cards.some((c) => c.value === "T♣") &&
      cards.some((c) => c.value === "9♣"))
  )
    r = { hand: "Straight Flush King High", str: 2 };
  else if (
    (cards.some((c) => c.value === "Q♥") &&
      cards.some((c) => c.value === "J♥") &&
      cards.some((c) => c.value === "T♥") &&
      cards.some((c) => c.value === "9♥") &&
      cards.some((c) => c.value === "8♥")) ||
    (cards.some((c) => c.value === "Q♦") &&
      cards.some((c) => c.value === "J♦") &&
      cards.some((c) => c.value === "T♦") &&
      cards.some((c) => c.value === "9♦") &&
      cards.some((c) => c.value === "8♦")) ||
    (cards.some((c) => c.value === "Q♠") &&
      cards.some((c) => c.value === "J♠") &&
      cards.some((c) => c.value === "T♠") &&
      cards.some((c) => c.value === "9♠") &&
      cards.some((c) => c.value === "8♠")) ||
    (cards.some((c) => c.value === "Q♣") &&
      cards.some((c) => c.value === "J♣") &&
      cards.some((c) => c.value === "9♣") &&
      cards.some((c) => c.value === "8♣"))
  )
    r = { hand: "Straight Flush Queen High", str: 3 };
  else if (
    (cards.some((c) => c.value === "J♥") &&
      cards.some((c) => c.value === "T♥") &&
      cards.some((c) => c.value === "9♥") &&
      cards.some((c) => c.value === "8♥") &&
      cards.some((c) => c.value === "7♥")) ||
    (cards.some((c) => c.value === "J♦") &&
      cards.some((c) => c.value === "T♦") &&
      cards.some((c) => c.value === "9♦") &&
      cards.some((c) => c.value === "8♦") &&
      cards.some((c) => c.value === "7♦")) ||
    (cards.some((c) => c.value === "J♠") &&
      cards.some((c) => c.value === "T♠") &&
      cards.some((c) => c.value === "9♠") &&
      cards.some((c) => c.value === "8♠") &&
      cards.some((c) => c.value === "7♠")) ||
    (cards.some((c) => c.value === "J♣") &&
      cards.some((c) => c.value === "T♣") &&
      cards.some((c) => c.value === "9♣") &&
      cards.some((c) => c.value === "8♣") &&
      cards.some((c) => c.value === "7♣"))
  )
    r = { hand: "Straight Flush Jack High", str: 4 };
  else if (
    (cards.some((c) => c.value === "T♥") &&
      cards.some((c) => c.value === "9♥") &&
      cards.some((c) => c.value === "8♥") &&
      cards.some((c) => c.value === "7♥") &&
      cards.some((c) => c.value === "6♥")) ||
    (cards.some((c) => c.value === "T♦") &&
      cards.some((c) => c.value === "9♦") &&
      cards.some((c) => c.value === "8♦") &&
      cards.some((c) => c.value === "7♦") &&
      cards.some((c) => c.value === "6♦")) ||
    (cards.some((c) => c.value === "T♠") &&
      cards.some((c) => c.value === "9♠") &&
      cards.some((c) => c.value === "8♠") &&
      cards.some((c) => c.value === "7♠") &&
      cards.some((c) => c.value === "6♠")) ||
    (cards.some((c) => c.value === "T♣") &&
      cards.some((c) => c.value === "9♣") &&
      cards.some((c) => c.value === "8♣") &&
      cards.some((c) => c.value === "7♣") &&
      cards.some((c) => c.value === "6♣"))
  )
    r = { hand: "Straight Flush Ten High", str: 5 };
  else if (
    (cards.some((c) => c.value === "9♥") &&
      cards.some((c) => c.value === "8♥") &&
      cards.some((c) => c.value === "7♥") &&
      cards.some((c) => c.value === "6♥") &&
      cards.some((c) => c.value === "5♥")) ||
    (cards.some((c) => c.value === "9♦") &&
      cards.some((c) => c.value === "8♦") &&
      cards.some((c) => c.value === "7♦") &&
      cards.some((c) => c.value === "6♦") &&
      cards.some((c) => c.value === "5♦")) ||
    (cards.some((c) => c.value === "9♠") &&
      cards.some((c) => c.value === "8♠") &&
      cards.some((c) => c.value === "7♠") &&
      cards.some((c) => c.value === "6♠") &&
      cards.some((c) => c.value === "5♠")) ||
    (cards.some((c) => c.value === "9♣") &&
      cards.some((c) => c.value === "8♣") &&
      cards.some((c) => c.value === "7♣") &&
      cards.some((c) => c.value === "6♣") &&
      cards.some((c) => c.value === "5♣"))
  )
    r = { hand: "Straight Flush Nine High", str: 6 };
  else if (
    (cards.some((c) => c.value === "8♥") &&
      cards.some((c) => c.value === "7♥") &&
      cards.some((c) => c.value === "6♥") &&
      cards.some((c) => c.value === "5♥") &&
      cards.some((c) => c.value === "4♥")) ||
    (cards.some((c) => c.value === "8♦") &&
      cards.some((c) => c.value === "7♦") &&
      cards.some((c) => c.value === "6♦") &&
      cards.some((c) => c.value === "5♦") &&
      cards.some((c) => c.value === "4♦")) ||
    (cards.some((c) => c.value === "8♠") &&
      cards.some((c) => c.value === "7♠") &&
      cards.some((c) => c.value === "6♠") &&
      cards.some((c) => c.value === "5♠") &&
      cards.some((c) => c.value === "4♠")) ||
    (cards.some((c) => c.value === "8♣") &&
      cards.some((c) => c.value === "7♣") &&
      cards.some((c) => c.value === "6♣") &&
      cards.some((c) => c.value === "5♣") &&
      cards.some((c) => c.value === "4♣"))
  )
    r = { hand: "Straight Flush Eight High", str: 7 };
  else if (
    (cards.some((c) => c.value === "7♥") &&
      cards.some((c) => c.value === "6♥") &&
      cards.some((c) => c.value === "5♥") &&
      cards.some((c) => c.value === "4♥") &&
      cards.some((c) => c.value === "3♥")) ||
    (cards.some((c) => c.value === "7♦") &&
      cards.some((c) => c.value === "6♦") &&
      cards.some((c) => c.value === "5♦") &&
      cards.some((c) => c.value === "4♦") &&
      cards.some((c) => c.value === "3♦")) ||
    (cards.some((c) => c.value === "7♠") &&
      cards.some((c) => c.value === "6♠") &&
      cards.some((c) => c.value === "5♠") &&
      cards.some((c) => c.value === "4♠") &&
      cards.some((c) => c.value === "3♠")) ||
    (cards.some((c) => c.value === "7♣") &&
      cards.some((c) => c.value === "6♣") &&
      cards.some((c) => c.value === "5♣") &&
      cards.some((c) => c.value === "4♣") &&
      cards.some((c) => c.value === "3♣"))
  )
    r = { hand: "Straight Flush Seven High", str: 8 };
  else if (
    (cards.some((c) => c.value === "6♥") &&
      cards.some((c) => c.value === "5♥") &&
      cards.some((c) => c.value === "4♥") &&
      cards.some((c) => c.value === "3♥") &&
      cards.some((c) => c.value === "2♥")) ||
    (cards.some((c) => c.value === "6♦") &&
      cards.some((c) => c.value === "5♦") &&
      cards.some((c) => c.value === "4♦") &&
      cards.some((c) => c.value === "3♦") &&
      cards.some((c) => c.value === "2♦")) ||
    (cards.some((c) => c.value === "6♠") &&
      cards.some((c) => c.value === "5♠") &&
      cards.some((c) => c.value === "4♠") &&
      cards.some((c) => c.value === "3♠") &&
      cards.some((c) => c.value === "2♠")) ||
    (cards.some((c) => c.value === "6♣") &&
      cards.some((c) => c.value === "5♣") &&
      cards.some((c) => c.value === "4♣") &&
      cards.some((c) => c.value === "3♣") &&
      cards.some((c) => c.value === "2♣"))
  )
    r = { hand: "Straight Flush Six High", str: 9 };
  else if (
    (cards.some((c) => c.value === "5♥") &&
      cards.some((c) => c.value === "4♥") &&
      cards.some((c) => c.value === "3♥") &&
      cards.some((c) => c.value === "2♥") &&
      cards.some((c) => c.value === "A♥")) ||
    (cards.some((c) => c.value === "5♦") &&
      cards.some((c) => c.value === "4♦") &&
      cards.some((c) => c.value === "3♦") &&
      cards.some((c) => c.value === "2♦") &&
      cards.some((c) => c.value === "A♦")) ||
    (cards.some((c) => c.value === "5♠") &&
      cards.some((c) => c.value === "4♠") &&
      cards.some((c) => c.value === "3♠") &&
      cards.some((c) => c.value === "2♠") &&
      cards.some((c) => c.value === "A♠")) ||
    (cards.some((c) => c.value === "5♣") &&
      cards.some((c) => c.value === "4♣") &&
      cards.some((c) => c.value === "3♣") &&
      cards.some((c) => c.value === "2♣") &&
      cards.some((c) => c.value === "A♣"))
  )
    r = { hand: "Straight Flush Five High", str: 10 };
  // FOUR OF A KIND
  // four aces, with kicker
  else if (cardData.ace >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four Aces, King Kicker", str: 11 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four Aces, Queen Kicker", str: 12 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four Aces, Jack Kicker", str: 13 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four Aces, 10 Kicker", str: 14 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four Aces, 9 Kicker", str: 15 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four Aces, 8 Kicker", str: 16 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four Aces, 7 Kicker", str: 17 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four Aces, 6 Kicker", str: 18 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four Aces, 5 Kicker", str: 19 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four Aces, 4 Kicker", str: 20 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four Aces, 3 Kicker", str: 21 };
  else if (cardData.ace >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four Aces, 2 Kicker", str: 22 };
  // four kings, with kicker
  else if (cardData.king >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four Kings, Ace Kicker", str: 23 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four Kings, Queen Kicker", str: 24 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four Kings, Jack Kicker", str: 25 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four Kings, 10 Kicker", str: 26 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four Kings, 9 Kicker", str: 27 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four Kings, 8 Kicker", str: 28 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four Kings, 7 Kicker", str: 29 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four Kings, 6 Kicker", str: 30 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four Kings, 5 Kicker", str: 31 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four Kings, 4 Kicker", str: 32 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four Kings, 3 Kicker", str: 33 };
  else if (cardData.king >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four Kings, 2 Kicker", str: 34 };
  // four queens, with kicker
  else if (cardData.queen >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four Queens, Ace Kicker", str: 35 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four Queens, King Kicker", str: 36 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four Queens, Jack Kicker", str: 37 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four Queens, 10 Kicker", str: 38 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four Queens, 9 Kicker", str: 39 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four Queens, 8 Kicker", str: 40 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four Queens, 7 Kicker", str: 41 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four Queens, 6 Kicker", str: 42 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four Queens, 5 Kicker", str: 43 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four Queens, 4 Kicker", str: 44 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four Queens, 3 Kicker", str: 45 };
  else if (cardData.queen >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four Queens, 2 Kicker", str: 46 };
  // four jacks, with kicker
  else if (cardData.jack >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four Jacks, Ace Kicker", str: 47 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four Jacks, King Kicker", str: 48 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four Jacks, Queen Kicker", str: 49 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four Jacks, 10 Kicker", str: 50 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four Jacks, 9 Kicker", str: 51 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four Jacks, 8 Kicker", str: 52 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four Jacks, 7 Kicker", str: 53 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four Jacks, 6 Kicker", str: 54 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four Jacks, 5 Kicker", str: 55 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four Jacks, 4 Kicker", str: 56 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four Jacks, 3 Kicker", str: 57 };
  else if (cardData.jack >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four Jacks, 2 Kicker", str: 58 };
  // four 10's, with kicker
  else if (cardData.ten >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 10's, Ace Kicker", str: 59 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 10's, King Kicker", str: 60 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 10's, Queen Kicker", str: 61 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 10's, Jack Kicker", str: 62 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 10's, 9 Kicker", str: 63 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 10's, 8 Kicker", str: 64 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 10's, 7 Kicker", str: 65 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 10's, 6 Kicker", str: 66 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 10's, 5 Kicker", str: 67 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 10's, 4 Kicker", str: 68 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 10's, 3 Kicker", str: 69 };
  else if (cardData.ten >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 10's, 2 Kicker", str: 70 };
  // four 9's, with kicker
  else if (cardData.nine >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 9's, Ace Kicker", str: 71 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 9's, King Kicker", str: 72 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 9's, Queen Kicker", str: 73 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 9's, Jack Kicker", str: 74 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 9's, 10 Kicker", str: 75 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 9's, 8 Kicker", str: 76 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 9's, 7 Kicker", str: 77 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 9's, 6 Kicker", str: 78 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 9's, 5 Kicker", str: 79 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 9's, 4 Kicker", str: 80 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 9's, 3 Kicker", str: 81 };
  else if (cardData.nine >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 9's, 2 Kicker", str: 82 };
  // four 8's, with kicker
  else if (cardData.eight >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 8's, Ace Kicker", str: 83 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 8's, King Kicker", str: 84 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 8's, Queen Kicker", str: 85 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 8's, Jack Kicker", str: 86 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 8's, 10 Kicker", str: 87 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 8's, 9 Kicker", str: 88 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 8's, 7 Kicker", str: 89 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 8's, 6 Kicker", str: 90 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 8's, 5 Kicker", str: 91 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 8's, 4 Kicker", str: 92 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 8's, 3 Kicker", str: 93 };
  else if (cardData.eight >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 8's, 2 Kicker", str: 94 };
  // four 7's, with kicker
  else if (cardData.seven >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 7's, Ace Kicker", str: 95 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 7's, King Kicker", str: 96 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 7's, Queen Kicker", str: 97 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 7's, Jack Kicker", str: 98 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 7's, 10 Kicker", str: 99 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 7's, 9 Kicker", str: 100 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 7's, 8 Kicker", str: 101 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 7's, 6 Kicker", str: 102 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 7's, 5 Kicker", str: 103 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 7's, 4 Kicker", str: 104 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 7's, 3 Kicker", str: 105 };
  else if (cardData.seven >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 7's, 2 Kicker", str: 106 };
  // four 6's, with kicker
  else if (cardData.six >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 6's, Ace Kicker", str: 107 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 6's, King Kicker", str: 108 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 6's, Queen Kicker", str: 109 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 6's, Jack Kicker", str: 110 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 6's, 10 Kicker", str: 111 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 6's, 9 Kicker", str: 112 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 6's, 8 Kicker", str: 113 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 6's, 7 Kicker", str: 114 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 6's, 5 Kicker", str: 115 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 6's, 4 Kicker", str: 116 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 6's, 3 Kicker", str: 117 };
  else if (cardData.six >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 6's, 2 Kicker", str: 118 };
  // four 5's, with kicker
  else if (cardData.five >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 5's, Ace Kicker", str: 119 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 5's, King Kicker", str: 120 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 5's, Queen Kicker", str: 121 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 5's, Jack Kicker", str: 122 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 5's, 10 Kicker", str: 123 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 5's, 9 Kicker", str: 124 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 5's, 8 Kicker", str: 125 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 5's, 7 Kicker", str: 126 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 5's, 6 Kicker", str: 127 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 5's, 4 Kicker", str: 128 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 5's, 3 Kicker", str: 129 };
  else if (cardData.five >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 5's, 2 Kicker", str: 130 };
  // four 4's, with kicker
  else if (cardData.four >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 4's, Ace Kicker", str: 131 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 4's, King Kicker", str: 132 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 4's, Queen Kicker", str: 133 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 4's, Jack Kicker", str: 134 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 4's, 10 Kicker", str: 135 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 4's, 9 Kicker", str: 136 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 4's, 8 Kicker", str: 137 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 4's, 7 Kicker", str: 138 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 4's, 6 Kicker", str: 139 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 4's, 5 Kicker", str: 140 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 4's, 3 Kicker", str: 141 };
  else if (cardData.four >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 4's, 2 Kicker", str: 142 };
  // four 3's, with kicker
  else if (cardData.three >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 3's, Ace Kicker", str: 143 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 3's, King Kicker", str: 144 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 3's, Queen Kicker", str: 145 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 3's, Jack Kicker", str: 146 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 3's, 10 Kicker", str: 147 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 3's, 9 Kicker", str: 148 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 3's, 8 Kicker", str: 149 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 3's, 7 Kicker", str: 150 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 3's, 6 Kicker", str: 151 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 3's, 5 Kicker", str: 152 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 3's, 4 Kicker", str: 153 };
  else if (cardData.three >= 4 && topCards.some((i) => i === 2))
    r = { hand: "Four 3's, 2 Kicker", str: 154 };
  // four 2's, with kicker
  else if (cardData.two >= 4 && topCards.some((i) => i === 14))
    r = { hand: "Four 2's, Ace Kicker", str: 155 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 13))
    r = { hand: "Four 2's, King Kicker", str: 156 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 12))
    r = { hand: "Four 2's, Queen Kicker", str: 157 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 11))
    r = { hand: "Four 2's, Jack Kicker", str: 158 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 10))
    r = { hand: "Four 2's, 10 Kicker", str: 159 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 9))
    r = { hand: "Four 2's, 9 Kicker", str: 160 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 8))
    r = { hand: "Four 2's, 8 Kicker", str: 161 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 7))
    r = { hand: "Four 2's, 7 Kicker", str: 162 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 6))
    r = { hand: "Four 2's, 6 Kicker", str: 163 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 5))
    r = { hand: "Four 2's, 5 Kicker", str: 164 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 4))
    r = { hand: "Four 2's, 4 Kicker", str: 165 };
  else if (cardData.two >= 4 && topCards.some((i) => i === 3))
    r = { hand: "Four 2's, 3 Kicker", str: 166 };
  // FULL HOUSE
  else if (cardData.ace >= 3 && cardData.king >= 2)
    r = { hand: "Full House Aces over Kings", str: 167 };
  else if (cardData.ace >= 3 && cardData.queen >= 2)
    r = { hand: "Full House Aces over Queens", str: 168 };
  else if (cardData.ace >= 3 && cardData.jack >= 2)
    r = { hand: "Full House Aces over Jacks", str: 169 };
  else if (cardData.ace >= 3 && cardData.ten >= 2)
    r = { hand: "Full House Aces over 10's", str: 170 };
  else if (cardData.ace >= 3 && cardData.nine >= 2)
    r = { hand: "Full House Aces over 9's", str: 171 };
  else if (cardData.ace >= 3 && cardData.eight >= 2)
    r = { hand: "Full House Aces over 8's", str: 172 };
  else if (cardData.ace >= 3 && cardData.seven >= 2)
    r = { hand: "Full House Aces over 7's", str: 173 };
  else if (cardData.ace >= 3 && cardData.six >= 2)
    r = { hand: "Full House Aces over 6's", str: 174 };
  else if (cardData.ace >= 3 && cardData.five >= 2)
    r = { hand: "Full House Aces over 5's", str: 175 };
  else if (cardData.ace >= 3 && cardData.four >= 2)
    r = { hand: "Full House Aces over 4's", str: 176 };
  else if (cardData.ace >= 3 && cardData.three >= 2)
    r = { hand: "Full House Aces over 3's", str: 177 };
  else if (cardData.ace >= 3 && cardData.two >= 2)
    r = { hand: "Full House Aces over 2's", str: 178 };
  else if (cardData.king >= 3 && cardData.queen >= 2)
    r = { hand: "Full House Kings over Queens", str: 179 };
  else if (cardData.king >= 3 && cardData.jack >= 2)
    r = { hand: "Full House Kings over Jacks", str: 180 };
  else if (cardData.king >= 3 && cardData.ten >= 2)
    r = { hand: "Full House Kings over 10's", str: 181 };
  else if (cardData.king >= 3 && cardData.nine >= 2)
    r = { hand: "Full House Kings over 9's", str: 182 };
  else if (cardData.king >= 3 && cardData.eight >= 2)
    r = { hand: "Full House Kings over 8's", str: 183 };
  else if (cardData.king >= 3 && cardData.seven >= 2)
    r = { hand: "Full House Kings over 7's", str: 184 };
  else if (cardData.king >= 3 && cardData.six >= 2) r = { hand: "Kings over 6's", str: 185 };
  else if (cardData.king >= 3 && cardData.five >= 2)
    r = { hand: "Full House Kings over 5's", str: 186 };
  else if (cardData.king >= 3 && cardData.four >= 2)
    r = { hand: "Full House Kings over 4's", str: 187 };
  else if (cardData.king >= 3 && cardData.three >= 2)
    r = { hand: "Full House Kings over 3's", str: 188 };
  else if (cardData.king >= 3 && cardData.two >= 2) r = { hand: "Kings over 2's", str: 189 };
  else if (cardData.queen >= 3 && cardData.jack >= 2)
    r = { hand: "Full House Queens over Jacks", str: 190 };
  else if (cardData.queen >= 3 && cardData.ten >= 2)
    r = { hand: "Full House Queens over 10's", str: 191 };
  else if (cardData.queen >= 3 && cardData.nine >= 2)
    r = { hand: "Full House Queens over 9's", str: 192 };
  else if (cardData.queen >= 3 && cardData.eight >= 2)
    r = { hand: "Full House Queens over 8's", str: 193 };
  else if (cardData.queen >= 3 && cardData.seven >= 2)
    r = { hand: "Full House Queens over 7's", str: 194 };
  else if (cardData.queen >= 3 && cardData.six >= 2)
    r = { hand: "Full House Queens over 6's", str: 195 };
  else if (cardData.queen >= 3 && cardData.five >= 2)
    r = { hand: "Full House Queens over 5's", str: 196 };
  else if (cardData.queen >= 3 && cardData.four >= 2)
    r = { hand: "Full House Queens over 4's", str: 197 };
  else if (cardData.queen >= 3 && cardData.three >= 2)
    r = { hand: "Full House Queens over 3's", str: 198 };
  else if (cardData.queen >= 3 && cardData.two >= 2)
    r = { hand: "Full House Queens over 2's", str: 199 };
  else if (cardData.jack >= 3 && cardData.ten >= 2)
    r = { hand: "Full House Jacks over 10's", str: 200 };
  else if (cardData.jack >= 3 && cardData.nine >= 2)
    r = { hand: "Full House Jacks over 9's", str: 201 };
  else if (cardData.jack >= 3 && cardData.eight >= 2)
    r = { hand: "Full House Jacks over 8's", str: 202 };
  else if (cardData.jack >= 3 && cardData.seven >= 2)
    r = { hand: "Full House Jacks over 7's", str: 203 };
  else if (cardData.jack >= 3 && cardData.six >= 2) r = { hand: "Jacks over 6's", str: 204 };
  else if (cardData.jack >= 3 && cardData.five >= 2)
    r = { hand: "Full House Jacks over 5's", str: 205 };
  else if (cardData.jack >= 3 && cardData.four >= 2)
    r = { hand: "Full House Jacks over 4's", str: 206 };
  else if (cardData.jack >= 3 && cardData.three >= 2)
    r = { hand: "Full House Jacks over 3's", str: 207 };
  else if (cardData.jack >= 3 && cardData.two >= 2)
    r = { hand: "Full House Jacks over 2's", str: 208 };
  else if (cardData.ten >= 3 && cardData.nine >= 2)
    r = { hand: "Full House 10's over 9's", str: 209 };
  else if (cardData.ten >= 3 && cardData.eight >= 2)
    r = { hand: "Full House 10's over 8's", str: 210 };
  else if (cardData.ten >= 3 && cardData.seven >= 2)
    r = { hand: "Full House 10's over 7's", str: 211 };
  else if (cardData.ten >= 3 && cardData.six >= 2)
    r = { hand: "Full House 10's over 6's", str: 212 };
  else if (cardData.ten >= 3 && cardData.five >= 2)
    r = { hand: "Full House 10's over 5's", str: 213 };
  else if (cardData.ten >= 3 && cardData.four >= 2)
    r = { hand: "Full House 10's over 4's", str: 214 };
  else if (cardData.ten >= 3 && cardData.three >= 2)
    r = { hand: "Full House 10's over 3's", str: 215 };
  else if (cardData.ten >= 3 && cardData.two >= 2)
    r = { hand: "Full House 10's over 2's", str: 216 };
  else if (cardData.nine >= 3 && cardData.eight >= 2)
    r = { hand: "Full House 9's over 8's", str: 217 };
  else if (cardData.nine >= 3 && cardData.seven >= 2)
    r = { hand: "Full House 9's over 7's", str: 218 };
  else if (cardData.nine >= 3 && cardData.six >= 2)
    r = { hand: "Full House 9's over 6's", str: 219 };
  else if (cardData.nine >= 3 && cardData.five >= 2)
    r = { hand: "Full House 9's over 5's", str: 220 };
  else if (cardData.nine >= 3 && cardData.four >= 2)
    r = { hand: "Full House 9's over 4's", str: 221 };
  else if (cardData.nine >= 3 && cardData.three >= 2)
    r = { hand: "Full House 9's over 3's", str: 222 };
  else if (cardData.nine >= 3 && cardData.two >= 2)
    r = { hand: "Full House 9's over 2's", str: 223 };
  else if (cardData.eight >= 3 && cardData.seven >= 2)
    r = { hand: "Full House 8's over 7's", str: 224 };
  else if (cardData.eight >= 3 && cardData.six >= 2)
    r = { hand: "Full House 8's over 6's", str: 225 };
  else if (cardData.eight >= 3 && cardData.five >= 2)
    r = { hand: "Full House 8's over 5's", str: 226 };
  else if (cardData.eight >= 3 && cardData.four >= 2)
    r = { hand: "Full House 8's over 4's", str: 227 };
  else if (cardData.eight >= 3 && cardData.three >= 2)
    r = { hand: "Full House 8's over 3's", str: 228 };
  else if (cardData.eight >= 3 && cardData.two >= 2)
    r = { hand: "Full House 8's over 2's", str: 229 };
  else if (cardData.seven >= 3 && cardData.six >= 2)
    r = { hand: "Full House 7's over 6's", str: 230 };
  else if (cardData.seven >= 3 && cardData.five >= 2)
    r = { hand: "Full House 7's over 5's", str: 231 };
  else if (cardData.seven >= 3 && cardData.four >= 2)
    r = { hand: "Full House 7's over 4's", str: 232 };
  else if (cardData.seven >= 3 && cardData.three >= 2)
    r = { hand: "Full House 7's over 3's", str: 233 };
  else if (cardData.seven >= 3 && cardData.two >= 2)
    r = { hand: "Full House 7's over 2's", str: 234 };
  else if (cardData.six >= 3 && cardData.five >= 2)
    r = { hand: "Full House 6's over 5's", str: 235 };
  else if (cardData.six >= 3 && cardData.four >= 2)
    r = { hand: "Full House 6's over 4's", str: 236 };
  else if (cardData.six >= 3 && cardData.three >= 2)
    r = { hand: "Full House 6's over 3's", str: 237 };
  else if (cardData.six >= 3 && cardData.two >= 2)
    r = { hand: "Full House 6's over 2's", str: 238 };
  else if (cardData.five >= 3 && cardData.four >= 2)
    r = { hand: "Full House 5's over 4's", str: 239 };
  else if (cardData.five >= 3 && cardData.three >= 2)
    r = { hand: "Full House 5's over 3's", str: 240 };
  else if (cardData.five >= 3 && cardData.two >= 2)
    r = { hand: "Full House 5's over 2's", str: 241 };
  else if (cardData.four >= 3 && cardData.three >= 2)
    r = { hand: "Full House 4's over 3's", str: 242 };
  else if (cardData.four >= 3 && cardData.two >= 2)
    r = { hand: "Full House 4's over 2's", str: 243 };
  else if (cardData.three >= 3 && cardData.two >= 2)
    r = { hand: "Full House 3's over 2's", str: 244 };
  // FLUSH
  else if (
    (hearts.length >= 5 && hearts[0].value === 14) ||
    (diamonds.length >= 5 && diamonds[0].value === 14) ||
    (spades.length >= 5 && spades[0].value === 14) ||
    (clubs.length >= 5 && clubs[0].value === 14)
  )
    r = { hand: "Flush Ace High", str: 245 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 13) ||
    (diamonds.length >= 5 && diamonds[0].value === 13) ||
    (spades.length >= 5 && spades[0].value === 13) ||
    (clubs.length >= 5 && clubs[0].value === 13)
  )
    r = { hand: "Flush King High", str: 246 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 12) ||
    (diamonds.length >= 5 && diamonds[0].value === 12) ||
    (spades.length >= 5 && spades[0].value === 12) ||
    (clubs.length >= 5 && clubs[0].value === 12)
  )
    r = { hand: "Flush Queen High", str: 247 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 11) ||
    (diamonds.length >= 5 && diamonds[0].value === 11) ||
    (spades.length >= 5 && spades[0].value === 11) ||
    (clubs.length >= 5 && clubs[0].value === 11)
  )
    r = { hand: "Flush Jack High", str: 248 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 10) ||
    (diamonds.length >= 5 && diamonds[0].value === 10) ||
    (spades.length >= 5 && spades[0].value === 10) ||
    (clubs.length >= 5 && clubs[0].value === 10)
  )
    r = { hand: "Flush 10 High", str: 249 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 9) ||
    (diamonds.length >= 5 && diamonds[0].value === 9) ||
    (spades.length >= 5 && spades[0].value === 9) ||
    (clubs.length >= 5 && clubs[0].value === 9)
  )
    r = { hand: "Flush 9 High", str: 250 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 8) ||
    (diamonds.length >= 5 && diamonds[0].value === 8) ||
    (spades.length >= 5 && spades[0].value === 8) ||
    (clubs.length >= 5 && clubs[0].value === 8)
  )
    r = { hand: "Flush 8 High", str: 251 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 7) ||
    (diamonds.length >= 5 && diamonds[0].value === 7) ||
    (spades.length >= 5 && spades[0].value === 7) ||
    (clubs.length >= 5 && clubs[0].value === 7)
  )
    r = { hand: "Flush 7 High", str: 252 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 6) ||
    (diamonds.length >= 5 && diamonds[0].value === 6) ||
    (spades.length >= 5 && spades[0].value === 6) ||
    (clubs.length >= 5 && clubs[0].value === 6)
  )
    r = { hand: "Flush 6 High", str: 253 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 5) ||
    (diamonds.length >= 5 && diamonds[0].value === 5) ||
    (spades.length >= 5 && spades[0].value === 5) ||
    (clubs.length >= 5 && clubs[0].value === 5)
  )
    r = { hand: "Flush 5 High", str: 254 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 4) ||
    (diamonds.length >= 5 && diamonds[0].value === 4) ||
    (spades.length >= 5 && spades[0].value === 4) ||
    (clubs.length >= 5 && clubs[0].value === 4)
  )
    r = { hand: "Flush 4 High", str: 255 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 3) ||
    (diamonds.length >= 5 && diamonds[0].value === 3) ||
    (spades.length >= 5 && spades[0].value === 3) ||
    (clubs.length >= 5 && clubs[0].value === 3)
  )
    r = { hand: "Flush 3 High", str: 256 };
  else if (
    (hearts.length >= 5 && hearts[0].value === 2) ||
    (diamonds.length >= 5 && diamonds[0].value === 2) ||
    (spades.length >= 5 && spades[0].value === 2) ||
    (clubs.length >= 5 && clubs[0].value === 2)
  )
    r = { hand: "Flush 2 High", str: 257 };
  // STRAIGHT
  else if (
    cardData.ace > 0 &&
    cardData.king > 0 &&
    cardData.queen > 0 &&
    cardData.jack > 0 &&
    cardData.ten > 0
  )
    r = { hand: "Straight Ace High", str: 258 };
  else if (
    cardData.king > 0 &&
    cardData.queen > 0 &&
    cardData.jack > 0 &&
    cardData.ten > 0 &&
    cardData.nine > 0
  )
    r = { hand: "Straight King High", str: 259 };
  else if (
    cardData.queen > 0 &&
    cardData.jack > 0 &&
    cardData.ten > 0 &&
    cardData.nine > 0 &&
    cardData.eight > 0
  )
    r = { hand: "Straight Queen High", str: 260 };
  else if (
    cardData.jack > 0 &&
    cardData.ten > 0 &&
    cardData.nine > 0 &&
    cardData.eight > 0 &&
    cardData.seven > 0
  )
    r = { hand: "Straight Jack High", str: 261 };
  else if (
    cardData.ten > 0 &&
    cardData.nine > 0 &&
    cardData.eight > 0 &&
    cardData.seven > 0 &&
    cardData.six > 0
  )
    r = { hand: "Straight 10 High", str: 262 };
  else if (
    cardData.nine > 0 &&
    cardData.eight > 0 &&
    cardData.seven > 0 &&
    cardData.six > 0 &&
    cardData.five > 0
  )
    r = { hand: "Straight 9 High", str: 263 };
  else if (
    cardData.eight > 0 &&
    cardData.seven > 0 &&
    cardData.six > 0 &&
    cardData.five > 0 &&
    cardData.four > 0
  )
    r = { hand: "Straight 8 High", str: 264 };
  else if (
    cardData.seven > 0 &&
    cardData.six > 0 &&
    cardData.five > 0 &&
    cardData.four > 0 &&
    cardData.three > 0
  )
    r = { hand: "Straight 7 High", str: 265 };
  else if (
    cardData.six > 0 &&
    cardData.five > 0 &&
    cardData.four > 0 &&
    cardData.three > 0 &&
    cardData.two > 0
  )
    r = { hand: "Straight 6 High", str: 266 };
  else if (
    cardData.five > 0 &&
    cardData.four > 0 &&
    cardData.three > 0 &&
    cardData.two > 0 &&
    cardData.ace > 0
  )
    r = { hand: "Straight 5 High", str: 267 };
  // THREE OF A KIND
  // three aces
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three Aces, King & Queen Kickers", str: 268 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three Aces, King & Jack Kickers", str: 269 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three Aces, King & 10 Kickers", str: 270 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three Aces, King & 9 Kickers", str: 271 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three Aces, King & 8 Kickers", str: 272 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three Aces, King & 7 Kickers", str: 273 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three Aces, King & 6 Kickers", str: 274 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, King & 5 Kickers", str: 275 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, King & 4 Kickers", str: 276 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, King & 3 Kickers", str: 277 };
  else if (cardData.ace >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, King & 2 Kickers", str: 278 };
  //
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three Aces, Queen & Jack Kickers", str: 279 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three Aces, Queen & 10 Kickers", str: 280 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three Aces, Queen & 9 Kickers", str: 281 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three Aces, Queen & 8 Kickers", str: 282 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three Aces, Queen & 7 Kickers", str: 283 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three Aces, Queen & 6 Kickers", str: 284 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, Queen & 5 Kickers", str: 285 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, Queen & 4 Kickers", str: 286 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, Queen & 3 Kickers", str: 287 };
  else if (cardData.ace >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, Queen & 2 Kickers", str: 288 };
  //
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three Aces, Jack & 10 Kickers", str: 289 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three Aces, Jack & 9 Kickers", str: 290 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three Aces, Jack & 8 Kickers", str: 291 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three Aces, Jack & 7 Kickers", str: 292 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three Aces, Jack & 6 Kickers", str: 293 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, Jack & 5 Kickers", str: 294 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, Jack & 4 Kickers", str: 295 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, Jack & 3 Kickers", str: 296 };
  else if (cardData.ace >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, Jack & 2 Kickers", str: 297 };
  //
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three Aces, 10 & 9 Kickers", str: 298 };
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three Aces, 10 & 8 Kickers", str: 299 };
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three Aces, 10 & 7 Kickers", str: 300 };
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three Aces, 10 & 6 Kickers", str: 301 };
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, 10 & 5 Kickers", str: 302 };
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, 10 & 4 Kickers", str: 303 };
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, 10 & 3 Kickers", str: 304 };
  else if (cardData.ace >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 10 & 2 Kickers", str: 305 };
  //
  else if (cardData.ace >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three Aces, 9 & 8 Kickers", str: 306 };
  else if (cardData.ace >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three Aces, 9 & 7 Kickers", str: 307 };
  else if (cardData.ace >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three Aces, 9 & 6 Kickers", str: 308 };
  else if (cardData.ace >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, 9 & 5 Kickers", str: 309 };
  else if (cardData.ace >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, 9 & 4 Kickers", str: 310 };
  else if (cardData.ace >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, 9 & 3 Kickers", str: 311 };
  else if (cardData.ace >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 9 & 2 Kickers", str: 312 };
  //
  else if (cardData.ace >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three Aces, 8 & 7 Kickers", str: 313 };
  else if (cardData.ace >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three Aces, 8 & 6 Kickers", str: 314 };
  else if (cardData.ace >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, 8 & 5 Kickers", str: 315 };
  else if (cardData.ace >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, 8 & 4 Kickers", str: 316 };
  else if (cardData.ace >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, 8 & 3 Kickers", str: 317 };
  else if (cardData.ace >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 8 & 2 Kickers", str: 318 };
  //
  else if (cardData.ace >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three Aces, 7 & 6 Kickers", str: 319 };
  else if (cardData.ace >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, 7 & 5 Kickers", str: 320 };
  else if (cardData.ace >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, 7 & 4 Kickers", str: 321 };
  else if (cardData.ace >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, 7 & 3 Kickers", str: 322 };
  else if (cardData.ace >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 7 & 2 Kickers", str: 323 };
  //
  else if (cardData.ace >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three Aces, 6 & 5 Kickers", str: 324 };
  else if (cardData.ace >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, 6 & 4 Kickers", str: 325 };
  else if (cardData.ace >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, 6 & 3 Kickers", str: 326 };
  else if (cardData.ace >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 6 & 2 Kickers", str: 327 };
  //
  else if (cardData.ace >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three Aces, 5 & 4 Kickers", str: 328 };
  else if (cardData.ace >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, 5 & 3 Kickers", str: 329 };
  else if (cardData.ace >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 5 & 2 Kickers", str: 330 };
  //
  else if (cardData.ace >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three Aces, 4 & 3 Kickers", str: 331 };
  else if (cardData.ace >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 4 & 2 Kickers", str: 332 };
  //
  else if (cardData.ace >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three Aces, 3 & 2 Kickers", str: 333 };
  // three kings
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three Kings, Ace & Queen Kickers", str: 334 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three Kings, Ace & Jack Kickers", str: 335 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three Kings, Ace & 10 Kickers", str: 336 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three Kings, Ace & 9 Kickers", str: 337 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three Kings, Ace & 8 Kickers", str: 338 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three Kings, Ace & 7 Kickers", str: 339 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three Kings, Ace & 6 Kickers", str: 340 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, Ace & 5 Kickers", str: 341 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, Ace & 4 Kickers", str: 342 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, Ace & 3 Kickers", str: 343 };
  else if (cardData.king >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, Ace & 2 Kickers", str: 344 };
  //
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three Kings, Queen & Jack Kickers", str: 345 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three Kings, Queen & 10 Kickers", str: 346 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three Kings, Queen & 9 Kickers", str: 347 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three Kings, Queen & 8 Kickers", str: 348 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three Kings, Queen & 7 Kickers", str: 349 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three Kings, Queen & 6 Kickers", str: 350 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, Queen & 5 Kickers", str: 351 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, Queen & 4 Kickers", str: 352 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, Queen & 3 Kickers", str: 353 };
  else if (cardData.king >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, Queen & 2 Kickers", str: 354 };
  //
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three Kings, Jack & 10 Kickers", str: 355 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three Kings, Jack & 9 Kickers", str: 356 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three Kings, Jack & 8 Kickers", str: 357 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three Kings, Jack & 7 Kickers", str: 358 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three Kings, Jack & 6 Kickers", str: 359 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, Jack & 5 Kickers", str: 360 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, Jack & 4 Kickers", str: 361 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, Jack & 3 Kickers", str: 362 };
  else if (cardData.king >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, Jack & 2 Kickers", str: 363 };
  //
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three Kings, 10 & 9 Kickers", str: 364 };
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three Kings, 10 & 8 Kickers", str: 365 };
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three Kings, 10 & 7 Kickers", str: 366 };
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three Kings, 10 & 6 Kickers", str: 367 };
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, 10 & 5 Kickers", str: 368 };
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, 10 & 4 Kickers", str: 369 };
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, 10 & 3 Kickers", str: 370 };
  else if (cardData.king >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 10 & 2 Kickers", str: 371 };
  //
  else if (cardData.king >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three Kings, 9 & 8 Kickers", str: 372 };
  else if (cardData.king >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three Kings, 9 & 7 Kickers", str: 373 };
  else if (cardData.king >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three Kings, 9 & 6 Kickers", str: 374 };
  else if (cardData.king >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, 9 & 5 Kickers", str: 375 };
  else if (cardData.king >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, 9 & 4 Kickers", str: 376 };
  else if (cardData.king >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, 9 & 3 Kickers", str: 377 };
  else if (cardData.king >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 9 & 2 Kickers", str: 378 };
  //
  else if (cardData.king >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three Kings, 8 & 7 Kickers", str: 379 };
  else if (cardData.king >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three Kings, 8 & 6 Kickers", str: 380 };
  else if (cardData.king >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, 8 & 5 Kickers", str: 381 };
  else if (cardData.king >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, 8 & 4 Kickers", str: 382 };
  else if (cardData.king >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, 8 & 3 Kickers", str: 383 };
  else if (cardData.king >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 8 & 2 Kickers", str: 384 };
  //
  else if (cardData.king >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three Kings, 7 & 6 Kickers", str: 385 };
  else if (cardData.king >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, 7 & 5 Kickers", str: 386 };
  else if (cardData.king >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, 7 & 4 Kickers", str: 387 };
  else if (cardData.king >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, 7 & 3 Kickers", str: 388 };
  else if (cardData.king >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 7 & 2 Kickers", str: 389 };
  //
  else if (cardData.king >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three Kings, 6 & 5 Kickers", str: 390 };
  else if (cardData.king >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, 6 & 4 Kickers", str: 391 };
  else if (cardData.king >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, 6 & 3 Kickers", str: 392 };
  else if (cardData.king >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 6 & 2 Kickers", str: 393 };
  //
  else if (cardData.king >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three Kings, 5 & 4 Kickers", str: 394 };
  else if (cardData.king >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, 5 & 3 Kickers", str: 395 };
  else if (cardData.king >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 5 & 2 Kickers", str: 396 };
  //
  else if (cardData.king >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three Kings, 4 & 3 Kickers", str: 397 };
  else if (cardData.king >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 4 & 2 Kickers", str: 398 };
  //
  else if (cardData.king >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three Kings, 3 & 2 Kickers", str: 399 };
  // three queens
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three Queens, Ace & King Kickers", str: 400 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three Queens, Ace & Jack Kickers", str: 401 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three Queens, Ace & 10 Kickers", str: 402 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three Queens, Ace & 9 Kickers", str: 403 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three Queens, Ace & 8 Kickers", str: 404 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three Queens, Ace & 7 Kickers", str: 405 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three Queens, Ace & 6 Kickers", str: 406 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, Ace & 5 Kickers", str: 407 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, Ace & 4 Kickers", str: 408 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, Ace & 3 Kickers", str: 409 };
  else if (cardData.queen >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, Ace & 2 Kickers", str: 410 };
  //
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three Queens, King & Jack Kickers", str: 411 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three Queens, King & 10 Kickers", str: 412 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three Queens, King & 9 Kickers", str: 413 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three Queens, King & 8 Kickers", str: 414 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three Queens, King & 7 Kickers", str: 415 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three Queens, King & 6 Kickers", str: 416 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, King & 5 Kickers", str: 417 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, King & 4 Kickers", str: 418 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, King & 3 Kickers", str: 419 };
  else if (cardData.queen >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, King & 2 Kickers", str: 420 };
  //
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three Queens, Jack & 10 Kickers", str: 421 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three Queens, Jack & 9 Kickers", str: 422 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three Queens, Jack & 8 Kickers", str: 423 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three Queens, Jack & 7 Kickers", str: 424 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three Queens, Jack & 6 Kickers", str: 425 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, Jack & 5 Kickers", str: 426 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, Jack & 4 Kickers", str: 427 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, Jack & 3 Kickers", str: 428 };
  else if (cardData.queen >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, Jack & 2 Kickers", str: 429 };
  //
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three Queens, 10 & 9 Kickers", str: 430 };
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three Queens, 10 & 8 Kickers", str: 431 };
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three Queens, 10 & 7 Kickers", str: 432 };
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three Queens, 10 & 6 Kickers", str: 433 };
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, 10 & 5 Kickers", str: 434 };
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, 10 & 4 Kickers", str: 435 };
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, 10 & 3 Kickers", str: 436 };
  else if (cardData.queen >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 10 & 2 Kickers", str: 437 };
  //
  else if (cardData.queen >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three Queens, 9 & 8 Kickers", str: 438 };
  else if (cardData.queen >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three Queens, 9 & 7 Kickers", str: 439 };
  else if (cardData.queen >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three Queens, 9 & 6 Kickers", str: 440 };
  else if (cardData.queen >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, 9 & 5 Kickers", str: 441 };
  else if (cardData.queen >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, 9 & 4 Kickers", str: 442 };
  else if (cardData.queen >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, 9 & 3 Kickers", str: 443 };
  else if (cardData.queen >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 9 & 2 Kickers", str: 444 };
  //
  else if (cardData.queen >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three Queens, 8 & 7 Kickers", str: 445 };
  else if (cardData.queen >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three Queens, 8 & 6 Kickers", str: 446 };
  else if (cardData.queen >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, 8 & 5 Kickers", str: 447 };
  else if (cardData.queen >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, 8 & 4 Kickers", str: 448 };
  else if (cardData.queen >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, 8 & 3 Kickers", str: 449 };
  else if (cardData.queen >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 8 & 2 Kickers", str: 450 };
  //
  else if (cardData.queen >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three Queens, 7 & 6 Kickers", str: 451 };
  else if (cardData.queen >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, 7 & 5 Kickers", str: 452 };
  else if (cardData.queen >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, 7 & 4 Kickers", str: 453 };
  else if (cardData.queen >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, 7 & 3 Kickers", str: 454 };
  else if (cardData.queen >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 7 & 2 Kickers", str: 455 };
  //
  else if (cardData.queen >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three Queens, 6 & 5 Kickers", str: 456 };
  else if (cardData.queen >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, 6 & 4 Kickers", str: 457 };
  else if (cardData.queen >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, 6 & 3 Kickers", str: 458 };
  else if (cardData.queen >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 6 & 2 Kickers", str: 459 };
  //
  else if (cardData.queen >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three Queens, 5 & 4 Kickers", str: 460 };
  else if (cardData.queen >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, 5 & 3 Kickers", str: 461 };
  else if (cardData.queen >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 5 & 2 Kickers", str: 462 };
  //
  else if (cardData.queen >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three Queens, 4 & 3 Kickers", str: 463 };
  else if (cardData.queen >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 4 & 2 Kickers", str: 464 };
  //
  else if (cardData.queen >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three Queens, 3 & 2 Kickers", str: 465 };
  // three jacks
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three Jacks, Ace & King Kickers", str: 466 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three Jacks, Ace & Queen Kickers", str: 467 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three Jacks, Ace & 10 Kickers", str: 468 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three Jacks, Ace & 9 Kickers", str: 469 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three Jacks, Ace & 8 Kickers", str: 470 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three Jacks, Ace & 7 Kickers", str: 471 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three Jacks, Ace & 6 Kickers", str: 472 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, Ace & 5 Kickers", str: 473 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, Ace & 4 Kickers", str: 474 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, Ace & 3 Kickers", str: 475 };
  else if (cardData.jack >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, Ace & 2 Kickers", str: 476 };
  //
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three Jacks, King & Queen Kickers", str: 477 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three Jacks, King & 10 Kickers", str: 478 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three Jacks, King & 9 Kickers", str: 479 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three Jacks, King & 8 Kickers", str: 480 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three Jacks, King & 7 Kickers", str: 481 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three Jacks, King & 6 Kickers", str: 482 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, King & 5 Kickers", str: 483 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, King & 4 Kickers", str: 484 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, King & 3 Kickers", str: 485 };
  else if (cardData.jack >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, King & 2 Kickers", str: 486 };
  //
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three Jacks, Queen & 10 Kickers", str: 487 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three Jacks, Queen & 9 Kickers", str: 488 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three Jacks, Queen & 8 Kickers", str: 489 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three Jacks, Queen & 7 Kickers", str: 490 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three Jacks, Queen & 6 Kickers", str: 491 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, Queen & 5 Kickers", str: 492 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, Queen & 4 Kickers", str: 493 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, Queen & 3 Kickers", str: 494 };
  else if (cardData.jack >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, Queen & 2 Kickers", str: 495 };
  //
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three Jacks, 10 & 9 Kickers", str: 496 };
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three Jacks, 10 & 8 Kickers", str: 497 };
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three Jacks, 10 & 7 Kickers", str: 498 };
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three Jacks, 10 & 6 Kickers", str: 499 };
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, 10 & 5 Kickers", str: 500 };
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, 10 & 4 Kickers", str: 501 };
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, 10 & 3 Kickers", str: 502 };
  else if (cardData.jack >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 10 & 2 Kickers", str: 503 };
  //
  else if (cardData.jack >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three Jacks, 9 & 8 Kickers", str: 504 };
  else if (cardData.jack >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three Jacks, 9 & 7 Kickers", str: 505 };
  else if (cardData.jack >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three Jacks, 9 & 6 Kickers", str: 506 };
  else if (cardData.jack >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, 9 & 5 Kickers", str: 507 };
  else if (cardData.jack >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, 9 & 4 Kickers", str: 508 };
  else if (cardData.jack >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, 9 & 3 Kickers", str: 509 };
  else if (cardData.jack >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 9 & 2 Kickers", str: 510 };
  //
  else if (cardData.jack >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three Jacks, 8 & 7 Kickers", str: 511 };
  else if (cardData.jack >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three Jacks, 8 & 6 Kickers", str: 512 };
  else if (cardData.jack >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, 8 & 5 Kickers", str: 513 };
  else if (cardData.jack >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, 8 & 4 Kickers", str: 514 };
  else if (cardData.jack >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, 8 & 3 Kickers", str: 515 };
  else if (cardData.jack >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 8 & 2 Kickers", str: 516 };
  //
  else if (cardData.jack >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three Jacks, 7 & 6 Kickers", str: 517 };
  else if (cardData.jack >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, 7 & 5 Kickers", str: 518 };
  else if (cardData.jack >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, 7 & 4 Kickers", str: 519 };
  else if (cardData.jack >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, 7 & 3 Kickers", str: 520 };
  else if (cardData.jack >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 7 & 2 Kickers", str: 521 };
  //
  else if (cardData.jack >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three Jacks, 6 & 5 Kickers", str: 522 };
  else if (cardData.jack >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, 6 & 4 Kickers", str: 523 };
  else if (cardData.jack >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, 6 & 3 Kickers", str: 524 };
  else if (cardData.jack >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 6 & 2 Kickers", str: 525 };
  //
  else if (cardData.jack >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three Jacks, 5 & 4 Kickers", str: 526 };
  else if (cardData.jack >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, 5 & 3 Kickers", str: 527 };
  else if (cardData.jack >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 5 & 2 Kickers", str: 528 };
  //
  else if (cardData.jack >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three Jacks, 4 & 3 Kickers", str: 529 };
  else if (cardData.jack >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 4 & 2 Kickers", str: 530 };
  //
  else if (cardData.jack >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three Jacks, 3 & 2 Kickers", str: 531 };
  // three 10's
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 10's, Ace & King Kickers", str: 532 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 10's, Ace & Queen Kickers", str: 533 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 10's, Ace & Jack Kickers", str: 534 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 10's, Ace & 9 Kickers", str: 535 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 10's, Ace & 8 Kickers", str: 536 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 10's, Ace & 7 Kickers", str: 537 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 10's, Ace & 6 Kickers", str: 538 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, Ace & 5 Kickers", str: 539 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, Ace & 4 Kickers", str: 540 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, Ace & 3 Kickers", str: 541 };
  else if (cardData.ten >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, Ace & 2 Kickers", str: 542 };
  //
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 10's, King & Queen Kickers", str: 543 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 10's, King & Jack Kickers", str: 544 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 10's, King & 9 Kickers", str: 545 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 10's, King & 8 Kickers", str: 546 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 10's, King & 7 Kickers", str: 547 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 10's, King & 6 Kickers", str: 548 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, King & 5 Kickers", str: 549 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, King & 4 Kickers", str: 550 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, King & 3 Kickers", str: 551 };
  else if (cardData.ten >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, King & 2 Kickers", str: 552 };
  //
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 10's, Queen & Jack Kickers", str: 553 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 10's, Queen & 9 Kickers", str: 554 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 10's, Queen & 8 Kickers", str: 555 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 10's, Queen & 7 Kickers", str: 556 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 10's, Queen & 6 Kickers", str: 557 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, Queen & 5 Kickers", str: 558 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, Queen & 4 Kickers", str: 559 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, Queen & 3 Kickers", str: 560 };
  else if (cardData.ten >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, Queen & 2 Kickers", str: 561 };
  //
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 10's, Jack & 9 Kickers", str: 562 };
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 10's, Jack & 8 Kickers", str: 563 };
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 10's, Jack & 7 Kickers", str: 564 };
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 10's, Jack & 6 Kickers", str: 565 };
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, Jack & 5 Kickers", str: 566 };
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, Jack & 4 Kickers", str: 567 };
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, Jack & 3 Kickers", str: 568 };
  else if (cardData.ten >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, Jack & 2 Kickers", str: 569 };
  //
  else if (cardData.ten >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three 10's, 9 & 8 Kickers", str: 570 };
  else if (cardData.ten >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three 10's, 9 & 7 Kickers", str: 571 };
  else if (cardData.ten >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three 10's, 9 & 6 Kickers", str: 572 };
  else if (cardData.ten >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, 9 & 5 Kickers", str: 573 };
  else if (cardData.ten >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, 9 & 4 Kickers", str: 574 };
  else if (cardData.ten >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, 9 & 3 Kickers", str: 575 };
  else if (cardData.ten >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, 9 & 2 Kickers", str: 576 };
  //
  else if (cardData.ten >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three 10's, 8 & 7 Kickers", str: 577 };
  else if (cardData.ten >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three 10's, 8 & 6 Kickers", str: 578 };
  else if (cardData.ten >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, 8 & 5 Kickers", str: 579 };
  else if (cardData.ten >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, 8 & 4 Kickers", str: 580 };
  else if (cardData.ten >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, 8 & 3 Kickers", str: 581 };
  else if (cardData.ten >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, 8 & 2 Kickers", str: 582 };
  //
  else if (cardData.ten >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three 10's, 7 & 6 Kickers", str: 583 };
  else if (cardData.ten >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, 7 & 5 Kickers", str: 584 };
  else if (cardData.ten >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, 7 & 4 Kickers", str: 585 };
  else if (cardData.ten >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, 7 & 3 Kickers", str: 586 };
  else if (cardData.ten >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, 7 & 2 Kickers", str: 587 };
  //
  else if (cardData.ten >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three 10's, 6 & 5 Kickers", str: 588 };
  else if (cardData.ten >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, 6 & 4 Kickers", str: 589 };
  else if (cardData.ten >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, 6 & 3 Kickers", str: 590 };
  else if (cardData.ten >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, 6 & 2 Kickers", str: 591 };
  //
  else if (cardData.ten >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three 10's, 5 & 4 Kickers", str: 592 };
  else if (cardData.ten >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, 5 & 3 Kickers", str: 593 };
  else if (cardData.ten >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, 5 & 2 Kickers", str: 594 };
  //
  else if (cardData.ten >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three 10's, 4 & 3 Kickers", str: 595 };
  else if (cardData.ten >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, 4 & 2 Kickers", str: 596 };
  //
  else if (cardData.ten >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three 10's, 3 & 2 Kickers", str: 597 };
  // three 9's
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 9's, Ace & King Kickers", str: 598 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 9's, Ace & Queen Kickers", str: 599 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 9's, Ace & Jack Kickers", str: 600 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 9's, Ace & 10 Kickers", str: 601 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 9's, Ace & 8 Kickers", str: 602 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 9's, Ace & 7 Kickers", str: 603 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 9's, Ace & 6 Kickers", str: 604 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, Ace & 5 Kickers", str: 605 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, Ace & 4 Kickers", str: 606 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, Ace & 3 Kickers", str: 607 };
  else if (cardData.nine >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, Ace & 2 Kickers", str: 608 };
  //
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 9's, King & Queen Kickers", str: 609 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 9's, King & Jack Kickers", str: 610 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 9's, King & 10 Kickers", str: 611 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 9's, King & 8 Kickers", str: 612 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 9's, King & 7 Kickers", str: 613 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 9's, King & 6 Kickers", str: 614 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, King & 5 Kickers", str: 615 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, King & 4 Kickers", str: 616 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, King & 3 Kickers", str: 617 };
  else if (cardData.nine >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, King & 2 Kickers", str: 618 };
  //
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 9's, Queen & Jack Kickers", str: 619 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 9's, Queen & 10 Kickers", str: 620 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 9's, Queen & 8 Kickers", str: 621 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 9's, Queen & 7 Kickers", str: 622 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 9's, Queen & 6 Kickers", str: 623 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, Queen & 5 Kickers", str: 624 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, Queen & 4 Kickers", str: 625 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, Queen & 3 Kickers", str: 626 };
  else if (cardData.nine >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, Queen & 2 Kickers", str: 627 };
  //
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 9's, Jack & 10 Kickers", str: 628 };
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 9's, Jack & 8 Kickers", str: 629 };
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 9's, Jack & 7 Kickers", str: 630 };
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 9's, Jack & 6 Kickers", str: 631 };
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, Jack & 5 Kickers", str: 632 };
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, Jack & 4 Kickers", str: 633 };
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, Jack & 3 Kickers", str: 634 };
  else if (cardData.nine >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, Jack & 2 Kickers", str: 635 };
  //
  else if (cardData.nine >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three 9's, 10 & 8 Kickers", str: 636 };
  else if (cardData.nine >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three 9's, 10 & 7 Kickers", str: 637 };
  else if (cardData.nine >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three 9's, 10 & 6 Kickers", str: 638 };
  else if (cardData.nine >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, 10 & 5 Kickers", str: 639 };
  else if (cardData.nine >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, 10 & 4 Kickers", str: 640 };
  else if (cardData.nine >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, 10 & 3 Kickers", str: 641 };
  else if (cardData.nine >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, 10 & 2 Kickers", str: 642 };
  //
  else if (cardData.nine >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three 9's, 8 & 7 Kickers", str: 643 };
  else if (cardData.nine >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three 9's, 8 & 6 Kickers", str: 644 };
  else if (cardData.nine >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, 8 & 5 Kickers", str: 645 };
  else if (cardData.nine >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, 8 & 4 Kickers", str: 646 };
  else if (cardData.nine >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, 8 & 3 Kickers", str: 647 };
  else if (cardData.nine >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, 8 & 2 Kickers", str: 648 };
  //
  else if (cardData.nine >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three 9's, 7 & 6 Kickers", str: 649 };
  else if (cardData.nine >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, 7 & 5 Kickers", str: 650 };
  else if (cardData.nine >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, 7 & 4 Kickers", str: 651 };
  else if (cardData.nine >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, 7 & 3 Kickers", str: 652 };
  else if (cardData.nine >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, 7 & 2 Kickers", str: 653 };
  //
  else if (cardData.nine >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three 9's, 6 & 5 Kickers", str: 654 };
  else if (cardData.nine >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, 6 & 4 Kickers", str: 655 };
  else if (cardData.nine >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, 6 & 3 Kickers", str: 656 };
  else if (cardData.nine >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, 6 & 2 Kickers", str: 657 };
  //
  else if (cardData.nine >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three 9's, 5 & 4 Kickers", str: 658 };
  else if (cardData.nine >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, 5 & 3 Kickers", str: 659 };
  else if (cardData.nine >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, 5 & 2 Kickers", str: 660 };
  //
  else if (cardData.nine >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three 9's, 4 & 3 Kickers", str: 661 };
  else if (cardData.nine >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, 4 & 2 Kickers", str: 662 };
  //
  else if (cardData.nine >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three 9's, 3 & 2 Kickers", str: 663 };
  // three 8's
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 8's, Ace & King Kickers", str: 664 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 8's, Ace & Queen Kickers", str: 665 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 8's, Ace & Jack Kickers", str: 666 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 8's, Ace & 10 Kickers", str: 667 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 8's, Ace & 9 Kickers", str: 668 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 8's, Ace & 7 Kickers", str: 669 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 8's, Ace & 6 Kickers", str: 670 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, Ace & 5 Kickers", str: 671 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, Ace & 4 Kickers", str: 672 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, Ace & 3 Kickers", str: 673 };
  else if (cardData.eight >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, Ace & 2 Kickers", str: 674 };
  //
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 8's, King & Queen Kickers", str: 675 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 8's, King & Jack Kickers", str: 676 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 8's, King & 10 Kickers", str: 677 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 8's, King & 9 Kickers", str: 678 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 8's, King & 7 Kickers", str: 679 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 8's, King & 6 Kickers", str: 680 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, King & 5 Kickers", str: 681 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, King & 4 Kickers", str: 682 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, King & 3 Kickers", str: 683 };
  else if (cardData.eight >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, King & 2 Kickers", str: 684 };
  //
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 8's, Queen & Jack Kickers", str: 685 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 8's, Queen & 10 Kickers", str: 686 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 8's, Queen & 9 Kickers", str: 687 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 8's, Queen & 7 Kickers", str: 688 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 8's, Queen & 6 Kickers", str: 689 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, Queen & 5 Kickers", str: 690 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, Queen & 4 Kickers", str: 691 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, Queen & 3 Kickers", str: 692 };
  else if (cardData.eight >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, Queen & 2 Kickers", str: 693 };
  //
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 8's, Jack & 10 Kickers", str: 694 };
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 8's, Jack & 9 Kickers", str: 695 };
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 8's, Jack & 7 Kickers", str: 696 };
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 8's, Jack & 6 Kickers", str: 697 };
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, Jack & 5 Kickers", str: 698 };
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, Jack & 4 Kickers", str: 699 };
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, Jack & 3 Kickers", str: 700 };
  else if (cardData.eight >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, Jack & 2 Kickers", str: 701 };
  //
  else if (cardData.eight >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three 8's, 10 & 9 Kickers", str: 702 };
  else if (cardData.eight >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three 8's, 10 & 7 Kickers", str: 703 };
  else if (cardData.eight >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three 8's, 10 & 6 Kickers", str: 704 };
  else if (cardData.eight >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, 10 & 5 Kickers", str: 705 };
  else if (cardData.eight >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, 10 & 4 Kickers", str: 706 };
  else if (cardData.eight >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, 10 & 3 Kickers", str: 707 };
  else if (cardData.eight >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, 10 & 2 Kickers", str: 708 };
  //
  else if (cardData.eight >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three 8's, 9 & 7 Kickers", str: 709 };
  else if (cardData.eight >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three 8's, 9 & 6 Kickers", str: 710 };
  else if (cardData.eight >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, 9 & 5 Kickers", str: 711 };
  else if (cardData.eight >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, 9 & 4 Kickers", str: 712 };
  else if (cardData.eight >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, 9 & 3 Kickers", str: 713 };
  else if (cardData.eight >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, 9 & 2 Kickers", str: 714 };
  //
  else if (cardData.eight >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three 8's, 7 & 6 Kickers", str: 715 };
  else if (cardData.eight >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, 7 & 5 Kickers", str: 716 };
  else if (cardData.eight >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, 7 & 4 Kickers", str: 717 };
  else if (cardData.eight >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, 7 & 3 Kickers", str: 718 };
  else if (cardData.eight >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, 7 & 2 Kickers", str: 719 };
  //
  else if (cardData.eight >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three 8's, 6 & 5 Kickers", str: 720 };
  else if (cardData.eight >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, 6 & 4 Kickers", str: 721 };
  else if (cardData.eight >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, 6 & 3 Kickers", str: 722 };
  else if (cardData.eight >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, 6 & 2 Kickers", str: 723 };
  //
  else if (cardData.eight >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three 8's, 5 & 4 Kickers", str: 724 };
  else if (cardData.eight >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, 5 & 3 Kickers", str: 725 };
  else if (cardData.eight >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, 5 & 2 Kickers", str: 726 };
  //
  else if (cardData.eight >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three 8's, 4 & 3 Kickers", str: 727 };
  else if (cardData.eight >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, 4 & 2 Kickers", str: 728 };
  //
  else if (cardData.eight >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three 8's, 3 & 2 Kickers", str: 729 };
  // three 7's
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 7's, Ace & King Kickers", str: 730 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 7's, Ace & Queen Kickers", str: 731 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 7's, Ace & Jack Kickers", str: 732 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 7's, Ace & 10 Kickers", str: 733 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 7's, Ace & 9 Kickers", str: 734 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 7's, Ace & 8 Kickers", str: 735 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 7's, Ace & 6 Kickers", str: 736 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, Ace & 5 Kickers", str: 737 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, Ace & 4 Kickers", str: 738 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, Ace & 3 Kickers", str: 739 };
  else if (cardData.seven >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, Ace & 2 Kickers", str: 740 };
  //
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 7's, King & Queen Kickers", str: 741 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 7's, King & Jack Kickers", str: 742 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 7's, King & 10 Kickers", str: 743 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 7's, King & 9 Kickers", str: 744 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 7's, King & 8 Kickers", str: 745 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 7's, King & 6 Kickers", str: 746 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, King & 5 Kickers", str: 747 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, King & 4 Kickers", str: 748 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, King & 3 Kickers", str: 749 };
  else if (cardData.seven >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, King & 2 Kickers", str: 750 };
  //
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 7's, Queen & Jack Kickers", str: 751 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 7's, Queen & 10 Kickers", str: 752 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 7's, Queen & 9 Kickers", str: 753 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 7's, Queen & 8 Kickers", str: 754 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 7's, Queen & 6 Kickers", str: 755 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, Queen & 5 Kickers", str: 756 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, Queen & 4 Kickers", str: 757 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, Queen & 3 Kickers", str: 758 };
  else if (cardData.seven >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, Queen & 2 Kickers", str: 759 };
  //
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 7's, Jack & 10 Kickers", str: 760 };
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 7's, Jack & 9 Kickers", str: 761 };
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 7's, Jack & 8 Kickers", str: 762 };
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 7's, Jack & 6 Kickers", str: 763 };
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, Jack & 5 Kickers", str: 764 };
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, Jack & 4 Kickers", str: 765 };
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, Jack & 3 Kickers", str: 766 };
  else if (cardData.seven >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, Jack & 2 Kickers", str: 767 };
  //
  else if (cardData.seven >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three 7's, 10 & 9 Kickers", str: 768 };
  else if (cardData.seven >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three 7's, 10 & 8 Kickers", str: 769 };
  else if (cardData.seven >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three 7's, 10 & 6 Kickers", str: 770 };
  else if (cardData.seven >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, 10 & 5 Kickers", str: 771 };
  else if (cardData.seven >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, 10 & 4 Kickers", str: 772 };
  else if (cardData.seven >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, 10 & 3 Kickers", str: 773 };
  else if (cardData.seven >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, 10 & 2 Kickers", str: 774 };
  //
  else if (cardData.seven >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three 7's, 9 & 8 Kickers", str: 775 };
  else if (cardData.seven >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three 7's, 9 & 6 Kickers", str: 776 };
  else if (cardData.seven >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, 9 & 5 Kickers", str: 777 };
  else if (cardData.seven >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, 9 & 4 Kickers", str: 778 };
  else if (cardData.seven >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, 9 & 3 Kickers", str: 779 };
  else if (cardData.seven >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, 9 & 2 Kickers", str: 780 };
  //
  else if (cardData.seven >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three 7's, 8 & 6 Kickers", str: 781 };
  else if (cardData.seven >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, 8 & 5 Kickers", str: 782 };
  else if (cardData.seven >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, 8 & 4 Kickers", str: 783 };
  else if (cardData.seven >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, 8 & 3 Kickers", str: 784 };
  else if (cardData.seven >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, 8 & 2 Kickers", str: 785 };
  //
  else if (cardData.seven >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three 7's, 6 & 5 Kickers", str: 786 };
  else if (cardData.seven >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, 6 & 4 Kickers", str: 787 };
  else if (cardData.seven >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, 6 & 3 Kickers", str: 788 };
  else if (cardData.seven >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, 6 & 2 Kickers", str: 789 };
  //
  else if (cardData.seven >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three 7's, 5 & 4 Kickers", str: 790 };
  else if (cardData.seven >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, 5 & 3 Kickers", str: 791 };
  else if (cardData.seven >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, 5 & 2 Kickers", str: 792 };
  //
  else if (cardData.seven >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three 7's, 4 & 3 Kickers", str: 793 };
  else if (cardData.seven >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, 4 & 2 Kickers", str: 794 };
  //
  else if (cardData.seven >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three 7's, 3 & 2 Kickers", str: 795 };
  // three 6's
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 6's, Ace & King Kickers", str: 796 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 6's, Ace & Queen Kickers", str: 797 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 6's, Ace & Jack Kickers", str: 798 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 6's, Ace & 10 Kickers", str: 799 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 6's, Ace & 9 Kickers", str: 800 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 6's, Ace & 8 Kickers", str: 801 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 6's, Ace & 7 Kickers", str: 802 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, Ace & 5 Kickers", str: 803 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, Ace & 4 Kickers", str: 804 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, Ace & 3 Kickers", str: 805 };
  else if (cardData.six >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, Ace & 2 Kickers", str: 806 };
  //
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 6's, King & Queen Kickers", str: 807 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 6's, King & Jack Kickers", str: 808 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 6's, King & 10 Kickers", str: 809 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 6's, King & 9 Kickers", str: 810 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 6's, King & 8 Kickers", str: 811 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 6's, King & 7 Kickers", str: 812 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, King & 5 Kickers", str: 813 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, King & 4 Kickers", str: 814 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, King & 3 Kickers", str: 815 };
  else if (cardData.six >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, King & 2 Kickers", str: 816 };
  //
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 6's, Queen & Jack Kickers", str: 817 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 6's, Queen & 10 Kickers", str: 818 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 6's, Queen & 9 Kickers", str: 819 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 6's, Queen & 8 Kickers", str: 820 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 6's, Queen & 7 Kickers", str: 821 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, Queen & 5 Kickers", str: 822 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, Queen & 4 Kickers", str: 823 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, Queen & 3 Kickers", str: 824 };
  else if (cardData.six >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, Queen & 2 Kickers", str: 825 };
  //
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 6's, Jack & 10 Kickers", str: 826 };
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 6's, Jack & 9 Kickers", str: 827 };
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 6's, Jack & 8 Kickers", str: 828 };
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 6's, Jack & 7 Kickers", str: 829 };
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, Jack & 5 Kickers", str: 830 };
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, Jack & 4 Kickers", str: 831 };
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, Jack & 3 Kickers", str: 832 };
  else if (cardData.six >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, Jack & 2 Kickers", str: 833 };
  //
  else if (cardData.six >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three 6's, 10 & 9 Kickers", str: 834 };
  else if (cardData.six >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three 6's, 10 & 8 Kickers", str: 835 };
  else if (cardData.six >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three 6's, 10 & 7 Kickers", str: 836 };
  else if (cardData.six >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, 10 & 5 Kickers", str: 837 };
  else if (cardData.six >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, 10 & 4 Kickers", str: 838 };
  else if (cardData.six >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, 10 & 3 Kickers", str: 839 };
  else if (cardData.six >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, 10 & 2 Kickers", str: 840 };
  //
  else if (cardData.six >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three 6's, 9 & 8 Kickers", str: 841 };
  else if (cardData.six >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three 6's, 9 & 7 Kickers", str: 842 };
  else if (cardData.six >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, 9 & 5 Kickers", str: 843 };
  else if (cardData.six >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, 9 & 4 Kickers", str: 844 };
  else if (cardData.six >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, 9 & 3 Kickers", str: 845 };
  else if (cardData.six >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, 9 & 2 Kickers", str: 846 };
  //
  else if (cardData.six >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three 6's, 8 & 7 Kickers", str: 847 };
  else if (cardData.six >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, 8 & 5 Kickers", str: 848 };
  else if (cardData.six >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, 8 & 4 Kickers", str: 849 };
  else if (cardData.six >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, 8 & 3 Kickers", str: 850 };
  else if (cardData.six >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, 8 & 2 Kickers", str: 851 };
  //
  else if (cardData.six >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three 6's, 7 & 5 Kickers", str: 852 };
  else if (cardData.six >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, 7 & 4 Kickers", str: 853 };
  else if (cardData.six >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, 7 & 3 Kickers", str: 854 };
  else if (cardData.six >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, 7 & 2 Kickers", str: 855 };
  //
  else if (cardData.six >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three 6's, 5 & 4 Kickers", str: 856 };
  else if (cardData.six >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, 5 & 3 Kickers", str: 857 };
  else if (cardData.six >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, 5 & 2 Kickers", str: 858 };
  //
  else if (cardData.six >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three 6's, 4 & 3 Kickers", str: 859 };
  else if (cardData.six >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, 4 & 2 Kickers", str: 860 };
  //
  else if (cardData.six >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three 6's, 3 & 2 Kickers", str: 861 };
  // three 5's
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 5's, Ace & King Kickers", str: 862 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 5's, Ace & Queen Kickers", str: 863 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 5's, Ace & Jack Kickers", str: 864 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 5's, Ace & 10 Kickers", str: 865 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 5's, Ace & 9 Kickers", str: 866 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 5's, Ace & 8 Kickers", str: 867 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 5's, Ace & 7 Kickers", str: 868 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, Ace & 6 Kickers", str: 869 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, Ace & 4 Kickers", str: 870 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, Ace & 3 Kickers", str: 871 };
  else if (cardData.five >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, Ace & 2 Kickers", str: 872 };
  //
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 5's, King & Queen Kickers", str: 873 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 5's, King & Jack Kickers", str: 874 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 5's, King & 10 Kickers", str: 875 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 5's, King & 9 Kickers", str: 876 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 5's, King & 8 Kickers", str: 877 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 5's, King & 7 Kickers", str: 878 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, King & 6 Kickers", str: 879 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, King & 4 Kickers", str: 880 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, King & 3 Kickers", str: 881 };
  else if (cardData.five >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, King & 2 Kickers", str: 882 };
  //
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 5's, Queen & Jack Kickers", str: 883 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 5's, Queen & 10 Kickers", str: 884 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 5's, Queen & 9 Kickers", str: 885 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 5's, Queen & 8 Kickers", str: 886 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 5's, Queen & 7 Kickers", str: 887 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, Queen & 6 Kickers", str: 888 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, Queen & 4 Kickers", str: 889 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, Queen & 3 Kickers", str: 890 };
  else if (cardData.five >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, Queen & 2 Kickers", str: 891 };
  //
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 5's, Jack & 10 Kickers", str: 892 };
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 5's, Jack & 9 Kickers", str: 893 };
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 5's, Jack & 8 Kickers", str: 894 };
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 5's, Jack & 7 Kickers", str: 895 };
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, Jack & 6 Kickers", str: 896 };
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, Jack & 4 Kickers", str: 897 };
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, Jack & 3 Kickers", str: 898 };
  else if (cardData.five >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, Jack & 2 Kickers", str: 899 };
  //
  else if (cardData.five >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three 5's, 10 & 9 Kickers", str: 900 };
  else if (cardData.five >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three 5's, 10 & 8 Kickers", str: 901 };
  else if (cardData.five >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three 5's, 10 & 7 Kickers", str: 902 };
  else if (cardData.five >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, 10 & 6 Kickers", str: 903 };
  else if (cardData.five >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, 10 & 4 Kickers", str: 904 };
  else if (cardData.five >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, 10 & 3 Kickers", str: 905 };
  else if (cardData.five >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, 10 & 2 Kickers", str: 906 };
  //
  else if (cardData.five >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three 5's, 9 & 8 Kickers", str: 907 };
  else if (cardData.five >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three 5's, 9 & 7 Kickers", str: 908 };
  else if (cardData.five >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, 9 & 6 Kickers", str: 909 };
  else if (cardData.five >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, 9 & 4 Kickers", str: 910 };
  else if (cardData.five >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, 9 & 3 Kickers", str: 911 };
  else if (cardData.five >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, 9 & 2 Kickers", str: 912 };
  //
  else if (cardData.five >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three 5's, 8 & 7 Kickers", str: 913 };
  else if (cardData.five >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, 8 & 6 Kickers", str: 914 };
  else if (cardData.five >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, 8 & 4 Kickers", str: 915 };
  else if (cardData.five >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, 8 & 3 Kickers", str: 916 };
  else if (cardData.five >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, 8 & 2 Kickers", str: 917 };
  //
  else if (cardData.five >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three 5's, 7 & 6 Kickers", str: 918 };
  else if (cardData.five >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, 7 & 4 Kickers", str: 919 };
  else if (cardData.five >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, 7 & 3 Kickers", str: 920 };
  else if (cardData.five >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, 7 & 2 Kickers", str: 921 };
  //
  else if (cardData.five >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three 5's, 6 & 4 Kickers", str: 922 };
  else if (cardData.five >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, 6 & 3 Kickers", str: 923 };
  else if (cardData.five >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, 6 & 2 Kickers", str: 924 };
  //
  else if (cardData.five >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three 5's, 4 & 3 Kickers", str: 925 };
  else if (cardData.five >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, 4 & 2 Kickers", str: 926 };
  //
  else if (cardData.five >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three 5's, 3 & 2 Kickers", str: 927 };
  // three 4's
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 4's, Ace & King Kickers", str: 928 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 4's, Ace & Queen Kickers", str: 929 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 4's, Ace & Jack Kickers", str: 930 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 4's, Ace & 10 Kickers", str: 931 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 4's, Ace & 9 Kickers", str: 932 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 4's, Ace & 8 Kickers", str: 933 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 4's, Ace & 7 Kickers", str: 934 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, Ace & 6 Kickers", str: 935 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, Ace & 5 Kickers", str: 936 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, Ace & 3 Kickers", str: 937 };
  else if (cardData.four >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, Ace & 2 Kickers", str: 938 };
  //
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 4's, King & Queen Kickers", str: 939 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 4's, King & Jack Kickers", str: 940 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 4's, King & 10 Kickers", str: 941 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 4's, King & 9 Kickers", str: 942 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 4's, King & 8 Kickers", str: 943 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 4's, King & 7 Kickers", str: 944 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, King & 6 Kickers", str: 945 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, King & 5 Kickers", str: 946 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, King & 3 Kickers", str: 947 };
  else if (cardData.four >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, King & 2 Kickers", str: 948 };
  //
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 4's, Queen & Jack Kickers", str: 949 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 4's, Queen & 10 Kickers", str: 950 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 4's, Queen & 9 Kickers", str: 951 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 4's, Queen & 8 Kickers", str: 952 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 4's, Queen & 7 Kickers", str: 953 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, Queen & 6 Kickers", str: 954 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, Queen & 5 Kickers", str: 955 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, Queen & 3 Kickers", str: 956 };
  else if (cardData.four >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, Queen & 2 Kickers", str: 957 };
  //
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 4's, Jack & 10 Kickers", str: 958 };
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 4's, Jack & 9 Kickers", str: 959 };
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 4's, Jack & 8 Kickers", str: 960 };
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 4's, Jack & 7 Kickers", str: 961 };
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, Jack & 6 Kickers", str: 962 };
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, Jack & 5 Kickers", str: 963 };
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, Jack & 3 Kickers", str: 964 };
  else if (cardData.four >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, Jack & 2 Kickers", str: 965 };
  //
  else if (cardData.four >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three 4's, 10 & 9 Kickers", str: 966 };
  else if (cardData.four >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three 4's, 10 & 8 Kickers", str: 967 };
  else if (cardData.four >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three 4's, 10 & 7 Kickers", str: 968 };
  else if (cardData.four >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, 10 & 6 Kickers", str: 969 };
  else if (cardData.four >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, 10 & 5 Kickers", str: 970 };
  else if (cardData.four >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, 10 & 3 Kickers", str: 971 };
  else if (cardData.four >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, 10 & 2 Kickers", str: 972 };
  //
  else if (cardData.four >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three 4's, 9 & 8 Kickers", str: 973 };
  else if (cardData.four >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three 4's, 9 & 7 Kickers", str: 974 };
  else if (cardData.four >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, 9 & 6 Kickers", str: 975 };
  else if (cardData.four >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, 9 & 5 Kickers", str: 976 };
  else if (cardData.four >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, 9 & 3 Kickers", str: 977 };
  else if (cardData.four >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, 9 & 2 Kickers", str: 978 };
  //
  else if (cardData.four >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three 4's, 8 & 7 Kickers", str: 979 };
  else if (cardData.four >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, 8 & 6 Kickers", str: 980 };
  else if (cardData.four >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, 8 & 5 Kickers", str: 981 };
  else if (cardData.four >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, 8 & 3 Kickers", str: 982 };
  else if (cardData.four >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, 8 & 2 Kickers", str: 983 };
  //
  else if (cardData.four >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three 4's, 7 & 6 Kickers", str: 984 };
  else if (cardData.four >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, 7 & 5 Kickers", str: 985 };
  else if (cardData.four >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, 7 & 3 Kickers", str: 986 };
  else if (cardData.four >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, 7 & 2 Kickers", str: 987 };
  //
  else if (cardData.four >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three 4's, 6 & 5 Kickers", str: 988 };
  else if (cardData.four >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, 6 & 3 Kickers", str: 989 };
  else if (cardData.four >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, 6 & 2 Kickers", str: 990 };
  //
  else if (cardData.four >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three 4's, 5 & 3 Kickers", str: 991 };
  else if (cardData.four >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, 5 & 2 Kickers", str: 992 };
  //
  else if (cardData.four >= 3 && cardData.three >= 1 && cardData.two >= 1)
    r = { hand: "Three 4's, 3 & 2 Kickers", str: 993 };
  // three 3's
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 3's, Ace & King Kickers", str: 994 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three 3's, Ace & Queen Kickers", str: 995 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 3's, Ace & Jack Kickers", str: 996 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 3's, Ace & 10 Kickers", str: 997 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 3's, Ace & 9 Kickers", str: 998 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 3's, Ace & 8 Kickers", str: 999 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 3's, Ace & 7 Kickers", str: 1000 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, Ace & 6 Kickers", str: 1001 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, Ace & 5 Kickers", str: 1002 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, Ace & 4 Kickers", str: 1003 };
  else if (cardData.three >= 3 && cardData.ace >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, Ace & 2 Kickers", str: 1004 };
  //
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 3's, King & Queen Kickers", str: 1005 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 3's, King & Jack Kickers", str: 1006 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 3's, King & 10 Kickers", str: 1007 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 3's, King & 9 Kickers", str: 1008 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 3's, King & 8 Kickers", str: 1009 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 3's, King & 7 Kickers", str: 1010 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, King & 6 Kickers", str: 1011 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, King & 5 Kickers", str: 1012 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, King & 4 Kickers", str: 1013 };
  else if (cardData.three >= 3 && cardData.king >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, King & 2 Kickers", str: 1014 };
  //
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 3's, Queen & Jack Kickers", str: 1015 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 3's, Queen & 10 Kickers", str: 1016 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 3's, Queen & 9 Kickers", str: 1017 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 3's, Queen & 8 Kickers", str: 1018 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 3's, Queen & 7 Kickers", str: 1019 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, Queen & 6 Kickers", str: 1020 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, Queen & 5 Kickers", str: 1021 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, Queen & 4 Kickers", str: 1022 };
  else if (cardData.three >= 3 && cardData.queen >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, Queen & 2 Kickers", str: 1023 };
  //
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 3's, Jack & 10 Kickers", str: 1024 };
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 3's, Jack & 9 Kickers", str: 1025 };
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 3's, Jack & 8 Kickers", str: 1026 };
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 3's, Jack & 7 Kickers", str: 1027 };
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, Jack & 6 Kickers", str: 1028 };
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, Jack & 5 Kickers", str: 1029 };
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, Jack & 4 Kickers", str: 1030 };
  else if (cardData.three >= 3 && cardData.jack >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, Jack & 2 Kickers", str: 1031 };
  //
  else if (cardData.three >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three 3's, 10 & 9 Kickers", str: 1032 };
  else if (cardData.three >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three 3's, 10 & 8 Kickers", str: 1033 };
  else if (cardData.three >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three 3's, 10 & 7 Kickers", str: 1034 };
  else if (cardData.three >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, 10 & 6 Kickers", str: 1035 };
  else if (cardData.three >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, 10 & 5 Kickers", str: 1036 };
  else if (cardData.three >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, 10 & 4 Kickers", str: 1037 };
  else if (cardData.three >= 3 && cardData.ten >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, 10 & 2 Kickers", str: 1038 };
  //
  else if (cardData.three >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three 3's, 9 & 8 Kickers", str: 1039 };
  else if (cardData.three >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three 3's, 9 & 7 Kickers", str: 1040 };
  else if (cardData.three >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, 9 & 6 Kickers", str: 1041 };
  else if (cardData.three >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, 9 & 5 Kickers", str: 1042 };
  else if (cardData.three >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, 9 & 4 Kickers", str: 1043 };
  else if (cardData.three >= 3 && cardData.nine >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, 9 & 2 Kickers", str: 1044 };
  //
  else if (cardData.three >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three 3's, 8 & 7 Kickers", str: 1045 };
  else if (cardData.three >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, 8 & 6 Kickers", str: 1046 };
  else if (cardData.three >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, 8 & 5 Kickers", str: 1047 };
  else if (cardData.three >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, 8 & 4 Kickers", str: 1048 };
  else if (cardData.three >= 3 && cardData.eight >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, 8 & 2 Kickers", str: 1049 };
  //
  else if (cardData.three >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three 3's, 7 & 6 Kickers", str: 1050 };
  else if (cardData.three >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, 7 & 5 Kickers", str: 1051 };
  else if (cardData.three >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, 7 & 4 Kickers", str: 1052 };
  else if (cardData.three >= 3 && cardData.seven >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, 7 & 2 Kickers", str: 1053 };
  //
  else if (cardData.three >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three 3's, 6 & 5 Kickers", str: 1054 };
  else if (cardData.three >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, 6 & 4 Kickers", str: 1055 };
  else if (cardData.three >= 3 && cardData.six >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, 6 & 2 Kickers", str: 1056 };
  //
  else if (cardData.three >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three 3's, 5 & 4 Kickers", str: 1057 };
  else if (cardData.three >= 3 && cardData.five >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, 5 & 2 Kickers", str: 1058 };
  //
  else if (cardData.three >= 3 && cardData.four >= 1 && cardData.two >= 1)
    r = { hand: "Three 3's, 4 & 2 Kickers", str: 1059 };
  // three 2's
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.king >= 1)
    r = { hand: "Three 2's, Ace & King Kickers", str: 1060 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.queen >= 1)
    r = { hand: "Three @'s, Ace & Queen Kickers", str: 1061 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.jack >= 1)
    r = { hand: "Three 2's, Ace & Jack Kickers", str: 1062 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.ten >= 1)
    r = { hand: "Three 2's, Ace & 10 Kickers", str: 1063 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.nine >= 1)
    r = { hand: "Three 2's, Ace & 9 Kickers", str: 1064 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.eight >= 1)
    r = { hand: "Three 2's, Ace & 8 Kickers", str: 1065 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.seven >= 1)
    r = { hand: "Three 2's, Ace & 7 Kickers", str: 1066 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, Ace & 6 Kickers", str: 1067 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, Ace & 5 Kickers", str: 1068 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, Ace & 4 Kickers", str: 1069 };
  else if (cardData.two >= 3 && cardData.ace >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, Ace & 3 Kickers", str: 1070 };
  //
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.queen >= 1)
    r = { hand: "Three 2's, King & Queen Kickers", str: 1071 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.jack >= 1)
    r = { hand: "Three 2's, King & Jack Kickers", str: 1072 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.ten >= 1)
    r = { hand: "Three 2's, King & 10 Kickers", str: 1073 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.nine >= 1)
    r = { hand: "Three 2's, King & 9 Kickers", str: 1074 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.eight >= 1)
    r = { hand: "Three 2's, King & 8 Kickers", str: 1075 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.seven >= 1)
    r = { hand: "Three 2's, King & 7 Kickers", str: 1076 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, King & 6 Kickers", str: 1077 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, King & 5 Kickers", str: 1078 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, King & 4 Kickers", str: 1079 };
  else if (cardData.two >= 3 && cardData.king >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, King & 3 Kickers", str: 1080 };
  //
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.jack >= 1)
    r = { hand: "Three 2's, Queen & Jack Kickers", str: 1081 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.ten >= 1)
    r = { hand: "Three 2's, Queen & 10 Kickers", str: 1082 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.nine >= 1)
    r = { hand: "Three 2's, Queen & 9 Kickers", str: 1083 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.eight >= 1)
    r = { hand: "Three 2's, Queen & 8 Kickers", str: 1084 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.seven >= 1)
    r = { hand: "Three 2's, Queen & 7 Kickers", str: 1085 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, Queen & 6 Kickers", str: 1086 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, Queen & 5 Kickers", str: 1087 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, Queen & 4 Kickers", str: 1088 };
  else if (cardData.two >= 3 && cardData.queen >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, Queen & 3 Kickers", str: 1089 };
  //
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.ten >= 1)
    r = { hand: "Three 2's, Jack & 10 Kickers", str: 1090 };
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.nine >= 1)
    r = { hand: "Three 2's, Jack & 9 Kickers", str: 1091 };
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.eight >= 1)
    r = { hand: "Three 2's, Jack & 8 Kickers", str: 1092 };
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.seven >= 1)
    r = { hand: "Three 2's, Jack & 7 Kickers", str: 1093 };
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, Jack & 6 Kickers", str: 1094 };
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, Jack & 5 Kickers", str: 1095 };
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, Jack & 4 Kickers", str: 1096 };
  else if (cardData.two >= 3 && cardData.jack >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, Jack & 3 Kickers", str: 1097 };
  //
  else if (cardData.two >= 3 && cardData.ten >= 1 && cardData.nine >= 1)
    r = { hand: "Three 2's, 10 & 9 Kickers", str: 1098 };
  else if (cardData.two >= 3 && cardData.ten >= 1 && cardData.eight >= 1)
    r = { hand: "Three 2's, 10 & 8 Kickers", str: 1099 };
  else if (cardData.two >= 3 && cardData.ten >= 1 && cardData.seven >= 1)
    r = { hand: "Three 2's, 10 & 7 Kickers", str: 1100 };
  else if (cardData.two >= 3 && cardData.ten >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, 10 & 6 Kickers", str: 1101 };
  else if (cardData.two >= 3 && cardData.ten >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, 10 & 5 Kickers", str: 1102 };
  else if (cardData.two >= 3 && cardData.ten >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, 10 & 4 Kickers", str: 1103 };
  else if (cardData.two >= 3 && cardData.ten >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, 10 & 3 Kickers", str: 1104 };
  //
  else if (cardData.two >= 3 && cardData.nine >= 1 && cardData.eight >= 1)
    r = { hand: "Three 2's, 9 & 8 Kickers", str: 1105 };
  else if (cardData.two >= 3 && cardData.nine >= 1 && cardData.seven >= 1)
    r = { hand: "Three 2's, 9 & 7 Kickers", str: 1106 };
  else if (cardData.two >= 3 && cardData.nine >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, 9 & 6 Kickers", str: 1107 };
  else if (cardData.two >= 3 && cardData.nine >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, 9 & 5 Kickers", str: 1108 };
  else if (cardData.two >= 3 && cardData.nine >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, 9 & 4 Kickers", str: 1109 };
  else if (cardData.two >= 3 && cardData.nine >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, 9 & 3 Kickers", str: 1110 };
  //
  else if (cardData.two >= 3 && cardData.eight >= 1 && cardData.seven >= 1)
    r = { hand: "Three 2's, 8 & 7 Kickers", str: 1111 };
  else if (cardData.two >= 3 && cardData.eight >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, 8 & 6 Kickers", str: 1112 };
  else if (cardData.two >= 3 && cardData.eight >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, 8 & 5 Kickers", str: 1113 };
  else if (cardData.two >= 3 && cardData.eight >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, 8 & 4 Kickers", str: 1114 };
  else if (cardData.two >= 3 && cardData.eight >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, 8 & 3 Kickers", str: 1115 };
  //
  else if (cardData.two >= 3 && cardData.seven >= 1 && cardData.six >= 1)
    r = { hand: "Three 2's, 7 & 6 Kickers", str: 1116 };
  else if (cardData.two >= 3 && cardData.seven >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, 7 & 5 Kickers", str: 1117 };
  else if (cardData.two >= 3 && cardData.seven >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, 7 & 4 Kickers", str: 1118 };
  else if (cardData.two >= 3 && cardData.seven >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, 7 & 3 Kickers", str: 1119 };
  //
  else if (cardData.two >= 3 && cardData.six >= 1 && cardData.five >= 1)
    r = { hand: "Three 2's, 6 & 5 Kickers", str: 1120 };
  else if (cardData.two >= 3 && cardData.six >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, 6 & 4 Kickers", str: 1121 };
  else if (cardData.two >= 3 && cardData.six >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, 6 & 3 Kickers", str: 1122 };
  //
  else if (cardData.two >= 3 && cardData.five >= 1 && cardData.four >= 1)
    r = { hand: "Three 2's, 5 & 4 Kickers", str: 1123 };
  else if (cardData.two >= 3 && cardData.five >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, 5 & 3 Kickers", str: 1124 };
  //
  else if (cardData.two >= 3 && cardData.four >= 1 && cardData.three >= 1)
    r = { hand: "Three 2's, 4 & 3 Kickers", str: 1125 };
  // TWO PAIR
  // two pair, aces over...
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over Kings, Queen Kicker", str: 1126 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over Kings, Jack Kicker", str: 1127 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over Kings, 10 Kicker", str: 1128 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over Kings, 9 Kicker", str: 1129 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over Kings, 8 Kicker", str: 1130 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over Kings, 7 Kicker", str: 1131 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over Kings, 6 Kicker", str: 1132 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over Kings, 5 Kicker", str: 1133 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over Kings, 4 Kicker", str: 1134 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over Kings, 3 Kicker", str: 1135 };
  else if (cardData.ace >= 2 && cardData.king >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over Kings, 2 Kicker", str: 1136 };
  //
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over Queens, King Kicker", str: 1137 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over Queens, Jack Kicker", str: 1138 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over Queens, 10 Kicker", str: 1139 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over Queens, 9 Kicker", str: 1140 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over Queens, 8 Kicker", str: 1141 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over Queens, 7 Kicker", str: 1142 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over Queens, 6 Kicker", str: 1143 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over Queens, 5 Kicker", str: 1144 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over Queens, 4 Kicker", str: 1145 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over Queens, 3 Kicker", str: 1146 };
  else if (cardData.ace >= 2 && cardData.queen >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over Queens, 2 Kicker", str: 1147 };
  //
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over Jacks, King Kicker", str: 1148 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over Jacks, Queen Kicker", str: 1149 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over Jacks, 10 Kicker", str: 1150 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over Jacks, 9 Kicker", str: 1151 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over Jacks, 8 Kicker", str: 1152 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over Jacks, 7 Kicker", str: 1153 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over Jacks, 6 Kicker", str: 1154 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over Jacks, 5 Kicker", str: 1155 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over Jacks, 4 Kicker", str: 1156 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over Jacks, 3 Kicker", str: 1157 };
  else if (cardData.ace >= 2 && cardData.jack >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over Jacks, 2 Kicker", str: 1158 };
  //
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.king)
    r = { hand: "Two Pair Aces over 10's, King Kicker", str: 1159 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.queen)
    r = { hand: "Two Pair Aces over 10's, Queen Kicker", str: 1160 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.jack)
    r = { hand: "Two Pair Aces over 10's, Jack Kicker", str: 1161 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.nine)
    r = { hand: "Two Pair Aces over 10's, 9 Kicker", str: 1162 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.eight)
    r = { hand: "Two Pair Aces over 10's, 8 Kicker", str: 1163 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.seven)
    r = { hand: "Two Pair Aces over 10's, 7 Kicker", str: 1164 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.six)
    r = { hand: "Two Pair Aces over 10's, 6 Kicker", str: 1165 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.five)
    r = { hand: "Two Pair Aces over 10's, 5 Kicker", str: 1166 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.four)
    r = { hand: "Two Pair Aces over 10's, 4 Kicker", str: 1167 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.three)
    r = { hand: "Two Pair Aces over 10's, 3 Kicker", str: 1168 };
  else if (cardData.ace >= 2 && cardData.ten >= 2 && cardData.two)
    r = { hand: "Two Pair Aces over 10's, 2 Kicker", str: 1169 };
  //
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 9's, King Kicker", str: 1170 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 9's, Queen Kicker", str: 1171 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 9's, Jack Kicker", str: 1172 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 9's, 10 Kicker", str: 1173 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over 9's, 8 Kicker", str: 1174 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over 9's, 7 Kicker", str: 1175 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 9's, 6 Kicker", str: 1176 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over 9's, 5 Kicker", str: 1177 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over 9's, 4 Kicker", str: 1178 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over 9's, 3 Kicker", str: 1179 };
  else if (cardData.ace >= 2 && cardData.nine >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over 9's, 2 Kicker", str: 1180 };
  //
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 8's, King Kicker", str: 1181 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 8's, Queen Kicker", str: 1182 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 8's, Jack Kicker", str: 1183 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 8's, 10 Kicker", str: 1184 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over 8's, 9 Kicker", str: 1185 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over 8's, 7 Kicker", str: 1186 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 8's, 6 Kicker", str: 1187 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over 8's, 5 Kicker", str: 1188 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over 8's, 4 Kicker", str: 1189 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over 8's, 3 Kicker", str: 1190 };
  else if (cardData.ace >= 2 && cardData.eight >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over 8's, 2 Kicker", str: 1191 };
  //
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 7's, King Kicker", str: 1192 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 7's, Queen Kicker", str: 1193 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 7's, Jack Kicker", str: 1194 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 7's, 10 Kicker", str: 1195 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over 7's, 9 Kicker", str: 1196 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over 7's, 8 Kicker", str: 1197 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 7's, 6 Kicker", str: 1198 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over 7's, 5 Kicker", str: 1199 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over 7's, 4 Kicker", str: 1200 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over 7's, 3 Kicker", str: 1201 };
  else if (cardData.ace >= 2 && cardData.seven >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over 7's, 2 Kicker", str: 1202 };
  //
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 6's, King Kicker", str: 1203 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 6's, Queen Kicker", str: 1204 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 6's, Jack Kicker", str: 1205 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 6's, 10 Kicker", str: 1206 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over 6's, 9 Kicker", str: 1207 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over 6's, 8 Kicker", str: 1208 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over 6's, 7 Kicker", str: 1209 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 6's, 5 Kicker", str: 1210 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over 6's, 4 Kicker", str: 1211 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over 6's, 3 Kicker", str: 1212 };
  else if (cardData.ace >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over 6's, 2 Kicker", str: 1213 };
  //
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 5's, King Kicker", str: 1214 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 5's, Queen Kicker", str: 1215 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 5's, Jack Kicker", str: 1216 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 5's, 10 Kicker", str: 1217 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over 5's, 9 Kicker", str: 1218 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over 5's, 8 Kicker", str: 1219 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over 5's, 7 Kicker", str: 1220 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 5's, 6 Kicker", str: 1221 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over 5's, 4 Kicker", str: 1222 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over 5's, 3 Kicker", str: 1223 };
  else if (cardData.ace >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over 5's, 2 Kicker", str: 1224 };
  //
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 4's, King Kicker", str: 1225 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 4's, Queen Kicker", str: 1226 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 4's, Jack Kicker", str: 1227 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 4's, 10 Kicker", str: 1228 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over 4's, 9 Kicker", str: 1229 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over 4's, 8 Kicker", str: 1230 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over 4's, 7 Kicker", str: 1231 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 4's, 6 Kicker", str: 1232 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over 4's, 5 Kicker", str: 1233 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over 4's, 3 Kicker", str: 1234 };
  else if (cardData.ace >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over 4's, 2 Kicker", str: 1235 };
  //
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 3's, King Kicker", str: 1236 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 3's, Queen Kicker", str: 1237 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 3's, Jack Kicker", str: 1238 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 3's, 10 Kicker", str: 1239 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over 3's, 9 Kicker", str: 1240 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over 3's, 8 Kicker", str: 1241 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over 3's, 7 Kicker", str: 1242 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 3's, 6 Kicker", str: 1243 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over 3's, 5 Kicker", str: 1244 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over 3's, 4 Kicker", str: 1245 };
  else if (cardData.ace >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Aces over 3's, 2 Kicker", str: 1246 };
  //
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Aces over 2's, King Kicker", str: 1247 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Aces over 2's, Queen Kicker", str: 1248 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Aces over 2's, Jack Kicker", str: 1249 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Aces over 2's, 10 Kicker", str: 1250 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Aces over 2's, 9 Kicker", str: 1251 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Aces over 2's, 8 Kicker", str: 1252 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Aces over 2's, 7 Kicker", str: 1253 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Aces over 2's, 6 Kicker", str: 1254 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Aces over 2's, 5 Kicker", str: 1255 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Aces over 2's, 4 Kicker", str: 1256 };
  else if (cardData.ace >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Aces over 2's, 3 Kicker", str: 1257 };
  // two pair, kings over...
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over Queens, Ace Kicker", str: 1258 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over Queens, Jack Kicker", str: 1259 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over Queens, 10 Kicker", str: 1260 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over Queens, 9 Kicker", str: 1261 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over Queens, 8 Kicker", str: 1262 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over Queens, 7 Kicker", str: 1263 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over Queens, 6 Kicker", str: 1264 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over Queens, 5 Kicker", str: 1265 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over Queens, 4 Kicker", str: 1266 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over Queens, 3 Kicker", str: 1267 };
  else if (cardData.king >= 2 && cardData.queen >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over Queens, 2 Kicker", str: 1268 };
  //
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over Jacks, Ace Kicker", str: 1269 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over Jacks, Queen Kicker", str: 1270 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over Jacks, 10 Kicker", str: 1271 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over Jacks, 9 Kicker", str: 1272 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over Jacks, 8 Kicker", str: 1273 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over Jacks, 7 Kicker", str: 1274 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over Jacks, 6 Kicker", str: 1275 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over Jacks, 5 Kicker", str: 1276 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over Jacks, 4 Kicker", str: 1277 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over Jacks, 3 Kicker", str: 1278 };
  else if (cardData.king >= 2 && cardData.jack >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over Jacks, 2 Kicker", str: 1279 };
  //
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.ace)
    r = { hand: "Two Pair Kings over 10's, Ace Kicker", str: 1280 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.queen)
    r = { hand: "Two Pair Kings over 10's, Queen Kicker", str: 1281 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.jack)
    r = { hand: "Two Pair Kings over 10's, Jack Kicker", str: 1282 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.nine)
    r = { hand: "Two Pair Kings over 10's, 9 Kicker", str: 1283 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.eight)
    r = { hand: "Two Pair Kings over 10's, 8 Kicker", str: 1284 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.seven)
    r = { hand: "Two Pair Kings over 10's, 7 Kicker", str: 1285 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.six)
    r = { hand: "Two Pair Kings over 10's, 6 Kicker", str: 1286 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.five)
    r = { hand: "Two Pair Kings over 10's, 5 Kicker", str: 1287 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.four)
    r = { hand: "Two Pair Kings over 10's, 4 Kicker", str: 1288 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.three)
    r = { hand: "Two Pair Kings over 10's, 3 Kicker", str: 1289 };
  else if (cardData.king >= 2 && cardData.ten >= 2 && cardData.two)
    r = { hand: "Two Pair Kings over 10's, 2 Kicker", str: 1290 };
  //
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 9's, Ace Kicker", str: 1291 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 9's, Queen Kicker", str: 1292 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 9's, Jack Kicker", str: 1293 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 9's, 10 Kicker", str: 1294 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over 9's, 8 Kicker", str: 1295 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over 9's, 7 Kicker", str: 1296 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 9's, 6 Kicker", str: 1297 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over 9's, 5 Kicker", str: 1298 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over 9's, 4 Kicker", str: 1299 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over 9's, 3 Kicker", str: 1300 };
  else if (cardData.king >= 2 && cardData.nine >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over 9's, 2 Kicker", str: 1301 };
  //
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 8's, Ace Kicker", str: 1302 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 8's, Queen Kicker", str: 1303 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 8's, Jack Kicker", str: 1304 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 8's, 10 Kicker", str: 1305 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over 8's, 9 Kicker", str: 1306 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over 8's, 7 Kicker", str: 1307 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 8's, 6 Kicker", str: 1308 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over 8's, 5 Kicker", str: 1309 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over 8's, 4 Kicker", str: 1310 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over 8's, 3 Kicker", str: 1311 };
  else if (cardData.king >= 2 && cardData.eight >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over 8's, 2 Kicker", str: 1312 };
  //
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 7's, Ace Kicker", str: 1313 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 7's, Queen Kicker", str: 1314 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 7's, Jack Kicker", str: 1315 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 7's, 10 Kicker", str: 1316 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over 7's, 9 Kicker", str: 1317 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over 7's, 8 Kicker", str: 1318 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 7's, 6 Kicker", str: 1319 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over 7's, 5 Kicker", str: 1320 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over 7's, 4 Kicker", str: 1321 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over 7's, 3 Kicker", str: 1322 };
  else if (cardData.king >= 2 && cardData.seven >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over 7's, 2 Kicker", str: 1323 };
  //
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 6's, Ace Kicker", str: 1324 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 6's, Queen Kicker", str: 1325 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 6's, Jack Kicker", str: 1326 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 6's, 10 Kicker", str: 1327 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over 6's, 9 Kicker", str: 1328 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over 6's, 8 Kicker", str: 1329 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over 6's, 7 Kicker", str: 1330 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 6's, 5 Kicker", str: 1331 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over 6's, 4 Kicker", str: 1332 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over 6's, 3 Kicker", str: 1333 };
  else if (cardData.king >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over 6's, 2 Kicker", str: 1334 };
  //
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 5's, Ace Kicker", str: 1335 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 5's, Queen Kicker", str: 1336 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 5's, Jack Kicker", str: 1337 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 5's, 10 Kicker", str: 1338 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over 5's, 9 Kicker", str: 1339 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over 5's, 8 Kicker", str: 1340 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over 5's, 7 Kicker", str: 1341 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 5's, 6 Kicker", str: 1342 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over 5's, 4 Kicker", str: 1343 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over 5's, 3 Kicker", str: 1344 };
  else if (cardData.king >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over 5's, 2 Kicker", str: 1345 };
  //
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 4's, Ace Kicker", str: 1346 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 4's, Queen Kicker", str: 1347 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 4's, Jack Kicker", str: 1348 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 4's, 10 Kicker", str: 1349 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over 4's, 9 Kicker", str: 1350 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over 4's, 8 Kicker", str: 1351 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over 4's, 7 Kicker", str: 1352 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 4's, 6 Kicker", str: 1353 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over 4's, 5 Kicker", str: 1354 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over 4's, 3 Kicker", str: 1355 };
  else if (cardData.king >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over 4's, 2 Kicker", str: 1356 };
  //
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 3's, Ace Kicker", str: 1357 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 3's, Queen Kicker", str: 1358 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 3's, Jack Kicker", str: 1359 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 3's, 10 Kicker", str: 1360 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over 3's, 9 Kicker", str: 1361 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over 3's, 8 Kicker", str: 1362 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over 3's, 7 Kicker", str: 1363 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 3's, 6 Kicker", str: 1364 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over 3's, 5 Kicker", str: 1365 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over 3's, 4 Kicker", str: 1366 };
  else if (cardData.king >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Kings over 3's, 2 Kicker", str: 1367 };
  //
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Kings over 2's, Ace Kicker", str: 1368 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Kings over 2's, Queen Kicker", str: 1369 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Kings over 2's, Jack Kicker", str: 1370 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Kings over 2's, 10 Kicker", str: 1371 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Kings over 2's, 9 Kicker", str: 1372 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Kings over 2's, 8 Kicker", str: 1373 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Kings over 2's, 7 Kicker", str: 1374 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Kings over 2's, 6 Kicker", str: 1375 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Kings over 2's, 5 Kicker", str: 1376 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Kings over 2's, 4 Kicker", str: 1377 };
  else if (cardData.king >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Kings over 2's, 3 Kicker", str: 1378 };
  // two pairs, queens over...
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over Jacks, Ace Kicker", str: 1379 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over Jacks, King Kicker", str: 1380 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over Jacks, 10 Kicker", str: 1381 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over Jacks, 9 Kicker", str: 1382 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over Jacks, 8 Kicker", str: 1383 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over Jacks, 7 Kicker", str: 1384 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over Jacks, 6 Kicker", str: 1385 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Queens over Jacks, 5 Kicker", str: 1386 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over Jacks, 4 Kicker", str: 1387 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over Jacks, 3 Kicker", str: 1388 };
  else if (cardData.queen >= 2 && cardData.jack >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over Jacks, 2 Kicker", str: 1389 };
  //
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.ace)
    r = { hand: "Two Pair Queens over 10's, Ace Kicker", str: 1390 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.king)
    r = { hand: "Two Pair Queens over 10's, King Kicker", str: 1391 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.jack)
    r = { hand: "Two Pair Queens over 10's, Jack Kicker", str: 1392 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.nine)
    r = { hand: "Two Pair Queens over 10's, 9 Kicker", str: 1393 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.eight)
    r = { hand: "Two Pair Queens over 10's, 8 Kicker", str: 1394 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.seven)
    r = { hand: "Two Pair Queens over 10's, 7 Kicker", str: 1395 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.six)
    r = { hand: "Two Pair Queens over 10's, 6 Kicker", str: 1396 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.five)
    r = { hand: "Two Pair Queens over 10's, 5 Kicker", str: 1397 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.four)
    r = { hand: "Two Pair Queens over 10's, 4 Kicker", str: 1398 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.three)
    r = { hand: "Two Pair Queens over 10's, 3 Kicker", str: 1399 };
  else if (cardData.queen >= 2 && cardData.ten >= 2 && cardData.two)
    r = { hand: "Two Pair Queens over 10's, 2 Kicker", str: 1400 };
  //
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 9's, Ace Kicker", str: 1401 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 9's, King Kicker", str: 1402 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 9's, Jack Kicker", str: 1403 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 9's, 10 Kicker", str: 1404 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over 9's, 8 Kicker", str: 1405 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over 9's, 7 Kicker", str: 1406 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 9's, 6 Kicker", str: 1407 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Queens over 9's, 5 Kicker", str: 1408 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over 9's, 4 Kicker", str: 1409 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over 9's, 3 Kicker", str: 1410 };
  else if (cardData.queen >= 2 && cardData.nine >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over 9's, 2 Kicker", str: 1411 };
  //
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 8's, Ace Kicker", str: 1412 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 8's, King Kicker", str: 1413 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 8's, Jack Kicker", str: 1414 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 8's, 10 Kicker", str: 1415 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over 8's, 9 Kicker", str: 1416 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over 8's, 7 Kicker", str: 1417 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 8's, 6 Kicker", str: 1418 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Queens over 8's, 5 Kicker", str: 1419 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over 8's, 4 Kicker", str: 1420 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over 8's, 3 Kicker", str: 1421 };
  else if (cardData.queen >= 2 && cardData.eight >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over 8's, 2 Kicker", str: 1422 };
  //
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 7's, Ace Kicker", str: 1423 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 7's, King Kicker", str: 1424 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 7's, Jack Kicker", str: 1425 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 7's, 10 Kicker", str: 1426 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over 7's, 9 Kicker", str: 1427 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over 7's, 8 Kicker", str: 1428 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 7's, 6 Kicker", str: 1429 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Queens over 7's, 5 Kicker", str: 1430 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over 7's, 4 Kicker", str: 1431 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over 7's, 3 Kicker", str: 1432 };
  else if (cardData.queen >= 2 && cardData.seven >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over 7's, 2 Kicker", str: 1433 };
  //
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 6's, Ace Kicker", str: 1434 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 6's, King Kicker", str: 1435 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 6's, Jack Kicker", str: 1436 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 6's, 10 Kicker", str: 1437 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over 6's, 9 Kicker", str: 1438 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over 6's, 8 Kicker", str: 1439 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over 6's, 7 Kicker", str: 1440 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 6's, 5 Kicker", str: 1441 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over 6's, 4 Kicker", str: 1442 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over 6's, 3 Kicker", str: 1443 };
  else if (cardData.queen >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over 6's, 2 Kicker", str: 1444 };
  //
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 5's, Ace Kicker", str: 1445 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 5's, King Kicker", str: 1446 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 5's, Jack Kicker", str: 1447 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 5's, 10 Kicker", str: 1448 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over 5's, 9 Kicker", str: 1449 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over 5's, 8 Kicker", str: 1450 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over 5's, 7 Kicker", str: 1451 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 5's, 6 Kicker", str: 1452 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over 5's, 4 Kicker", str: 1453 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over 5's, 3 Kicker", str: 1454 };
  else if (cardData.queen >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over 5's, 2 Kicker", str: 1455 };
  //
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 4's, Ace Kicker", str: 1456 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 4's, King Kicker", str: 1457 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 4's, Jack Kicker", str: 1458 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 4's, 10 Kicker", str: 1459 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over 4's, 9 Kicker", str: 1460 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over 4's, 8 Kicker", str: 1461 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over 4's, 7 Kicker", str: 1462 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 4's, 6 Kicker", str: 1463 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Queens over 4's, 5 Kicker", str: 1464 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over 4's, 3 Kicker", str: 1465 };
  else if (cardData.queen >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over 4's, 2 Kicker", str: 1466 };
  //
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 3's, Ace Kicker", str: 1467 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 3's, King Kicker", str: 1468 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 3's, Jack Kicker", str: 1469 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 3's, 10 Kicker", str: 1470 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over 3's, 9 Kicker", str: 1471 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over 3's, 8 Kicker", str: 1472 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over 3's, 7 Kicker", str: 1473 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 3's, 6 Kicker", str: 1474 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Queens over 3's, 5 Kicker", str: 1475 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over 3's, 4 Kicker", str: 1476 };
  else if (cardData.queen >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Queens over 3's, 2 Kicker", str: 1477 };
  //
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Queens over 2's, Ace Kicker", str: 1478 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Queens over 2's, King Kicker", str: 1479 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair Queens over 2's, Jack Kicker", str: 1480 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Queens over 2's, 10 Kicker", str: 1481 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Queens over 2's, 9 Kicker", str: 1482 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Queens over 2's, 8 Kicker", str: 1483 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Queens over 2's, 7 Kicker", str: 1484 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Queens over 2's, 6 Kicker", str: 1485 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Queens over 2's, 5 Kicker", str: 1486 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Queens over 2's, 4 Kicker", str: 1487 };
  else if (cardData.queen >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Queens over 2's, 3 Kicker", str: 1488 };
  // two pairs, jacks over...
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.ace)
    r = { hand: "Two Pair Jacks over 10's, Ace Kicker", str: 1489 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.king)
    r = { hand: "Two Pair Jacks over 10's, King Kicker", str: 1490 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.queen)
    r = { hand: "Two Pair Jacks over 10's, Queen Kicker", str: 1491 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.nine)
    r = { hand: "Two Pair Jacks over 10's, 9 Kicker", str: 1492 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.eight)
    r = { hand: "Two Pair Jacks over 10's, 8 Kicker", str: 1493 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.seven)
    r = { hand: "Two Pair Jacks over 10's, 7 Kicker", str: 1494 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.six)
    r = { hand: "Two Pair Jacks over 10's, 6 Kicker", str: 1495 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.five)
    r = { hand: "Two Pair Jacks over 10's, 5 Kicker", str: 1496 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.four)
    r = { hand: "Two Pair Jacks over 10's, 4 Kicker", str: 1497 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.three)
    r = { hand: "Two Pair Jacks over 10's, 3 Kicker", str: 1498 };
  else if (cardData.jack >= 2 && cardData.ten >= 2 && cardData.two)
    r = { hand: "Two Pair Jacks over 10's, 2 Kicker", str: 1499 };
  //
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 9's, Ace Kicker", str: 1500 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 9's, King Kicker", str: 1501 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 9's, Queen Kicker", str: 1502 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 9's, 10 Kicker", str: 1503 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Jacks over 9's, 8 Kicker", str: 1504 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Jacks over 9's, 7 Kicker", str: 1505 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 9's, 6 Kicker", str: 1506 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Jacks over 9's, 5 Kicker", str: 1507 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Jacks over 9's, 4 Kicker", str: 1508 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Jacks over 9's, 3 Kicker", str: 1509 };
  else if (cardData.jack >= 2 && cardData.nine >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Jacks over 9's, 2 Kicker", str: 1510 };
  //
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 8's, Ace Kicker", str: 1511 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 8's, King Kicker", str: 1512 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 8's, Queen Kicker", str: 1513 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 8's, 10 Kicker", str: 1514 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Jacks over 8's, 9 Kicker", str: 1515 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Jacks over 8's, 7 Kicker", str: 1516 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 8's, 6 Kicker", str: 1517 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Jacks over 8's, 5 Kicker", str: 1518 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Jacks over 8's, 4 Kicker", str: 1519 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Jacks over 8's, 3 Kicker", str: 1520 };
  else if (cardData.jack >= 2 && cardData.eight >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Jacks over 8's, 2 Kicker", str: 1521 };
  //
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 7's, Ace Kicker", str: 1522 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 7's, King Kicker", str: 1523 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 7's, Queen Kicker", str: 1524 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 7's, 10 Kicker", str: 1525 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Jacks over 7's, 9 Kicker", str: 1526 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Jacks over 7's, 8 Kicker", str: 1527 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 7's, 6 Kicker", str: 1528 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Jacks over 7's, 5 Kicker", str: 1529 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Jacks over 7's, 4 Kicker", str: 1530 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Jacks over 7's, 3 Kicker", str: 1531 };
  else if (cardData.jack >= 2 && cardData.seven >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Jacks over 7's, 2 Kicker", str: 1532 };
  //
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 6's, Ace Kicker", str: 1533 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 6's, King Kicker", str: 1534 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 6's, Queen Kicker", str: 1535 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 6's, 10 Kicker", str: 1536 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Jacks over 6's, 9 Kicker", str: 1537 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Jacks over 6's, 8 Kicker", str: 1538 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Jacks over 6's, 7 Kicker", str: 1539 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 6's, 5 Kicker", str: 1540 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Jacks over 6's, 4 Kicker", str: 1541 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Jacks over 6's, 3 Kicker", str: 1542 };
  else if (cardData.jack >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Jacks over 6's, 2 Kicker", str: 1543 };
  //
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 5's, Ace Kicker", str: 1544 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 5's, King Kicker", str: 1545 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 5's, Queen Kicker", str: 1546 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 5's, 10 Kicker", str: 1547 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Jacks over 5's, 9 Kicker", str: 1548 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Jacks over 5's, 8 Kicker", str: 1549 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Jacks over 5's, 7 Kicker", str: 1550 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 5's, 6 Kicker", str: 1551 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Jacks over 5's, 4 Kicker", str: 1552 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Jacks over 5's, 3 Kicker", str: 1553 };
  else if (cardData.jack >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Jacks over 5's, 2 Kicker", str: 1554 };
  //
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 4's, Ace Kicker", str: 1555 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 4's, King Kicker", str: 1556 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 4's, Queen Kicker", str: 1557 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 4's, 10 Kicker", str: 1558 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Jacks over 4's, 9 Kicker", str: 1559 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Jacks over 4's, 8 Kicker", str: 1560 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Jacks over 4's, 7 Kicker", str: 1561 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 4's, 6 Kicker", str: 1562 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Jacks over 4's, 5 Kicker", str: 1563 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Jacks over 4's, 3 Kicker", str: 1564 };
  else if (cardData.jack >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Jacks over 4's, 2 Kicker", str: 1565 };
  //
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 3's, Ace Kicker", str: 1566 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 3's, King Kicker", str: 1567 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 3's, Queen Kicker", str: 1568 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 3's, 10 Kicker", str: 1569};
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Jacks over 3's, 9 Kicker", str: 1570 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Jacks over 3's, 8 Kicker", str: 1571 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Jacks over 3's, 7 Kicker", str: 1572 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 3's, 6 Kicker", str: 1573 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Jacks over 3's, 5 Kicker", str: 1574 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Jacks over 3's, 4 Kicker", str: 1575 };
  else if (cardData.jack >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair Jacks over 3's, 2 Kicker", str: 1576 };
  //
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair Jacks over 2's, Ace Kicker", str: 1577 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair Jacks over 2's, King Kicker", str: 1578 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair Jacks over 2's, Queen Kicker", str: 1579 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair Jacks over 2's, 10 Kicker", str: 1580 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair Jacks over 2's, 9 Kicker", str: 1581 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair Jacks over 2's, 8 Kicker", str: 1582 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair Jacks over 2's, 7 Kicker", str: 1583 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair Jacks over 2's, 6 Kicker", str: 1584 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair Jacks over 2's, 5 Kicker", str: 1585 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair Jacks over 2's, 4 Kicker", str: 1586 };
  else if (cardData.jack >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair Jacks over 2's, 3 Kicker", str: 1587 }; 
  // two pairs, 10's over...
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 9's, Ace Kicker", str: 1588 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 9's, King Kicker", str: 1589 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 9's, Queen Kicker", str: 1590 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 9's, Jack Kicker", str: 1591 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 10's over 9's, 8 Kicker", str: 1592 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 10's over 9's, 7 Kicker", str: 1593 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 9's, 6 Kicker", str: 1594 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 10's over 9's, 5 Kicker", str: 1595 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 10's over 9's, 4 Kicker", str: 1596 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 10's over 9's, 3 Kicker", str: 1597 };
  else if (cardData.ten >= 2 && cardData.nine >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 10's over 9's, 2 Kicker", str: 1598 };
  //
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 8's, Ace Kicker", str: 1599 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 8's, King Kicker", str: 1600 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 8's, Queen Kicker", str: 1601 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 8's, Jack Kicker", str: 1602 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 10's over 8's, 9 Kicker", str: 1603 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 10's over 8's, 7 Kicker", str: 1604 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 8's, 6 Kicker", str: 1605 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 10's over 8's, 5 Kicker", str: 1606 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 10's over 8's, 4 Kicker", str: 1607 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 10's over 8's, 3 Kicker", str: 1608 };
  else if (cardData.ten >= 2 && cardData.eight >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 10's over 8's, 2 Kicker", str: 1609 };
  //
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 7's, Ace Kicker", str: 1610 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 7's, King Kicker", str: 1611 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 7's, Queen Kicker", str: 1612 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 7's, Jack Kicker", str: 1613 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 10's over 7's, 9 Kicker", str: 1614 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 10's over 7's, 8 Kicker", str: 1615 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 7's, 6 Kicker", str: 1616 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 10's over 7's, 5 Kicker", str: 1617 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 10's over 7's, 4 Kicker", str: 1618 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 10's over 7's, 3 Kicker", str: 1619 };
  else if (cardData.ten >= 2 && cardData.seven >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 10's over 7's, 2 Kicker", str: 1620 };
  //
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 6's, Ace Kicker", str: 1621 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 6's, King Kicker", str: 1622 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 6's, Queen Kicker", str: 1623 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 6's, Jack Kicker", str: 1624 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 10's over 6's, 9 Kicker", str: 1625 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 10's over 6's, 8 Kicker", str: 1626 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 10's over 6's, 7 Kicker", str: 1627 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 6's, 5 Kicker", str: 1628 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 10's over 6's, 4 Kicker", str: 1629 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 10's over 6's, 3 Kicker", str: 1630 };
  else if (cardData.ten >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 10's over 6's, 2 Kicker", str: 1631 };
  //
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 5's, Ace Kicker", str: 1632 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 5's, King Kicker", str: 1633 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 5's, Queen Kicker", str: 1634 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 5's, Jack Kicker", str: 1635 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 10's over 5's, 9 Kicker", str: 1636 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 10's over 5's, 8 Kicker", str: 1637 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 10's over 5's, 7 Kicker", str: 1638 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 5's, 6 Kicker", str: 1639 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 10's over 5's, 4 Kicker", str: 1640 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 10's over 5's, 3 Kicker", str: 1641 };
  else if (cardData.ten >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 10's over 5's, 2 Kicker", str: 1642 };
  //
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 4's, Ace Kicker", str: 1643 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 4's, King Kicker", str: 1644 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 4's, Queen Kicker", str: 1645 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 4's, Jack Kicker", str: 1646 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 10's over 4's, 9 Kicker", str: 1647 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 10's over 4's, 8 Kicker", str: 1648 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 10's over 4's, 7 Kicker", str: 1649 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 4's, 6 Kicker", str: 1650 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 10's over 4's, 5 Kicker", str: 1651 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 10's over 4's, 3 Kicker", str: 1652 };
  else if (cardData.ten >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 10's over 4's, 2 Kicker", str: 1653 };
  //
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 3's, Ace Kicker", str: 1654 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 3's, King Kicker", str: 1655 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 3's, Queen Kicker", str: 1656 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 3's, Jack Kicker", str: 1657 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 10's over 3's, 9 Kicker", str: 1658 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 10's over 3's, 8 Kicker", str: 1659 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 10's over 3's, 7 Kicker", str: 1660 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 3's, 6 Kicker", str: 1661 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 10's over 3's, 5 Kicker", str: 1662 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 10's over 3's, 4 Kicker", str: 1663 };
  else if (cardData.ten >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 10's over 3's, 2 Kicker", str: 1664 };
  //
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 10's over 2's, Ace Kicker", str: 1665 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 10's over 2's, King Kicker", str: 1666 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 10's over 2's, Queen Kicker", str: 1667 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 10's over 2's, Jack Kicker", str: 1668 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 10's over 2's, 9 Kicker", str: 1669 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 10's over 2's, 8 Kicker", str: 1670 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 10's over 2's, 7 Kicker", str: 1671 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 10's over 2's, 6 Kicker", str: 1672 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 10's over 2's, 5 Kicker", str: 1673 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 10's over 2's, 4 Kicker", str: 1674 };
  else if (cardData.ten >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 10's over 2's, 3 Kicker", str: 1675 };
  // two pairs, 9's over...
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 9's over 8's, Ace Kicker", str: 1676 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 9's over 8's, King Kicker", str: 1677 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 9's over 8's, Queen Kicker", str: 1678 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 9's over 8's, Jack Kicker", str: 1679 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 9's over 8's, 10 Kicker", str: 1680 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 9's over 8's, 7 Kicker", str: 1681 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 9's over 8's, 6 Kicker", str: 1682 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 9's over 8's, 5 Kicker", str: 1683 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 9's over 8's, 4 Kicker", str: 1684 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 9's over 8's, 3 Kicker", str: 1685 };
  else if (cardData.nine >= 2 && cardData.eight >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 9's over 8's, 2 Kicker", str: 1686 };
  //
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 9's over 7's, Ace Kicker", str: 1687 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 9's over 7's, King Kicker", str: 1688 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 9's over 7's, Queen Kicker", str: 1689 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 9's over 7's, Jack Kicker", str: 1690 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 9's over 7's, 10 Kicker", str: 1691 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 9's over 7's, 8 Kicker", str: 1692 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 9's over 7's, 6 Kicker", str: 1693 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 9's over 7's, 5 Kicker", str: 1694 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 9's over 7's, 4 Kicker", str: 1695 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 9's over 7's, 3 Kicker", str: 1696 };
  else if (cardData.nine >= 2 && cardData.seven >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 9's over 7's, 2 Kicker", str: 1697 };
  //
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 9's over 6's, Ace Kicker", str: 1698 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 9's over 6's, King Kicker", str: 1699 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 9's over 6's, Queen Kicker", str: 1700 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 9's over 6's, Jack Kicker", str: 1701 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 9's over 6's, 10 Kicker", str: 1702 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 9's over 6's, 8 Kicker", str: 1703 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 9's over 6's, 7 Kicker", str: 1704 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 9's over 6's, 5 Kicker", str: 1705 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 9's over 6's, 4 Kicker", str: 1706 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 9's over 6's, 3 Kicker", str: 1707 };
  else if (cardData.nine >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 9's over 6's, 2 Kicker", str: 1708 };
  //
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 9's over 5's, Ace Kicker", str: 1709 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 9's over 5's, King Kicker", str: 1710 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 9's over 5's, Queen Kicker", str: 1711 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 9's over 5's, Jack Kicker", str: 1712 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 9's over 5's, 10 Kicker", str: 1713 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 9's over 5's, 8 Kicker", str: 1714 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 9's over 5's, 7 Kicker", str: 1715 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 9's over 5's, 6 Kicker", str: 1716 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 9's over 5's, 4 Kicker", str: 1717 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 9's over 5's, 3 Kicker", str: 1718 };
  else if (cardData.nine >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 9's over 5's, 2 Kicker", str: 1719 };
  //
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 9's over 4's, Ace Kicker", str: 1720 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 9's over 4's, King Kicker", str: 1721 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 9's over 4's, Queen Kicker", str: 1722 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 9's over 4's, Jack Kicker", str: 1723 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 9's over 4's, 10 Kicker", str: 1724 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 9's over 4's, 8 Kicker", str: 1725 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 9's over 4's, 7 Kicker", str: 1726 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 9's over 4's, 6 Kicker", str: 1727 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 9's over 4's, 5 Kicker", str: 1728 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 9's over 4's, 3 Kicker", str: 1729 };
  else if (cardData.nine >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 9's over 4's, 2 Kicker", str: 1730 };
  //
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 9's over 3's, Ace Kicker", str: 1731 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 9's over 3's, King Kicker", str: 1732 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 9's over 3's, Queen Kicker", str: 1733 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 9's over 3's, Jack Kicker", str: 1734 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 9's over 3's, 10 Kicker", str: 1735 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 9's over 3's, 8 Kicker", str: 1736};
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 9's over 3's, 7 Kicker", str: 1737 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 9's over 3's, 6 Kicker", str: 1738 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 9's over 3's, 5 Kicker", str: 1739 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 9's over 3's, 4 Kicker", str: 1740 };
  else if (cardData.nine >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 9's over 3's, 2 Kicker", str: 1741 };
  //
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 9's over 2's, Ace Kicker", str: 1742 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 9's over 2's, King Kicker", str: 1743 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 9's over 2's, Queen Kicker", str: 1744 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 9's over 2's, Jack Kicker", str: 1745 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 9's over 2's, 10 Kicker", str: 1746 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 9's over 2's, 8 Kicker", str: 1747 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 9's over 2's, 7 Kicker", str: 1748 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 9's over 2's, 6 Kicker", str: 1749 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 9's over 2's, 5 Kicker", str: 1750 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 9's over 2's, 4 Kicker", str: 1751 };
  else if (cardData.nine >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 9's over 2's, 3 Kicker", str: 1752 };

  // two pairs, 8's over...
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 8's over 7's, Ace Kicker", str: 1753 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 8's over 7's, King Kicker", str: 1754 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 8's over 7's, Queen Kicker", str: 1755 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 8's over 7's, Jack Kicker", str: 1756 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 8's over 7's, 10 Kicker", str: 1757 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 8's over 7's, 9 Kicker", str: 1758 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 8's over 7's, 6 Kicker", str: 1759 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 8's over 7's, 5 Kicker", str: 1760 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 8's over 7's, 4 Kicker", str: 1761 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 8's over 7's, 3 Kicker", str: 1762 };
  else if (cardData.eight >= 2 && cardData.seven >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 8's over 7's, 2 Kicker", str: 1763 };
  //
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 8's over 6's, Ace Kicker", str: 1764 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 8's over 6's, King Kicker", str: 1765 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 8's over 6's, Queen Kicker", str: 1766 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 8's over 6's, Jack Kicker", str: 1767 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 8's over 6's, 10 Kicker", str: 1768 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 8's over 6's, 9 Kicker", str: 1769 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 8's over 6's, 7 Kicker", str: 1770 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 8's over 6's, 5 Kicker", str: 1771 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 8's over 6's, 4 Kicker", str: 1772 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 8's over 6's, 3 Kicker", str: 1773 };
  else if (cardData.eight >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 8's over 6's, 2 Kicker", str: 1774 };
  //
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 8's over 5's, Ace Kicker", str: 1775 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 8's over 5's, King Kicker", str: 1776 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 8's over 5's, Queen Kicker", str: 1777 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 8's over 5's, Jack Kicker", str: 1778 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 8's over 5's, 10 Kicker", str: 1779 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 8's over 5's, 9 Kicker", str: 1780 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 8's over 5's, 7 Kicker", str: 1781 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 8's over 5's, 6 Kicker", str: 1782 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 8's over 5's, 4 Kicker", str: 1783 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 8's over 5's, 3 Kicker", str: 1784 };
  else if (cardData.eight >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 8's over 5's, 2 Kicker", str: 1785 };
  //
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 8's over 4's, Ace Kicker", str: 1786 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 8's over 4's, King Kicker", str: 1787 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 8's over 4's, Queen Kicker", str: 1788 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 8's over 4's, Jack Kicker", str: 1789 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 8's over 4's, 10 Kicker", str: 1790 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 8's over 4's, 9 Kicker", str: 1791 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 8's over 4's, 7 Kicker", str: 1792 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 8's over 4's, 6 Kicker", str: 1793 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 8's over 4's, 5 Kicker", str: 1794 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 8's over 4's, 3 Kicker", str: 1795 };
  else if (cardData.eight >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 8's over 4's, 2 Kicker", str: 1796 };
  //
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 8's over 3's, Ace Kicker", str: 1797 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 8's over 3's, King Kicker", str: 1798 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 8's over 3's, Queen Kicker", str: 1799 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 8's over 3's, Jack Kicker", str: 1800 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 8's over 3's, 10 Kicker", str: 1801 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 8's over 3's, 9 Kicker", str: 1802 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 8's over 3's, 7 Kicker", str: 1803 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 8's over 3's, 6 Kicker", str: 1804 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 8's over 3's, 5 Kicker", str: 1805 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 8's over 3's, 4 Kicker", str: 1806 };
  else if (cardData.eight >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 8's over 3's, 2 Kicker", str: 1807 };
  //
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 8's over 2's, Ace Kicker", str: 1808 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 8's over 2's, King Kicker", str: 1809 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 8's over 2's, Queen Kicker", str: 1810 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 8's over 2's, Jack Kicker", str: 1811 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 8's over 2's, 10 Kicker", str: 1812 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 8's over 2's, 9 Kicker", str: 1813 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 8's over 2's, 7 Kicker", str: 1814 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 8's over 2's, 6 Kicker", str: 1815 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 8's over 2's, 5 Kicker", str: 1816 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 8's over 2's, 4 Kicker", str: 1817 };
  else if (cardData.eight >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 8's over 2's, 3 Kicker", str: 1818 };
  // two pairs, 7's over...
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 7's over 6's, Ace Kicker", str: 1819 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 7's over 6's, King Kicker", str: 1820 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 7's over 6's, Queen Kicker", str: 1821 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 7's over 6's, Jack Kicker", str: 1822 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 7's over 6's, 10 Kicker", str: 1823 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 7's over 6's, 9 Kicker", str: 1824 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 7's over 6's, 8 Kicker", str: 1825 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 7's over 6's, 5 Kicker", str: 1826 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 7's over 6's, 4 Kicker", str: 1827 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 7's over 6's, 3 Kicker", str: 1828 };
  else if (cardData.seven >= 2 && cardData.six >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 7's over 6's, 2 Kicker", str: 1829 };
  //
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 7's over 5's, Ace Kicker", str: 1830 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 7's over 5's, King Kicker", str: 1831 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 7's over 5's, Queen Kicker", str: 1832 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 7's over 5's, Jack Kicker", str: 1833 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 7's over 5's, 10 Kicker", str: 1834 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 7's over 5's, 9 Kicker", str: 1835 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 7's over 5's, 8 Kicker", str: 1836 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 7's over 5's, 6 Kicker", str: 1837 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 7's over 5's, 4 Kicker", str: 1838 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 7's over 5's, 3 Kicker", str: 1839 };
  else if (cardData.seven >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 7's over 5's, 2 Kicker", str: 1840 };
  //
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 7's over 4's, Ace Kicker", str: 1841 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 7's over 4's, King Kicker", str: 1842 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 7's over 4's, Queen Kicker", str: 1843 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 7's over 4's, Jack Kicker", str: 1844 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 7's over 4's, 10 Kicker", str: 1845 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 7's over 4's, 9 Kicker", str: 1846 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 7's over 4's, 8 Kicker", str: 1847 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 7's over 4's, 6 Kicker", str: 1848 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 7's over 4's, 5 Kicker", str: 1849 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 7's over 4's, 3 Kicker", str: 1850 };
  else if (cardData.seven >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 7's over 4's, 2 Kicker", str: 1851 };
  //
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 7's over 3's, Ace Kicker", str: 1852 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 7's over 3's, King Kicker", str: 1853 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 7's over 3's, Queen Kicker", str: 1854 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 7's over 3's, Jack Kicker", str: 1855 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 7's over 3's, 10 Kicker", str: 1856 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 7's over 3's, 9 Kicker", str: 1857 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 7's over 3's, 8 Kicker", str: 1858 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 7's over 3's, 6 Kicker", str: 1859 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 7's over 3's, 5 Kicker", str: 1860 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 7's over 3's, 4 Kicker", str: 1861 };
  else if (cardData.seven >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 7's over 3's, 2 Kicker", str: 1862 };
  //
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 7's over 2's, Ace Kicker", str: 1863 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 7's over 2's, King Kicker", str: 1864 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 7's over 2's, Queen Kicker", str: 1865 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 7's over 2's, Jack Kicker", str: 1866 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 7's over 2's, 10 Kicker", str: 1867 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 7's over 2's, 9 Kicker", str: 1868 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 7's over 2's, 8 Kicker", str: 1869 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 7's over 2's, 6 Kicker", str: 1870 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 7's over 2's, 5 Kicker", str: 1871 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 7's over 2's, 4 Kicker", str: 1872 };
  else if (cardData.seven >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 7's over 2's, 3 Kicker", str: 1873 };
  // two pairs, 6's over...
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 6's over 5's, Ace Kicker", str: 1874 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 6's over 5's, King Kicker", str: 1875 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 6's over 5's, Queen Kicker", str: 1876 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 6's over 5's, Jack Kicker", str: 1877 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 6's over 5's, 10 Kicker", str: 1878 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 6's over 5's, 9 Kicker", str: 1879 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 6's over 5's, 8 Kicker", str: 1880 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 6's over 5's, 7 Kicker", str: 1881 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 6's over 5's, 4 Kicker", str: 1882 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 6's over 5's, 3 Kicker", str: 1883 };
  else if (cardData.six >= 2 && cardData.five >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 6's over 5's, 2 Kicker", str: 1884 };
  //
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 6's over 4's, Ace Kicker", str: 1885 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 6's over 4's, King Kicker", str: 1886 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 6's over 4's, Queen Kicker", str: 1887 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 6's over 4's, Jack Kicker", str: 1888 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 6's over 4's, 10 Kicker", str: 1889 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 6's over 4's, 9 Kicker", str: 1890 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 6's over 4's, 8 Kicker", str: 1891 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 6's over 4's, 7 Kicker", str: 1892 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 6's over 4's, 5 Kicker", str: 1893 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 6's over 4's, 3 Kicker", str: 1894 };
  else if (cardData.six >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 6's over 4's, 2 Kicker", str: 1895 };
  //
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 6's over 3's, Ace Kicker", str: 1896 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 6's over 3's, King Kicker", str: 1897 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 6's over 3's, Queen Kicker", str: 1898 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 6's over 3's, Jack Kicker", str: 1899 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 6's over 3's, 10 Kicker", str: 1900 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 6's over 3's, 9 Kicker", str: 1901 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 6's over 3's, 8 Kicker", str: 1902 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 6's over 3's, 7 Kicker", str: 1903 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 6's over 3's, 5 Kicker", str: 1904 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 6's over 3's, 4 Kicker", str: 1905 };
  else if (cardData.six >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 6's over 3's, 2 Kicker", str: 1906 };
  //
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 6's over 2's, Ace Kicker", str: 1907 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 6's over 2's, King Kicker", str: 1908 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 6's over 2's, Queen Kicker", str: 1909 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 6's over 2's, Jack Kicker", str: 1910 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 6's over 2's, 10 Kicker", str: 1911 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 6's over 2's, 9 Kicker", str: 1912 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 6's over 2's, 8 Kicker", str: 1913 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 6's over 2's, 7 Kicker", str: 1914 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.five >= 1)
    r = { hand: "Two Pair 6's over 2's, 5 Kicker", str: 1915 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 6's over 2's, 4 Kicker", str: 1916 };
  else if (cardData.six >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 6's over 2's, 3 Kicker", str: 1917 };
  // two pairs, 5's over...
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 5's over 4's, Ace Kicker", str: 1918 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 5's over 4's, King Kicker", str: 1919 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 5's over 4's, Queen Kicker", str: 1920 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 5's over 4's, Jack Kicker", str: 1921 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 5's over 4's, 10 Kicker", str: 1922 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 5's over 4's, 9 Kicker", str: 1923 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 5's over 4's, 8 Kicker", str: 1924 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 5's over 4's, 7 Kicker", str: 1925 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 5's over 4's, 6 Kicker", str: 1926 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 5's over 4's, 3 Kicker", str: 1927 };
  else if (cardData.five >= 2 && cardData.four >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 5's over 4's, 2 Kicker", str: 1928 };
  //
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 5's over 3's, Ace Kicker", str: 1929 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 5's over 3's, King Kicker", str: 1930 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 5's over 3's, Queen Kicker", str: 1931 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 5's over 3's, Jack Kicker", str: 1932 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 5's over 3's, 10 Kicker", str: 1933 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 5's over 3's, 9 Kicker", str: 1934 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 5's over 3's, 8 Kicker", str: 1935 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 5's over 3's, 7 Kicker", str: 1936 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 5's over 3's, 6 Kicker", str: 1937 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 5's over 3's, 4 Kicker", str: 1938 };
  else if (cardData.five >= 2 && cardData.three >= 2 && cardData.two >= 1)
    r = { hand: "Two Pair 5's over 3's, 2 Kicker", str: 1939 };
  //
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.ace >= 1)
    r = { hand: "Two Pair 5's over 2's, Ace Kicker", str: 1940 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.king >= 1)
    r = { hand: "Two Pair 5's over 2's, King Kicker", str: 1941 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.queen >= 1)
    r = { hand: "Two Pair 5's over 2's, Queen Kicker", str: 1942 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.jack >= 1)
    r = { hand: "Two Pair 5's over 2's, Jack Kicker", str: 1943 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.ten >= 1)
    r = { hand: "Two Pair 5's over 2's, 10 Kicker", str: 1944 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.nine >= 1)
    r = { hand: "Two Pair 5's over 2's, 9 Kicker", str: 1945 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.eight >= 1)
    r = { hand: "Two Pair 5's over 2's, 8 Kicker", str: 1946 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.seven >= 1)
    r = { hand: "Two Pair 5's over 2's, 7 Kicker", str: 1947 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.six >= 1)
    r = { hand: "Two Pair 5's over 2's, 6 Kicker", str: 1948 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.four >= 1)
    r = { hand: "Two Pair 5's over 2's, 4 Kicker", str: 1949 };
  else if (cardData.five >= 2 && cardData.two >= 2 && cardData.three >= 1)
    r = { hand: "Two Pair 5's over 2's, 3 Kicker", str: 1950 };
  // two pairs, 4's over...
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.ace >= 1)
  r = { hand: "Two Pair 4's over 3's, Ace Kicker", str: 1951 };
else if (cardData.four >= 2 && cardData.three >= 2 && cardData.king >= 1)
  r = { hand: "Two Pair 4's over 3's, King Kicker", str: 1952 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.queen >= 1)
  r = { hand: "Two Pair 4's over 3's, Queen Kicker", str: 1953 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.jack >= 1)
  r = { hand: "Two Pair 4's over 3's, Jack Kicker", str: 1954 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.ten >= 1)
  r = { hand: "Two Pair 4's over 3's, 10 Kicker", str: 1955 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.nine >= 1)
  r = { hand: "Two Pair 4's over 3's, 9 Kicker", str: 1956 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.eight >= 1)
  r = { hand: "Two Pair 4's over 3's, 8 Kicker", str: 1957 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.seven >= 1)
  r = { hand: "Two Pair 4's over 3's, 7 Kicker", str: 1958 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.six >= 1)
  r = { hand: "Two Pair 4's over 3's, 6 Kicker", str: 1959 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.five >= 1)
  r = { hand: "Two Pair 4's over 3's, 5 Kicker", str: 1960 };
  else if (cardData.four >= 2 && cardData.three >= 2 && cardData.two >= 1)
  r = { hand: "Two Pair 4's over 3's, 2 Kicker", str: 1961 };
//
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.ace >= 1)
  r = { hand: "Two Pair 4's over 2's, Ace Kicker", str: 1962 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.king >= 1)
  r = { hand: "Two Pair 4's over 2's, King Kicker", str: 1963 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.queen >= 1)
  r = { hand: "Two Pair 4's over 2's, Queen Kicker", str: 1964 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.jack >= 1)
  r = { hand: "Two Pair 4's over 2's, Jack Kicker", str: 1965 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.ten >= 1)
  r = { hand: "Two Pair 4's over 2's, 10 Kicker", str: 1966 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.nine >= 1)
  r = { hand: "Two Pair 4's over 2's, 9 Kicker", str: 1967 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.eight >= 1)
  r = { hand: "Two Pair 4's over 2's, 8 Kicker", str: 1968 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.seven >= 1)
  r = { hand: "Two Pair 4's over 2's, 7 Kicker", str: 1969 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.six >= 1)
  r = { hand: "Two Pair 4's over 2's, 6 Kicker", str: 1970 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.five >= 1)
  r = { hand: "Two Pair 4's over 2's, 5 Kicker", str: 1971 };
  else if (cardData.four >= 2 && cardData.two >= 2 && cardData.three >= 1)
  r = { hand: "Two Pair 4's over 2's, 3 Kicker", str: 1972 };
  // two pairs, 3's over...
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.ace >= 1)
  r = { hand: "Two Pair 3's over 2's, Ace Kicker", str: 1973 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.king >= 1)
  r = { hand: "Two Pair 3's over 2's, King Kicker", str: 1974 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.queen >= 1)
  r = { hand: "Two Pair 3's over 2's, Queen Kicker", str: 1975 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.jack >= 1)
  r = { hand: "Two Pair 3's over 2's, Jack Kicker", str: 1976 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.ten >= 1)
  r = { hand: "Two Pair 3's over 2's, 10 Kicker", str: 1977 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.nine >= 1)
  r = { hand: "Two Pair 3's over 2's, 9 Kicker", str: 1978 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.eight >= 1)
  r = { hand: "Two Pair 3's over 2's, 8 Kicker", str: 1979 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.seven >= 1)
  r = { hand: "Two Pair 3's over 2's, 7 Kicker", str: 1980 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.six >= 1)
  r = { hand: "Two Pair 3's over 2's, 6 Kicker", str: 1981 };
  else if (cardData.three >= 2 && cardData.two >= 2 && cardData.four >= 1)
  r = { hand: "Two Pair 3's over 2's, 4 Kicker", str: 1982 };

  // to do    |
  // to do    |
  // to do    V

  // PAIR // to do <-----------------------------------------------------------------------------------
  else if (cardData.ace >= 2) r = { hand: "Pair of Aces", str: 1204 };
  else if (cardData.king >= 2) r = { hand: "Pair of Kings", str: 1205 };
  else if (cardData.queen >= 2) r = { hand: "Pair of Queens", str: 1206 };
  else if (cardData.jack >= 2) r = { hand: "Pair of Jacks", str: 1207 };
  else if (cardData.ten >= 2) r = { hand: "Pair of 10's", str: 1208 };
  else if (cardData.nine >= 2) r = { hand: "Pair of 9's", str: 1209 };
  else if (cardData.eight >= 2) r = { hand: "Pair of 8's", str: 1210 };
  else if (cardData.seven >= 2) r = { hand: "Pair of 7's", str: 1211 };
  else if (cardData.six >= 2) r = { hand: "Pair of 6's", str: 1212 };
  else if (cardData.five >= 2) r = { hand: "Pair of 5's", str: 1213 };
  else if (cardData.four >= 2) r = { hand: "Pair of 4's", str: 1214 };
  else if (cardData.three >= 2) r = { hand: "Pair of 3's", str: 1215 };
  else if (cardData.two >= 2) r = { hand: "Pair of 2's", str: 1216 };
  // HIGH CARD
  else if (cardData.ace >= 1) r = { hand: "High Card Ace", str: 1217 };
  else if (cardData.king >= 1) r = { hand: "High Card King", str: 1218 };
  else if (cardData.queen >= 1) r = { hand: "High Card Queen", str: 1219 };
  else if (cardData.jack >= 1) r = { hand: "High Card Jack", str: 1220 };
  else if (cardData.ten >= 1) r = { hand: "High Card Ten", str: 1221 };
  else if (cardData.nine >= 1) r = { hand: "High Card Nine", str: 1222 };
  else if (cardData.eight >= 1) highStrength = { hand: "High Card Eight", strength: 1223 };
  else if (cardData.seven >= 1) r = { hand: "High Card Seven", str: 1224 };
  else if (cardData.six >= 1) r = { hand: "High Card Six", str: 1225 };
  else if (cardData.five >= 1) r = { hand: "High Card Five", str: 1226 };
  else if (cardData.four >= 1) r = { hand: "High Card Four", str: 1227 };
  else if (cardData.three >= 1) r = { hand: "High Card Three", str: 1228 };
  else if (cardData.two >= 1) r = { hand: "High Card Two", str: 1229 };

  // return
  return r;
}
