console.log("JavaScript Control Flow");

// Ask the user for a name
let userName = prompt("Who is playing today?");

// Ask the user for a game difficulty
let chosenDifficulty = prompt(
    "Choose difficulty (type: mediocre, easy, medium, hard, or superhard):"
);
let maxGuess; // undefined until the switch case 

switch (chosenDifficulty) {
    case "mediocre":
        maxGuess = 20;
        break;
    case "easy":
        maxGuess = 50;
        break;
    case "medium":
        maxGuess = 100;
        break;
    case "hard":
        maxGuess = 1000;
        break;
    case "superhard":
        maxGuess = 100000;
        break;
    default:
        maxGuess = 10;
}

// Create a number to guess
let numberToGuess = 7;
let minGuess = 1;

// Ask the user for a guess
// Store their guess for later use
let userGuess = prompt(
    `${userName}, Guess a whole number between ${minGuess} and ${maxGuess}`
    );

// Check to see if the guess is inbetween 1 and 10
if (userGuess < minGuess || userGuess > maxGuess) {
    alert(
        `${userName}, You gave me a number that was NOT between ${minGuess} and ${maxGuess}. Try Again!`
        );
} else {
    // Evaluate if the guess is equal to, higher than, or lower than the number to guess
    // Give feedback 
    if (numberToGuess < userGuess) {
        alert(`${userName}, You guessed too high!`);
    } else if (numberToGuess > userGuess) {
        alert(`${userName}, You guessed to low!`);
    } else {
        alert(`Congratulations!!! ${userName}!`);
    }
}

// Number Guessing Game
// Get Name
// Get difficulty
// Determine range
// Create number
// Get Guess
// Evaluate Guess
// Give Feedback

