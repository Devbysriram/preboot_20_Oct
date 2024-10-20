let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let resultText = '';

    if (guess === randomNumber) {
        resultText = 'Congratulations! You guessed the number!';
    } else if (guess > randomNumber) {
        resultText = 'Too high! Try again.';
    } else {
        resultText = 'Too low! Try again.';
    }

    document.getElementById('result').innerText = resultText;
}