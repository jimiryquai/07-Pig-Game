'use strict';

const score0El = document.querySelector('.score--0');
const currentScore0El = document.querySelector('.current--0');
const score1El = document.querySelector('.score--1');
const currentScore1El = document.querySelector('.current--1');
const diceEl = document.querySelector('.dice');
const hide = el => el.classList.add('hidden');
const show = el => el.classList.remove('hidden');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
hide(diceEl);
