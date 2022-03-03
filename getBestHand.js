function getBestHand(playerData) {
  let cards = [...playerData, ...flopData, ...turnData, ...riverData];

  let royalFlush = "";
  let straightFlush = "";
  let fourOfAKind = "";
  let fullHouse = "";
  let flush = "";
  let straight = "";
  let isThreeOfAKind = "";
  let twoPair = "";
  let pair = "";
  let highCard = "";

  // data
  let playerHandValueCount = {
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

  let playerHandValue = [
    cards[0].value,
    cards[1].value,
    cards[2].value,
    cards[3].value,
    cards[4].value,
    cards[5].value,
    cards[6].value,
  ];

  let playerHand = [
    cards[0].name,
    cards[1].name,
    cards[2].name,
    cards[3].name,
    cards[4].name,
    cards[5].name,
    cards[6].name,
  ];

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].value === 2) playerHandValueCount.two += 1;
    if (cards[i].value === 3) playerHandValueCount.three += 1;
    if (cards[i].value === 4) playerHandValueCount.four += 1;
    if (cards[i].value === 5) playerHandValueCount.five += 1;
    if (cards[i].value === 6) playerHandValueCount.six += 1;
    if (cards[i].value === 7) playerHandValueCount.seven += 1;
    if (cards[i].value === 8) playerHandValueCount.eight += 1;
    if (cards[i].value === 9) playerHandValueCount.nine += 1;
    if (cards[i].value === 10) playerHandValueCount.ten += 1;
    if (cards[i].value === 11) playerHandValueCount.jack += 1;
    if (cards[i].value === 12) playerHandValueCount.queen += 1;
    if (cards[i].value === 13) playerHandValueCount.king += 1;
    if (cards[i].value === 14) playerHandValueCount.ace += 1;
  }

  // royal flush
  if (
    playerHand.some((c) => c === "A♥") &&
    playerHand.some((c) => c === "K♥") &&
    playerHand.some((c) => c === "Q♥") &&
    playerHand.some((c) => c === "J♥") &&
    playerHand.some((c) => c === "T♥")
  ) {
    royalFlush = "Royal Flush";
   }
  if (
    playerHand.some((c) => c === "A♦") &&
    playerHand.some((c) => c === "K♦") &&
    playerHand.some((c) => c === "Q♦") &&
    playerHand.some((c) => c === "J♦") &&
    playerHand.some((c) => c === "T♦")
  ) {
    royalFlush = "Royal Flush";
   }
  if (
    playerHand.some((c) => c === "A♠") &&
    playerHand.some((c) => c === "K♠") &&
    playerHand.some((c) => c === "Q♠") &&
    playerHand.some((c) => c === "J♠") &&
    playerHand.some((c) => c === "T♠")
  ) {
    royalFlush = "Royal Flush";
   }
  if (
    playerHand.some((c) => c === "A♣") &&
    playerHand.some((c) => c === "K♣") &&
    playerHand.some((c) => c === "Q♣") &&
    playerHand.some((c) => c === "J♣") &&
    playerHand.some((c) => c === "T♣")
  ) {
    royalFlush = "Royal Flush";
     }

  // straight flush
  if (
    playerHand.some((c) => c === "K♥") &&
    playerHand.some((c) => c === "Q♥") &&
    playerHand.some((c) => c === "J♥") &&
    playerHand.some((c) => c === "T♥") &&
    playerHand.some((c) => c === "9♥")
  )
    straightFlush = "Straight Flush King High";
  if (
    playerHand.some((c) => c === "K♦") &&
    playerHand.some((c) => c === "Q♦") &&
    playerHand.some((c) => c === "J♦") &&
    playerHand.some((c) => c === "T♦") &&
    playerHand.some((c) => c === "9♦")
  )
    straightFlush = "Straight Flush King High";
  if (
    playerHand.some((c) => c === "K♠") &&
    playerHand.some((c) => c === "Q♠") &&
    playerHand.some((c) => c === "J♠") &&
    playerHand.some((c) => c === "T♠") &&
    playerHand.some((c) => c === "9♠")
  )
    straightFlush = "Straight Flush King High";
  if (
    playerHand.some((c) => c === "K♣") &&
    playerHand.some((c) => c === "Q♣") &&
    playerHand.some((c) => c === "J♣") &&
    playerHand.some((c) => c === "T♣") &&
    playerHand.some((c) => c === "9♣")
  )
    straightFlush = "Straight Flush King High";
  if (
    playerHand.some((c) => c === "Q♥") &&
    playerHand.some((c) => c === "J♥") &&
    playerHand.some((c) => c === "T♥") &&
    playerHand.some((c) => c === "9♥") &&
    playerHand.some((c) => c === "8♥")
  )
    straightFlush = "Straight Flush Queen High";
  if (
    playerHand.some((c) => c === "Q♦") &&
    playerHand.some((c) => c === "J♦") &&
    playerHand.some((c) => c === "T♦") &&
    playerHand.some((c) => c === "9♦") &&
    playerHand.some((c) => c === "8♦")
  )
    straightFlush = "Straight Flush Queen High";
  if (
    playerHand.some((c) => c === "Q♠") &&
    playerHand.some((c) => c === "J♠") &&
    playerHand.some((c) => c === "T♠") &&
    playerHand.some((c) => c === "9♠") &&
    playerHand.some((c) => c === "8♠")
  )
    straightFlush = "Straight Flush Queen High";
  if (
    playerHand.some((c) => c === "Q♣") &&
    playerHand.some((c) => c === "J♣") &&
    playerHand.some((c) => c === "T♣") &&
    playerHand.some((c) => c === "9♣") &&
    playerHand.some((c) => c === "8♣")
  )
    straightFlush = "Straight Flush Queen High";
  if (
    playerHand.some((c) => c === "J♥") &&
    playerHand.some((c) => c === "T♥") &&
    playerHand.some((c) => c === "9♥") &&
    playerHand.some((c) => c === "8♥") &&
    playerHand.some((c) => c === "7♥")
  )
    straightFlush = "Straight Flush Jack High";
  if (
    playerHand.some((c) => c === "J♦") &&
    playerHand.some((c) => c === "T♦") &&
    playerHand.some((c) => c === "9♦") &&
    playerHand.some((c) => c === "8♦") &&
    playerHand.some((c) => c === "7♦")
  )
    straightFlush = "Straight Flush Jack High";
  if (
    playerHand.some((c) => c === "J♠") &&
    playerHand.some((c) => c === "T♠") &&
    playerHand.some((c) => c === "9♠") &&
    playerHand.some((c) => c === "8♠") &&
    playerHand.some((c) => c === "7♠")
  )
    straightFlush = "Straight Flush Jack High";
  if (
    playerHand.some((c) => c === "J♣") &&
    playerHand.some((c) => c === "T♣") &&
    playerHand.some((c) => c === "9♣") &&
    playerHand.some((c) => c === "8♣") &&
    playerHand.some((c) => c === "7♣")
  )
    straightFlush = "Straight Flush Jack High";
  if (
    playerHand.some((c) => c === "T♥") &&
    playerHand.some((c) => c === "9♥") &&
    playerHand.some((c) => c === "8♥") &&
    playerHand.some((c) => c === "7♥") &&
    playerHand.some((c) => c === "6♥")
  )
    straightFlush = "Straight Flush Ten High";
  if (
    playerHand.some((c) => c === "T♦") &&
    playerHand.some((c) => c === "9♦") &&
    playerHand.some((c) => c === "8♦") &&
    playerHand.some((c) => c === "7♦") &&
    playerHand.some((c) => c === "6♦")
  )
    straightFlush = "Straight Flush Ten High";
  if (
    playerHand.some((c) => c === "T♠") &&
    playerHand.some((c) => c === "9♠") &&
    playerHand.some((c) => c === "8♠") &&
    playerHand.some((c) => c === "7♠") &&
    playerHand.some((c) => c === "6♠")
  )
    straightFlush = "Straight Flush Ten High";
  if (
    playerHand.some((c) => c === "T♣") &&
    playerHand.some((c) => c === "9♣") &&
    playerHand.some((c) => c === "8♣") &&
    playerHand.some((c) => c === "7♣") &&
    playerHand.some((c) => c === "6♣")
  )
    straightFlush = "Straight Flush Ten High";
  if (
    playerHand.some((c) => c === "9♥") &&
    playerHand.some((c) => c === "8♥") &&
    playerHand.some((c) => c === "7♥") &&
    playerHand.some((c) => c === "6♥") &&
    playerHand.some((c) => c === "5♥")
  )
    straightFlush = "Straight Flush Nine High";
  if (
    playerHand.some((c) => c === "9♦") &&
    playerHand.some((c) => c === "8♦") &&
    playerHand.some((c) => c === "7♦") &&
    playerHand.some((c) => c === "6♦") &&
    playerHand.some((c) => c === "5♦")
  )
    straightFlush = "Straight Flush Nine High";
  if (
    playerHand.some((c) => c === "9♠") &&
    playerHand.some((c) => c === "8♠") &&
    playerHand.some((c) => c === "7♠") &&
    playerHand.some((c) => c === "6♠") &&
    playerHand.some((c) => c === "5♠")
  )
    straightFlush = "Straight Flush Nine High";
  if (
    playerHand.some((c) => c === "9♣") &&
    playerHand.some((c) => c === "8♣") &&
    playerHand.some((c) => c === "7♣") &&
    playerHand.some((c) => c === "6♣") &&
    playerHand.some((c) => c === "5♣")
  )
    straightFlush = "Straight Flush Nine High";
  if (
    playerHand.some((c) => c === "8♥") &&
    playerHand.some((c) => c === "7♥") &&
    playerHand.some((c) => c === "6♥") &&
    playerHand.some((c) => c === "5♥") &&
    playerHand.some((c) => c === "4♥")
  )
    straightFlush = "Straight Flush Eight High";
  if (
    playerHand.some((c) => c === "8♦") &&
    playerHand.some((c) => c === "7♦") &&
    playerHand.some((c) => c === "6♦") &&
    playerHand.some((c) => c === "5♦") &&
    playerHand.some((c) => c === "4♦")
  )
    straightFlush = "Straight Flush Eight High";
  if (
    playerHand.some((c) => c === "8♠") &&
    playerHand.some((c) => c === "7♠") &&
    playerHand.some((c) => c === "6♠") &&
    playerHand.some((c) => c === "5♠") &&
    playerHand.some((c) => c === "4♠")
  )
    straightFlush = "Straight Flush Eight High";
  if (
    playerHand.some((c) => c === "8♣") &&
    playerHand.some((c) => c === "7♣") &&
    playerHand.some((c) => c === "6♣") &&
    playerHand.some((c) => c === "5♣") &&
    playerHand.some((c) => c === "4♣")
  )
    straightFlush = "Straight Flush Eight High";
  if (
    playerHand.some((c) => c === "7♥") &&
    playerHand.some((c) => c === "6♥") &&
    playerHand.some((c) => c === "5♥") &&
    playerHand.some((c) => c === "4♥") &&
    playerHand.some((c) => c === "3♥")
  )
    straightFlush = "Straight Flush Seven High";
  if (
    playerHand.some((c) => c === "7♦") &&
    playerHand.some((c) => c === "6♦") &&
    playerHand.some((c) => c === "5♦") &&
    playerHand.some((c) => c === "4♦") &&
    playerHand.some((c) => c === "3♦")
  )
    straightFlush = "Straight Flush Seven High";
  if (
    playerHand.some((c) => c === "7♠") &&
    playerHand.some((c) => c === "6♠") &&
    playerHand.some((c) => c === "5♠") &&
    playerHand.some((c) => c === "4♠") &&
    playerHand.some((c) => c === "3♠")
  )
    straightFlush = "Straight Flush Seven High";
  if (
    playerHand.some((c) => c === "7♣") &&
    playerHand.some((c) => c === "6♣") &&
    playerHand.some((c) => c === "5♣") &&
    playerHand.some((c) => c === "4♣") &&
    playerHand.some((c) => c === "3♣")
  )
    straightFlush = "Straight Flush Seven High";
  if (
    playerHand.some((c) => c === "6♥") &&
    playerHand.some((c) => c === "5♥") &&
    playerHand.some((c) => c === "4♥") &&
    playerHand.some((c) => c === "3♥") &&
    playerHand.some((c) => c === "2♥")
  )
    straightFlush = "Straight Flush Six High";
  if (
    playerHand.some((c) => c === "6♦") &&
    playerHand.some((c) => c === "5♦") &&
    playerHand.some((c) => c === "4♦") &&
    playerHand.some((c) => c === "3♦") &&
    playerHand.some((c) => c === "2♦")
  )
    straightFlush = "Straight Flush Six High";
  if (
    playerHand.some((c) => c === "6♠") &&
    playerHand.some((c) => c === "5♠") &&
    playerHand.some((c) => c === "4♠") &&
    playerHand.some((c) => c === "3♠") &&
    playerHand.some((c) => c === "2♠")
  )
    straightFlush = "Straight Flush Six High";
  if (
    playerHand.some((c) => c === "6♣") &&
    playerHand.some((c) => c === "5♣") &&
    playerHand.some((c) => c === "4♣") &&
    playerHand.some((c) => c === "3♣") &&
    playerHand.some((c) => c === "2♣")
  )
    straightFlush = "Straight Flush Six High";
  if (
    playerHand.some((c) => c === "5♥") &&
    playerHand.some((c) => c === "4♥") &&
    playerHand.some((c) => c === "3♥") &&
    playerHand.some((c) => c === "2♥") &&
    playerHand.some((c) => c === "A♥")
  )
    straightFlush = "Straight Flush Five High";
  if (
    playerHand.some((c) => c === "5♦") &&
    playerHand.some((c) => c === "4♦") &&
    playerHand.some((c) => c === "3♦") &&
    playerHand.some((c) => c === "2♦") &&
    playerHand.some((c) => c === "A♦")
  )
    straightFlush = "Straight Flush Five High";
  if (
    playerHand.some((c) => c === "5♠") &&
    playerHand.some((c) => c === "4♠") &&
    playerHand.some((c) => c === "3♠") &&
    playerHand.some((c) => c === "2♠") &&
    playerHand.some((c) => c === "A♠")
  )
    straightFlush = "Straight Flush Five High";
  if (
    playerHand.some((c) => c === "5♣") &&
    playerHand.some((c) => c === "4♣") &&
    playerHand.some((c) => c === "3♣") &&
    playerHand.some((c) => c === "2♣") &&
    playerHand.some((c) => c === "A♣")
  )
    straightFlush = "Straight Flush Five High";

  // four of a kind
  if (playerHandValueCount.ace >= 4) fourOfAKind = "Four Aces";
  else if (playerHandValueCount.king >= 4) fourOfAKind = "Four Kings";
  else if (playerHandValueCount.queen >= 4) fourOfAKind = "Four Queens";
  else if (playerHandValueCount.jack >= 4) fourOfAKind = "Four Jacks";
  else if (playerHandValueCount.ten >= 4) fourOfAKind = "Four 10's";
  else if (playerHandValueCount.nine >= 4) fourOfAKind = "Four 9's";
  else if (playerHandValueCount.eight >= 4) fourOfAKind = "Four 8's";
  else if (playerHandValueCount.seven >= 4) fourOfAKind = "Four 7's";
  else if (playerHandValueCount.six >= 4) fourOfAKind = "Four 6's";
  else if (playerHandValueCount.five >= 4) fourOfAKind = "Four 5's";
  else if (playerHandValueCount.four >= 4) fourOfAKind = "Four 4's";
  else if (playerHandValueCount.three >= 4) fourOfAKind = "Four 3's";
  else if (playerHandValueCount.two >= 4) fourOfAKind = "Four 2's";

  // full house
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.king >= 2)
    fullHouse = "Full House Aces over Kings";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.queen >= 2)
    fullHouse = "Full House Aces over Queens";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.jack >= 2)
    fullHouse = "Full House Aces over Jacks";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.ten >= 2) fullHouse = "Full House Aces over 10's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.nine >= 2) fullHouse = "Full House Aces over 9's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.eight >= 2) fullHouse = "Full House Aces over 8's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.seven >= 2) fullHouse = "Full House Aces over 7's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.six >= 2) fullHouse = "Full House Aces over 6's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.five >= 2) fullHouse = "Full House Aces over 5's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.four >= 2) fullHouse = "Full House Aces over 4's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.three >= 2) fullHouse = "Full House Aces over 3's";
  if (playerHandValueCount.ace >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House Aces over 2's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.queen >= 2)
    fullHouse = "Full House Kings over Queens";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.jack >= 2)
    fullHouse = "Full House Kings over Jacks";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.ten >= 2)
    fullHouse = "Full House Kings over 10's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.nine >= 2)
    fullHouse = "Full House Kings over 9's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.eight >= 2)
    fullHouse = "Full House Kings over 8's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.seven >= 2)
    fullHouse = "Full House Kings over 7's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.six >= 2) fullHouse = "Kings over 6's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.five >= 2)
    fullHouse = "Full House Kings over 5's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.four >= 2)
    fullHouse = "Full House Kings over 4's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.three >= 2)
    fullHouse = "Full House Kings over 3's";
  if (playerHandValueCount.king >= 3 && playerHandValueCount.two >= 2) fullHouse = "Kings over 2's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.jack >= 2)
    fullHouse = "Full House Queens over Jacks";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.ten >= 2)
    fullHouse = "Full House Queens over 10's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.nine >= 2)
    fullHouse = "Full House Queens over 9's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.eight >= 2)
    fullHouse = "Full House Queens over 8's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.seven >= 2)
    fullHouse = "Full House Queens over 7's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.six >= 2)
    fullHouse = "Full House Queens over 6's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.five >= 2)
    fullHouse = "Full House Queens over 5's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.four >= 2)
    fullHouse = "Full House Queens over 4's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.three >= 2)
    fullHouse = "Full House Queens over 3's";
  if (playerHandValueCount.queen >= 3 && playerHandValueCount.two >= 2)
    fullHouse = "Full House Queens over 2's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.ten >= 2)
    fullHouse = "Full House Jacks over 10's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.nine >= 2)
    fullHouse = "Full House Jacks over 9's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.eight >= 2)
    fullHouse = "Full House Jacks over 8's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.seven >= 2)
    fullHouse = "Full House Jacks over 7's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.six >= 2) fullHouse = "Jacks over 6's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.five >= 2)
    fullHouse = "Full House Jacks over 5's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.four >= 2)
    fullHouse = "Full House Jacks over 4's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.three >= 2)
    fullHouse = "Full House Jacks over 3's";
  if (playerHandValueCount.jack >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House Jacks over 2's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.nine >= 2) fullHouse = "Full House 10's over 9's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.eight >= 2) fullHouse = "Full House 10's over 8's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.seven >= 2) fullHouse = "Full House 10's over 7's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.six >= 2) fullHouse = "Full House 10's over 6's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.five >= 2) fullHouse = "Full House 10's over 5's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.four >= 2) fullHouse = "Full House 10's over 4's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.three >= 2) fullHouse = "Full House 10's over 3's";
  if (playerHandValueCount.ten >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 10's over 2's";
  if (playerHandValueCount.nine >= 3 && playerHandValueCount.eight >= 2) fullHouse = "Full House 9's over 8's";
  if (playerHandValueCount.nine >= 3 && playerHandValueCount.seven >= 2) fullHouse = "Full House 9's over 7's";
  if (playerHandValueCount.nine >= 3 && playerHandValueCount.six >= 2) fullHouse = "Full House 9's over 6's";
  if (playerHandValueCount.nine >= 3 && playerHandValueCount.five >= 2) fullHouse = "Full House 9's over 5's";
  if (playerHandValueCount.nine >= 3 && playerHandValueCount.four >= 2) fullHouse = "Full House 9's over 4's";
  if (playerHandValueCount.nine >= 3 && playerHandValueCount.three >= 2) fullHouse = "Full House 9's over 3's";
  if (playerHandValueCount.nine >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 9's over 2's";
  if (playerHandValueCount.eight >= 3 && playerHandValueCount.seven >= 2)
    fullHouse = "Full House 8's over 7's";
  if (playerHandValueCount.eight >= 3 && playerHandValueCount.six >= 2) fullHouse = "Full House 8's over 6's";
  if (playerHandValueCount.eight >= 3 && playerHandValueCount.five >= 2) fullHouse = "Full House 8's over 5's";
  if (playerHandValueCount.eight >= 3 && playerHandValueCount.four >= 2) fullHouse = "Full House 8's over 4's";
  if (playerHandValueCount.eight >= 3 && playerHandValueCount.three >= 2)
    fullHouse = "Full House 8's over 3's";
  if (playerHandValueCount.eight >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 8's over 2's";
  if (playerHandValueCount.seven >= 3 && playerHandValueCount.six >= 2) fullHouse = "Full House 7's over 6's";
  if (playerHandValueCount.seven >= 3 && playerHandValueCount.five >= 2) fullHouse = "Full House 7's over 5's";
  if (playerHandValueCount.seven >= 3 && playerHandValueCount.four >= 2) fullHouse = "Full House 7's over 4's";
  if (playerHandValueCount.seven >= 3 && playerHandValueCount.three >= 2)
    fullHouse = "Full House 7's over 3's";
  if (playerHandValueCount.seven >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 7's over 2's";
  if (playerHandValueCount.six >= 3 && playerHandValueCount.five >= 2) fullHouse = "Full House 6's over 5's";
  if (playerHandValueCount.six >= 3 && playerHandValueCount.four >= 2) fullHouse = "Full House 6's over 4's";
  if (playerHandValueCount.six >= 3 && playerHandValueCount.three >= 2) fullHouse = "Full House 6's over 3's";
  if (playerHandValueCount.six >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 6's over 2's";
  if (playerHandValueCount.five >= 3 && playerHandValueCount.four >= 2) fullHouse = "Full House 5's over 4's";
  if (playerHandValueCount.five >= 3 && playerHandValueCount.three >= 2) fullHouse = "Full House 5's over 3's";
  if (playerHandValueCount.five >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 5's over 2's";
  if (playerHandValueCount.four >= 3 && playerHandValueCount.three >= 2) fullHouse = "Full House 4's over 3's";
  if (playerHandValueCount.four >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 4's over 2's";
  if (playerHandValueCount.three >= 3 && playerHandValueCount.two >= 2) fullHouse = "Full House 3's over 2's";

  // flush
  let max = Math.max(...playerHandValue);
  if (max === 14) max = "Ace";
  if (max === 13) max = "King";
  if (max === 12) max = "Queen";
  if (max === 11) max = "Jack";
  if (
    max === 5 ||
    max === 6 ||
    max === 7 ||
    max === 8 ||
    max === 9 ||
    max === 10
  )
    max = String(max);
  let playerHandSuits = {
    heart: 0,
    diamond: 0,
    spade: 0,
    club: 0,
  };

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].suit === "♥") playerHandSuits.heart += 1;
    if (cards[i].suit === "♦") playerHandSuits.diamond += 1;
    if (cards[i].suit === "♠") playerHandSuits.spade += 1;
    if (cards[i].suit === "♣") playerHandSuits.club += 1;
  }

  if (playerHandSuits.heart >= 5) flush = `Flush ${max} High`;
  if (playerHandSuits.diamond >= 5) flush = `Flush ${max} High`;
  if (playerHandSuits.club >= 5) flush = `Flush ${max} High`;
  if (playerHandSuits.spade >= 5) flush = `Flush ${max} High`;

  // straight
  if (
    playerHandValueCount.ace > 0 &&
    playerHandValueCount.king > 0 &&
    playerHandValueCount.queen > 0 &&
    playerHandValueCount.jack > 0 &&
    playerHandValueCount.ten > 0
  )
    straight = "Straight Ace High";
  else if (
    playerHandValueCount.king > 0 &&
    playerHandValueCount.queen > 0 &&
    playerHandValueCount.jack > 0 &&
    playerHandValueCount.ten > 0 &&
    playerHandValueCount.nine > 0
  )
    straight = "Straight King High";
  else if (
    playerHandValueCount.queen > 0 &&
    playerHandValueCount.jack > 0 &&
    playerHandValueCount.ten > 0 &&
    playerHandValueCount.nine > 0 &&
    playerHandValueCount.eight > 0
  )
    straight = "Straight Queen High";
  else if (
    playerHandValueCount.jack > 0 &&
    playerHandValueCount.ten > 0 &&
    playerHandValueCount.nine > 0 &&
    playerHandValueCount.eight > 0 &&
    playerHandValueCount.seven > 0
  )
    straight = "Straight Jack High";
  else if (
    playerHandValueCount.ten > 0 &&
    playerHandValueCount.nine > 0 &&
    playerHandValueCount.eight > 0 &&
    playerHandValueCount.seven > 0 &&
    playerHandValueCount.six > 0
  )
    straight = "Straight 10 High";
  else if (
    playerHandValueCount.nine > 0 &&
    playerHandValueCount.eight > 0 &&
    playerHandValueCount.seven > 0 &&
    playerHandValueCount.six > 0 &&
    playerHandValueCount.five > 0
  )
    straight = "Straight 9 High";
  else if (
    playerHandValueCount.eight > 0 &&
    playerHandValueCount.seven > 0 &&
    playerHandValueCount.six > 0 &&
    playerHandValueCount.five > 0 &&
    playerHandValueCount.four > 0
  )
    straight = "Straight 8 High";
  else if (
    playerHandValueCount.seven > 0 &&
    playerHandValueCount.six > 0 &&
    playerHandValueCount.five > 0 &&
    playerHandValueCount.four > 0 &&
    playerHandValueCount.three > 0
  )
    straight = "Straight 7 High";
  else if (
    playerHandValueCount.six > 0 &&
    playerHandValueCount.five > 0 &&
    playerHandValueCount.four > 0 &&
    playerHandValueCount.three > 0 &&
    playerHandValueCount.two > 0
  )
    straight = "Straight 6 High";
  else if (
    playerHandValueCount.five > 0 &&
    playerHandValueCount.four > 0 &&
    playerHandValueCount.three > 0 &&
    playerHandValueCount.two > 0 &&
    playerHandValueCount.ace > 0
  )
    straight = "Straight 5 High";

  // three of a kind
  if (playerHandValueCount.ace >= 3) isThreeOfAKind = "Three Aces";
  else if (playerHandValueCount.king >= 3) isThreeOfAKind = "Three Kings";
  else if (playerHandValueCount.queen >= 3) isThreeOfAKind = "Three Queens";
  else if (playerHandValueCount.jack >= 3) isThreeOfAKind = "Three Jacks";
  else if (playerHandValueCount.ten >= 3) isThreeOfAKind = "Three 10's";
  else if (playerHandValueCount.nine >= 3) isThreeOfAKind = "Three 9's";
  else if (playerHandValueCount.eight >= 3) isThreeOfAKind = "Three 8's";
  else if (playerHandValueCount.seven >= 3) isThreeOfAKind = "Three 7's";
  else if (playerHandValueCount.six >= 3) isThreeOfAKind = "Three 6's";
  else if (playerHandValueCount.five >= 3) isThreeOfAKind = "Three 5's";
  else if (playerHandValueCount.four >= 3) isThreeOfAKind = "Three 4's";
  else if (playerHandValueCount.three >= 3) isThreeOfAKind = "Three 3's";
  else if (playerHandValueCount.two >= 3) isThreeOfAKind = "Three 2's";

  // two pair
  if (playerHandValueCount.ace >= 2 && playerHandValueCount.king >= 2) twoPair = "Two Pair Aces over Kings";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.queen >= 2)
    twoPair = "Two Pair Aces over Queens";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.jack >= 2)
    twoPair = "Two Pair Aces over Jacks";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.ten >= 2)
    twoPair = "Two Pair Aces over 10's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.nine >= 2)
    twoPair = "Two Pair Aces over 9's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.eight >= 2)
    twoPair = "Two Pair Aces over 8's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.seven >= 2)
    twoPair = "Two Pair Aces over 7's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair Aces over 6's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair Aces over 5's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair Aces over 4's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair Aces over 3's";
  else if (playerHandValueCount.ace >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair Aces over 2's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.queen >= 2)
    twoPair = "Two Pair Kings over Queens";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.jack >= 2)
    twoPair = "Two Pair Kings over Jacks";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.ten >= 2)
    twoPair = "Two Pair Kings over 10's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.nine >= 2)
    twoPair = "Two Pair Kings over 9's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.eight >= 2)
    twoPair = "Two Pair Kings over 8's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.seven >= 2)
    twoPair = "Two Pair Kings over 7's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair Kings over 6's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair Kings over 5's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair Kings over 4's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair Kings over 3's";
  else if (playerHandValueCount.king >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair Kings over 2's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.jack >= 2)
    twoPair = "Two Pair Queens over Jacks";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.ten >= 2)
    twoPair = "Two Pair Queens over 10's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.nine >= 2)
    twoPair = "Two Pair Queens over 9's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.eight >= 2)
    twoPair = "Two Pair Queens over 8's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.seven >= 2)
    twoPair = "Two Pair Queens over 7's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair Queens over 6's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair Queens over 5's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair Queens over 4's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair Queens over 3's";
  else if (playerHandValueCount.queen >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair Queens over 2's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.ten >= 2)
    twoPair = "Two Pair Jacks over 10's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.nine >= 2)
    twoPair = "Two Pair Jacks over 9's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.eight >= 2)
    twoPair = "Two Pair Jacks over 8's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.seven >= 2)
    twoPair = "Two Pair Jacks over 7's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair Jacks over 6's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair Jacks over 5's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair Jacks over 4's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair Jacks over 3's";
  else if (playerHandValueCount.jack >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair Jacks over 2's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.nine >= 2)
    twoPair = "Two Pair 10's over 9's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.eight >= 2)
    twoPair = "Two Pair 10's over 8's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.seven >= 2)
    twoPair = "Two Pair 10's over 7's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair 10's over 6's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair 10's over 5's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair 10's over 4's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair 10's over 3's";
  else if (playerHandValueCount.ten >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair 10's over 2's";
  else if (playerHandValueCount.nine >= 2 && playerHandValueCount.eight >= 2)
    twoPair = "Two Pair 9's over 8's";
  else if (playerHandValueCount.nine >= 2 && playerHandValueCount.seven >= 2)
    twoPair = "Two Pair 9's over 7's";
  else if (playerHandValueCount.nine >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair 9's over 6's";
  else if (playerHandValueCount.nine >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair 9's over 5's";
  else if (playerHandValueCount.nine >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair 9's over 4's";
  else if (playerHandValueCount.nine >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair 9's over 3's";
  else if (playerHandValueCount.nine >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair 9's over 2's";
  else if (playerHandValueCount.eight >= 2 && playerHandValueCount.seven >= 2)
    twoPair = "Two Pair 8's over 7's";
  else if (playerHandValueCount.eight >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair 8's over 6's";
  else if (playerHandValueCount.eight >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair 8's over 5's";
  else if (playerHandValueCount.eight >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair 8's over 4's";
  else if (playerHandValueCount.eight >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair 8's over 3's";
  else if (playerHandValueCount.eight >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair 8's over 2's";
  else if (playerHandValueCount.seven >= 2 && playerHandValueCount.six >= 2)
    twoPair = "Two Pair 7's over 6's";
  else if (playerHandValueCount.seven >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair 7's over 5's";
  else if (playerHandValueCount.seven >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair 7's over 4's";
  else if (playerHandValueCount.seven >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair 7's over 3's";
  else if (playerHandValueCount.seven >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair 7's over 2's";
  else if (playerHandValueCount.six >= 2 && playerHandValueCount.five >= 2)
    twoPair = "Two Pair 6's over 5's";
  else if (playerHandValueCount.six >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair 6's over 4's";
  else if (playerHandValueCount.six >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair 6's over 3's";
  else if (playerHandValueCount.six >= 2 && playerHandValueCount.two >= 2) twoPair = "Two Pair 6's over 2's";
  else if (playerHandValueCount.five >= 2 && playerHandValueCount.four >= 2)
    twoPair = "Two Pair 5's over 4's";
  else if (playerHandValueCount.five >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair 5's over 3's";
  else if (playerHandValueCount.five >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair 5's over 2's";
  else if (playerHandValueCount.four >= 2 && playerHandValueCount.three >= 2)
    twoPair = "Two Pair 4's over 3's";
  else if (playerHandValueCount.four >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair 4's over 2's";
  else if (playerHandValueCount.three >= 2 && playerHandValueCount.two >= 2)
    twoPair = "Two Pair 3's over 2's";

  // pair
  if (playerHandValueCount.ace >= 2) pair = "Pair of Aces";
  else if (playerHandValueCount.king >= 2) pair = "Pair of Kings";
  else if (playerHandValueCount.queen >= 2) pair = "Pair of Queens";
  else if (playerHandValueCount.jack >= 2) pair = "Pair of Jacks";
  else if (playerHandValueCount.ten >= 2) pair = "Pair of 10's";
  else if (playerHandValueCount.nine >= 2) pair = "Pair of 9's";
  else if (playerHandValueCount.eight >= 2) pair = "Pair of 8's";
  else if (playerHandValueCount.seven >= 2) pair = "Pair of 7's";
  else if (playerHandValueCount.six >= 2) pair = "Pair of 6's";
  else if (playerHandValueCount.five >= 2) pair = "Pair of 5's";
  else if (playerHandValueCount.four >= 2) pair = "Pair of 4's";
  else if (playerHandValueCount.three >= 2) pair = "Pair of 3's";
  else if (playerHandValueCount.two >= 2) pair = "Pair of 2's";

  // high card
  if (playerHandValueCount.ace >= 1) highCard = "High Card Ace";
  else if (playerHandValueCount.king >= 1) highCard = "High Card King";
  else if (playerHandValueCount.queen >= 1) highCard = "High Card Queen";
  else if (playerHandValueCount.jack >= 1) highCard = "High Card Jack";
  else if (playerHandValueCount.ten >= 1) highCard = "High Card Ten";
  else if (playerHandValueCount.nine >= 1) highCard = "High Card Nine";
  else if (playerHandValueCount.eight >= 1) highCarde = "High Card Eight";
  else if (playerHandValueCount.seven >= 1) highCard = "High Card Seven";
  else if (playerHandValueCount.six >= 1) highCard = "High Card Six";
  else if (playerHandValueCount.five >= 1) highCard = "High Card Five";
  else if (playerHandValueCount.four >= 1) highCard = "High Card Four";
  else if (playerHandValueCount.three >= 1) highCard = "High Card Three";
  else if (playerHandValueCount.two >= 1) highCard = "High Card Two";

  // console log results
  // console.log(playerData);
  // console.log(`Royal Flush -----> ${royalFlush}`);
  // console.log(`Straight Flush --> ${straightFlush}`);
  // console.log(`Four of a Kind --> ${fourOfAKind}`);
  // console.log(`Full House ------> ${fullHouse}`);
  // console.log(`Flush -----------> ${flush}`);
  // console.log(`Straight --------> ${straight}`);
  // console.log(`Three of a Kind -> ${isThreeOfAKind}`);
  // console.log(`Two Pair --------> ${twoPair}`);
  // console.log(`Pair ------------> ${pair}`);
  // console.log(`High Card -------> ${highCard}`);

  let topCards = playerHandValue
    .sort()
    .sort(function (a, b) {
      return a - b;
    })
    .reverse()
    .splice(0, 5);

  // return
  if (royalFlush) return { name: `Royal Flush: ${royalFlush}`, rank: 10, hand: topCards };
  if (straightFlush) return { name: `Straight Flush: ${straightFlush}`, rank: 9, hand: topCards };
  if (fourOfAKind) return { name: `Four of a Kind: ${fourOfAKind}`, rank: 8, hand: topCards };
  if (fullHouse) return { name: `FullHouse: ${fullHouse}`, rank: 7, hand: topCards };
  if (flush) return { name: `Flush: ${flush}`, rank: 6, hand: topCards };
  if (straight) return { name: `Straight:${straight}`, rank: 5, hand: topCards };
  if (isThreeOfAKind)
    return { name: `Three of a Kind: ${isThreeOfAKind}`, rank: 4, hand: topCards };
  if (twoPair) return { name: `Two Pair: ${twoPair}`, rank: 3, hand: topCards };
  if (pair) return { name: `Pair: ${pair}`, rank: 2, hand: topCards };
  return { name: `High Card: ${highCard}`, rank: 1, hand: topCards };
}
