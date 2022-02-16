console.log("Hello World!");

let userGuess = prompt(`Type in a number! You can guess between ${minGuess} and ${maxGuess}.`);


let maxGuess = 100;
let rand = 3;
let minGuess = 1;

if (userGuess < minGuess || userGuess > maxGuess) {
    alert(`You gave me a number that was not between ${minGuess} and ${maxGuess}. Try Again!`
    );
} else {

    if (rand > userGuess) {
        alert("You guessed too low!");
    } else if (rand < userGuess) {
        alert("You guessed too high!");
    } else {
        alert("Congrats your did it! Dosn't it feel like a real win?!");
    }
}