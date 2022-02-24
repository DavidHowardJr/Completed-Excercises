console.log("Hello World!");

// INITIALIZING VARIABLES

let myName = "David";
const numStates = 50;
let hasTerritories = true;

// OPERATORS

let five = 5;
let four = 4;

let sum = five + four;
let isGreater = five > four;
let product = 231 * 4;

// COMMENTS

// Single Line comment

/* multi
line 
comment
*/

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", your aren't old enough to view this page!");
    }
}

// checkAge("Charles", 27); 
// checkAge("Abby", 21); 
// checkAge("James", 18); 
// checkAge("John", 17); 

let favVeggies = ["Brocolli", "Zuchini", "Carrot", "potato", "Tomato"];

favVeggies.forEach(function (veggie) {
    console.log(veggie);
});

let people = [
    {
        name: "john",
        age: 14,
    },
    {
        name: "seth",
        age: 16,
    },
    {
        name: "Ben",
        age: 21,
    },
    {
        name: "Cruz",
        age: 22,
    },
    {
        name: "Michael",
        age: 51,
    },
];

people.forEach(function (person) {
    checkAge(person.name, person.age);
});

function getLength(phrase) {
    return phrase.length;
}

let result = getLength("Hello World");

if (result % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}