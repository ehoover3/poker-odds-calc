// query selectors
const deckDiv = document.querySelector("#deck");
const flopDiv = document.querySelector("#flop");
const turnDiv = document.querySelector("#turn");
const riverDiv = document.querySelector("#river");
const playerDiv = document.querySelector("#player");

// data
let players = 2;
let playerA = [];

let flopData = [];
let turnData = [];
let riverData = [];
let bestPossibleHand = false;
