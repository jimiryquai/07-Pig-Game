'use strict';
// Selecting elements
const score0El = document.querySelector('.score--0');
const currentScore0El = document.querySelector('.current--0');
const score1El = document.querySelector('.score--1');
const currentScore1El = document.querySelector('.current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const hide = el => el.classList.add('hidden');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
hide(diceEl);
let currentScore = 0;

const show = el => el.classList.remove('hidden');
const isActive = el => {
  return el.classList.contains('player--active');
};

const setActive = el => {
  return el.classList.add('player--active');
};

const setInactive = el => {
  return el.classList.remove('player--active');
};

btnRoll.addEventListener('click', () => {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display Dice
  show(diceEl);
  diceEl.src = `./img/dice-${dice}.png`; // pass random dice roll number into url using template literal
  // 3. Check if it is a 1: if true switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    if (isActive(player0El)) {
      currentScore0El.textContent = currentScore;
    } else {
      currentScore1El.textContent = currentScore;
    }
  } else {
    // Switch player
    if (isActive(player0El)) {
      currentScore = 0;
      currentScore0El.textContent = currentScore;
      setInactive(player0El);
      setActive(player1El);
    } else {
      currentScore = 0;
      currentScore1El.textContent = currentScore;
      setActive(player0El);
      setInactive(player1El);
    }
  }
});
