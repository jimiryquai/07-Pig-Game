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
let totalScores = [0, 0];

const show = el => el.classList.remove('hidden');
const isActive = el => {
  return el.classList.contains('player--active');
};

const switchActivePlayer = (el0, el1) => {
  el0.classList.toggle('player--active');
  el1.classList.toggle('player--active');
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
    isActive(player0El)
      ? (currentScore0El.textContent = currentScore)
      : (currentScore1El.textContent = currentScore);
  } else {
    // Switch player and reset current score
    isActive(player0El)
      ? ((currentScore = 0),
        (currentScore0El.textContent = currentScore),
        switchActivePlayer(player0El, player1El))
      : ((currentScore = 0),
        (currentScore1El.textContent = currentScore),
        switchActivePlayer(player1El, player0El));
  }
});

btnHold.addEventListener('click', () => {
  isActive(player0El)
    ? ((totalScores[0] += currentScore),
      (score0El.textContent = totalScores[0]),
      (currentScore = 0),
      (currentScore0El.textContent = currentScore))
    : ((totalScores[1] += currentScore),
      (score1El.textContent = totalScores[1]),
      (currentScore = 0),
      (currentScore1El.textContent = currentScore));
});
