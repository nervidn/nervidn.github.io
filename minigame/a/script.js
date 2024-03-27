// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements
const guessField = document.getElementById('guessField');
const submitButton = document.querySelector('button');
const message = document.getElementById('message');

// Function to check the guessed number
function checkGuess() {
  const userGuess = parseInt(guessField.value);
  if (userGuess === randomNumber) {
    message.textContent = 'Congratulations! You guessed the correct number!';
    message.style.color = 'green';
    submitButton.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'blue';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'red';
  }
  guessField.value = ''; // Clear the input field
  guessField.focus(); // Put cursor back in the input field
}

// Event listener for when the user presses Enter key
guessField.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkGuess();
  }
});
