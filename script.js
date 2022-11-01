'use strict';

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  function high(score) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  if (!guess) {
    showMessage(`⛔ Not a number!`);
  } else if (guess === secretNumber) {
    showMessage(`🏆 You win!`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#12ca12';

    if (score > highScore) high(score);
  } else if (guess !== secretNumber) {
    showMessage(
      guess > secretNumber ? `📈 It's too high!` : `📉 It's too low!`
    );
    score--;
    showScore(score);
  }

  if (score <= 0) {
    document.querySelector(
      '.message'
    ).textContent = `😢 You lose. Try it again!`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = '#ff0000';
    showScore(0);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  showScore(score);
  document.querySelector('body').style.backgroundColor = '#222222';
  showMessage(`Start guessing...`);
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = '';
});
