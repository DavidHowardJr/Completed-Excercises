console.log(Hello World!);

// Exercise 1
/** Takes an array of numbers as a parameter and returns the sum value of each number in the array. */

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  let sum = 0;

  arr.forEach(function (num) {
    sum += num;
  });

  return sum;
}

let result = arraySum(numbers);

console.log(result);

//Exercise 2

const book = {};

book.title = prompt("What is the title of your favorite book?");
book.author = prompt("What is the author of your favorite book?");
book.pageCount = prompt("How many pages does your favorite book have?");
book.readCount = prompt("How many times have you read your favorite book?");

book.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) long, that has been read ${this.readCount} 
  times(s).`;
};

console.log(book.info());
