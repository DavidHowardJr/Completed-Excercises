console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Loop from 1 to 100, print the odd numbers
for (let number = 1; number <= 100; number++) {
    if (number % 2 != 0) {
        console.log(number);
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// Loop from 1 to 100, print FIZZ, BUZZ, or FIZZBUZZ depending on division of 3 or 5

for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        // number is divisible by 3
        console.log(number, "FIZZBUZZ");
    } else if (number % 5 == 0) {
        // number is divisible by 5
        console.log(number, "BUZZ");
    } else if (number % 3 == 0 ) {
        // number is divisible by both 3 and 5
        console.log(number, "FIZZ");
    }
}

// 3rd example shortened

// How many numbers from 1 to 100 are not divisible by 3, 5, or both?
let start = 1;
let end = 100;
let count = 0;

for (let number = 1; number <= 100; number++) {
    // Is number NOT divisible by 3 AND 5
    if (number % 5 != 0 && number % 3 != 0) {
        count++;
    }
}

console.log(count);