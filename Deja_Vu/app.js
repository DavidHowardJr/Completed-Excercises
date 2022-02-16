console.log("Deja Vu");

let userName = prompt("Name please.");

let numberSet = prompt("Choose a set of numbers to guess between: 1 through 10, 11 through 20, 21 through 30. ");

let minGuess;
let maxGuess;
let rand;

switch (numberSet) {
    case "1 through 10":
        rand = 3;
        minGuess = 1;
        maxGuess = 10;
        break;
    case "11 through 20":
        rand = 14;
        minGuess = 11;
        maxGuess = 20;
        break;
    case "21 through 30":
        rand = 28;
        minGuess = 21;
        maxGuess = 30;
        break;
    default:
        rand = 7;
        minGuess = 1;
        maxGuess = 10;
}

let userGuess = prompt(
  `${userName}, Type in a number! You can guess between ${minGuess} and ${maxGuess}.`
);

if (userGuess < minGuess || userGuess > maxGuess) {
  alert(
    `${userName}, You gave me a number that was not between ${minGuess} and ${maxGuess}. Try Again!`
    );
} else {
  if (rand > userGuess) {
    alert("You guessed too low!");
  } else if (rand < userGuess) {
    alert("You guessed too high!");
  } else {
    alert(`Congrats your did it! Dosn't it feel like a real win ${userName}?!`);
  }
}


