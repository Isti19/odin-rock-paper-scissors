const computerPlay = () => {
  let options = ['Rock', 'Paper', 'Scissors'];

  //Math.floor returns largest integer less or equal to given number
  //Math.random returns floating, pseudo-random number in the range 0 to less than 1
  randIndex = Math.floor(Math.random() * options.length);
  //randString gets randomIndex to be printed
  randString = options[randIndex];
  //   console.log(randString);
  return randString;
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  rock = 'rock'.toUpperCase();
  paper = 'paper'.toUpperCase();
  scissors = 'scissors'.toUpperCase();
  let playerScore = 0;
  let computerScore = 0;

  console.log('Player Selection: ' + playerSelection);
  console.log('Computer Selection: ' + computerSelection);

  if (playerSelection === computerSelection) {
    console.log('Draw!');
  } else if (playerSelection === rock && computerSelection === scissors) {
    console.log('Player Wins! Rock Smashes Scissors!');
    playerScore++;
  } else if (playerSelection === rock && computerSelection === paper) {
    console.log('Computer Wins! Paper Wraps Rock!');
    computerScore++;
  } else if (playerSelection === scissors && computerSelection === paper) {
    console.log('Player Wins! Scissors Cut Paper!');
    playerScore++;
  } else if (playerSelection === scissors && computerSelection === rock) {
    console.log('Computer Wins! Rock Smashes Scissors!');
    computerScore++;
  } else if (playerSelection === paper && computerSelection === rock) {
    console.log('Player Wins! Paper Wraps Rock!');
    playerScore++;
  } else if (playerSelection === paper && computerSelection === scissors) {
    console.log('Computer Wins! Scissors Cut Paper!');
    computerScore++;
  } else {
    return 'Wronggg';
  }
  return playerSelection, computerSelection, playerScore, computerScore;
};

const playerSelection = 'rock';
const computerSelection = computerPlay();

// console.log('playRound:' + playRound(playerSelection, computerSelection));
// playRound(playerSelection, computerSelection);

const game = () => {
  for (let i = 1; i <= 5; i++) {
    console.log('Round: ' + i);
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
};

game();
