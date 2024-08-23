'use strict';

//then the dice rolls from 1-6 and add the current score to player 1 score--0
//roll dice until you roll a 1 and if you roll a 1 reset player 1 score and go to transfer to player 2.
// Also if you hit hold button it will save you current score and go to the next player.
// if a player reach 40 points the you are declared the winner
//when you click the new game button all the players scored are reset and so is the current score also is gives the player turn to player 1

//capturing element variables
const roll = document.querySelector('.btn--roll');
const holdD = document.querySelector('.btn--hold');
const diceD = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const newGameD = document.querySelector('.btn--new');
const playerTurn0 = document.querySelector('.player--0');
const playerTurn1 = document.querySelector('.player--1');

// console.log(playerTurn0);
// console.log(roll);
//regular variables
let scores = [0, 0];

let currentScore = 0;
let turn = 0;
let dice = 0;
//player 1 rolls the dice by hitting roll dice button
//add event handler to roll dice
roll.addEventListener('click', function () {
  //randomly generate dice rolls
  dice = Math.trunc(Math.random() * 6 + 1);
  // console.log(dice);
  //add new dice graphic to the screen based on what number you rolled
  //other example

  diceD.src = `dice-${dice}.png`;

  //if roll is 1 change player turn
  //doesnt switch players properly or switch b
  if (dice === 1) {
    // turn = turn === 0 ? 1 : 0
    if (turn === 0) {
      scores[0] = 0;
      score0El.innerHTML = scores[0];
      turn = 1;
      playerTurn0.classList.remove('player--active');
      playerTurn1.classList.add('player--active');

      console.log(scores[0]);
    } else {
      scores[1] = 0;
      current1El.innerHTML = scores[1];
      turn = 0;
      playerTurn1.classList.remove('player--active');
      playerTurn0.classList.add('player--active');

      console.log(scores[1]);
    }
    //change class active class
  } else if (dice > 1 && dice <= 6) {
    //add player score by adding up dice rolls
    if (turn === 0) {
      scores[0] += dice;
      score0El.innerHTML = scores[0];
    } else if (turn === 1) {
      scores[1] += dice;
      score1El.innerHTML = scores[1];
    }
  }
  //determine who is the winner
  if (scores[0] > 40) {
    console.log(`player 1 won!`);
  } else if (scores[1] > 40) {
    console.log(`player 2 won!`);
  }
});

//add event listener to the hold button
holdD.addEventListener('click', function () {
  // when hold clicked add player score to current score

  if (turn === 0) {
    currentScore = scores[0];
    console.log(currentScore);
    current0El.innerHTML = currentScore;
    turn = 1;
  } else {
    currentScore = scores[1];
    current1El.innerHTML = currentScore;
    turn = 0;
  }
  console.log(turn);
});

//add event listener to the new game
newGameD.addEventListener('click', function () {
  //reset player score, current score to zero and use another random dice roll
  scores[0] = 0;
  score0El.innerHTML = scores[0];
  scores[1] = rent1El.innerHTML = scores[1];
  currentScore = 0;
  current0El.innerHTML = currentScore;
  current1El.innerHTML = currentScore;
});
