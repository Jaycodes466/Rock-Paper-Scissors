//Grabbing all the DOM elements:
const title = document.querySelector('.game-title');
const gameOver = document.querySelector('.game-over');
let displayPlayerScore = document.querySelector('.player-score');
let displayComputerScore = document.querySelector('.computer-score');
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
    default:
      console.log('Error in the get computer choice function.');
  }
}

//Event Listeners for buttons:
rockBtn.addEventListener('click', function () {
  let computerSelection = getComputerChoice();
  let playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener('click', function () {
  let computerSelection = getComputerChoice();
  let playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener('click', function () {
  let computerSelection = getComputerChoice();
  let playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
});

//Reload page on click
resetBtn.addEventListener('click', function () {
  window.location.reload();
});

//Playround function
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    subtitle.textContent = `This round is a tie.`;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    displayPlayerScore.textContent = ++playerScore;
    subtitle.textContent = `You win! Rock beats scissors.`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    displayPlayerScore.textContent = ++playerScore;
    subtitle.textContent = `You win! Paper beats rock.`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    displayPlayerScore.textContent = ++playerScore;
    subtitle.textContent = `You win! Scissors beats paper.`;
  } //Computer wins
  else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    displayComputerScore.textContent = ++computerScore;
    subtitle.textContent = `You lose. Rock beats scissors.`;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    displayComputerScore.textContent = ++computerScore;
    subtitle.textContent = `You lose. Paper beats rock`;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    displayComputerScore.textContent = ++computerScore;
    subtitle.textContent = `You lose. Scissors beat paper.`;
  } else {
    console.log('Error in the playround function');
  }
  endGame();
}

//End game when user or computer reaches 5 points:
function endGame() {
  if (playerScore >= 5) {
    gameOver.classList.add('game-over-visible');
    gameOver.textContent = `Game Over. You Win!`;
    disableBtns();
  } else if (computerScore >= 5) {
    gameOver.classList.add('game-over-visible');
    gameOver.textContent = `Game Over. You Lose!`;
    disableBtns();
  }
}

//Disable buttons when game is over
function disableBtns() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  //Play again / reset game
  resetBtn.style.display = 'inline';
}

