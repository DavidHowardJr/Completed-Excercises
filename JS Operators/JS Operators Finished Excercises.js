console.log("JS Operators");

// Exercise 1

let a = 20;
let b = 4;

let add = a + b; // 24
let subtract = a - b; // 16
let multiply = a * b; // 80
let divide = a / b; // 5
let mod = a % b; // 0
let exponent = a ** b; // 160000

console.log(add, subtract, multiply, divide, mod, exponent)

// Exercise 2

let c = 11; 
let str = "11";  
let str2 = "eleven"; 
let isPresent = true; 
let firstName = "Jackie"; 
let lastName = "Chan"; 

// c + str = 1111
// c + str2 = 11eleven
// c + isPresent = 12
// c + firstName = 11Jackie
// c + lastName = 11Chan

console.log(c + str);
console.log(c + str2);
console.log(c + isPresent);
console.log(c + firstName);
console.log(c + lastName);

// Exercise 3

let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log(d == str3);
console.log(d === str3);
console.log(!isPresent2);
console.log("eleven" == str4 && d >= str3);
console.log(!isPresent2 || isPresent2);
console.log(0 == false);
console.log(0 === false);
console.log(0 != false);
console.log(0 !== false);

// d == str3 = true
// d === str3 = false
// !isPresent2 = true
// "eleven" == str4 && d >= str3 = false
// (!isPresent2 || isPresent2) = true
// 0 == false = true
// 0 === false = false
// 0 != false =  false
// 0 !== false = true
