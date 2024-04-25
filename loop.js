// Guess the number function
function guessTheNumber(difficulty) {
  let randomNumbers;
  let attempts = 0;
  let maxAttempts;
  let range;

  // set difficulty-based parameters
  switch (difficulty) {
    case "easy":
      range = 10;
      maxAttempts = 5;
      randomNumbers = Math.floor(Math.random() * 10) + 1; // range 1 - 10
      console.log(randomNumbers);
      break;
    case "medium":
      range = 100;
      maxAttempts = 7;
      randomNumbers = Math.floor(Math.random() * 100) + 1; // range 1 - 10
      console.log(randomNumbers);
      break;
    case "hard":
      range = 1000;
      maxAttempts = 10;
      randomNumbers = Math.floor(Math.random() * 1000) + 1; // range 1 - 10
      console.log(randomNumbers);
      break;
    default:
      console.error(
        'Invalid difficulty level. Choose "easy", "medium" or "hard" '
      );
  }

  // get user input and difficulty
  while (attempts < maxAttempts) {
    let guess = parseInt(
      prompt(
        `Guess a number between 1 to ${range} (Inclusive). You have ${
          maxAttempts - attempts
        } attempts left`
      )
    );
    attempts++;

    if (guess === randomNumbers) {
      console.log(
        "Congratulations! you guess the number in",
        attempts,
        " attempts"
      );
      break;
    } else if (guess < randomNumbers) {
      console.log("Too Low. try again");
    } else {
      console.log("Too High. try again");
    }
    console.log(guess);
  }
  if (maxAttempts === attempts) {
    console.log(
      "Sorry, You ran out of attempts, The number was",
      randomNumbers
    );
  }
}

// Get user input difficulty
let difficulty = prompt("Chose difficulty (easy, medium, hard)").toLowerCase();

// console.log(difficulty);
guessTheNumber(difficulty);
