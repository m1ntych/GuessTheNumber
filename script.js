// Functions
const randomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

// Code Variables
let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

// DOM Variables
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const question = document.querySelector('.question');
const body = document.querySelector('body');
const scoreValue = document.querySelector('.score');

// Main Code
checkButton.addEventListener('click', () => {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    displayGuessMessage('Insert the number!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Correctly!');
    body.style.backgroundColor = 'rgb(9, 250, 21)';
    question.style.width = '50rem';
    question.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // NUM from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Too much!' : 'Too few!'
      );
      score--;
      scoreValue.textContent = score;
    } else {
      displayGuessMessage('Game over!');
      scoreValue.textContent = 0;
      body.style.backgroundColor = 'rgb(250, 150, 3)';
    }
  }
});

// Again button

againButton.addEventListener('click', () => {
  secretNumber = question.textContent = randomNumber();
  score = 20;

  displayGuessMessage('Start guessing');
  document.querySelector('.number-input').value = '';
  scoreValue.textContent = score;
  body.style.backgroundColor = 'rgb(0, 0, 0)';
  question.style.width = '20rem';
  question.textContent = '???';
});
