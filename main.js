let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#userInput");
const submitBtn = document.querySelector("#submit");
const prevGuess = document.querySelector("#prevGuess");
const remainingGuess = document.querySelector("#ReGuess");
const LowHigh = document.querySelector("#LoToHi");
const startOver = document.querySelector('.main');
const p = document.createElement('p')
let guessNumber = [];
let REmaining = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);

    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Guess Right");
  } else if (guess < 1) {
    alert("Please Enter number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    guessNumber.push(guess);
  if (REmaining === 10) {
    displayGuess(guess);
    displayMessage(`game over Number was ${randomNumber}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}
  
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulation you Guess it Right`)
        endGame();
    }else if (guess < randomNumber){
        displayMessage(`You guess Toooo Low Number`)
    }else if (guess > randomNumber){
        displayMessage(`You guess Toooo High Number`)
    }
}

function displayGuess(guess) {
userInput.value = "";
prevGuess.innerHTML += `${guess}   `;
REmaining++;
remainingGuess.innerHTML = `${11 - REmaining}` 
}

function displayMessage(mesaage) {
    LowHigh.innerHTML = `<h1>${mesaage}</h1>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disable' , '');
    p.classList.add('button')
    p.innerHTML = '<h1 id="newgame">Start New Game</h1>';
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGame = document.querySelector('#newgame');
    newGame.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
         guessNumber = [];
         REmaining = 1;
         prevGuess.innerHTML = '';
        remainingGuess.innerHTML = `${10 - REmaining}`
        userInput.removeAttribute('disable');
        startOver.removeChild(p)
        playGame = true
    })
};