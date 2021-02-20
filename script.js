'use strict';
// Selecting elements
const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('.score--1');
const currentScore0El = document.querySelector('.current--0');
const currentScore1El = document.querySelector('.current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let totalScores = [0, 0];
let playing = true;

const switchActivePlayer = () => {
  document.querySelector(`.current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${dice}.png`; // pass random dice roll number into url using template literal

    // 3. Check if it is a 1: if true switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(
        `.current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch active player
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player's score
    totalScores[activePlayer] += currentScore;

    document.querySelector(`.score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    //2. Check if player' score is >=100
    if (totalScores[activePlayer] >= 20) {
      playing = false;
      // Finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player
      switchActivePlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  totalScores = [0, 0];
  playing = true;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player1El.classList.remove('player--winner');
});
