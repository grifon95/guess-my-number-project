'use strict';

// const checkBtn = document.querySelector('.check');
// const againBtn = document.querySelector('.again');
// const guessEl = document.querySelector('.guess');
// const messageEl = document.querySelector('.message');
// const scoreEl = document.querySelector('.score');
// const highscoreEl = document.querySelector('.highscore');
// const numberEl = document.querySelector('.number');
// const displayMessage = function (message) {
//   messageEl.textContent = message;
// };
// let score = 20;
// let highscore = 0;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// checkBtn.addEventListener('click', function () {
//   const guess = Number(guessEl.value);
//   if (!guess) {
//     displayMessage('You didnt enter any number!');
//   } else if (guess < 1 || guess > 21) {
//     alert('Enter number between 1 and 20!');
//   } else if (guess === secretNumber) {
//     displayMessage('Congrats! You guessed number 👑');
//     document.querySelector('body').style.backgroundColor = 'green';
//     numberEl.style.width = '30rem';
//     numberEl.textContent = secretNumber;
//     if (score > highscore) {
//       highscore = score;
//       highscoreEl.textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       messageEl.textContent =
//         guess > secretNumber
//           ? `You entered bigger number`
//           : `You entered smaller number`;
//       score--;
//       scoreEl.textContent = score;
//     } else {
//       displayMessage('You lost the game 😭');
//       scoreEl.textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//       numberEl.textContent = secretNumber;
//     }
//   }
// });

// againBtn.addEventListener('click', function () {
//   console.log(`Youclicked`);
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('body').style.backgroundColor = '#222';
//   numberEl.style.width = '15rem';
//   score = 20;
//   scoreEl.textContent = 20;
//   displayMessage('Start guessing...');
//   numberEl.textContent = '?';
//   guessEl.value = '';
// });
// Unesi broj izmedju 1 i 20 i pogodi random generisani broj, za svaki promasaj gubis 1 score i prikazi poruku veci ili manji, kad dodjes do 0 gubis igru
// generisi random broj i dodaj event listener na dugme, input je string uvek zapamti
// uvek prvo kad se ne unese pokusaj
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guessEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number');
let highscore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
checkBtn.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  if (!guess) {
    messageEl.textContent = 'You didnt enter any number!';
  } else if (guess < 1 || guess > 20) {
    alert('Number must be between 1 and 20');
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    messageEl.textContent = 'You won the game! 🏆';
    numberEl.textContent = secretNumber;
    numberEl.style.width = '30rem';
    document.body.style.backgroundColor = 'green';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageEl.textContent =
        guess > secretNumber
          ? `You entered bigger number! -1 point`
          : `You entered smaller number! -1 point`;
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = 'You lost :(';
      document.body.style.backgroundColor = 'red';
      score = 0;
      scoreEl.textContent = score;
      numberEl.textContent = secretNumber;
    }
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  scoreEl.textContent = score;
  messageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
  guessEl.value = '';
});
