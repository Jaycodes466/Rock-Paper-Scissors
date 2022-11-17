//Grabbing all the DOM elements:
const title = document.querySelector('.game-title');
const gameOver = document.querySelector('.game-over');
const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.computer-score');
const subtitle = document.querySelector('.game-subtitle');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset-btn');

//Create & set scores
let playerScore = 0;
let computerScore = 0;

//Get computers choice
function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let computerPick = Math.floor(Math.random() * options.length);
  switch (computerPick) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

getComputerChoice();
