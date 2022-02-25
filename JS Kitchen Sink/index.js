console.log("Hello World!");

console.log(100 < 90) // false
console.log("100" < "90") // true

let gradesStr = prompt(
    "List all grades in the following format:\n99,97,88,89,78"
); // returns a string!!!

// Creates an array of multiple values from one string, split on a specified character
let gradesArr = gradesStr.split(",").map(function (strNum) {
    return parseInt(strNum);
});

// Return average of grades 
function calcAverage(numsList) {
    let sum = numsList.reduce(function (sum, num) {
        return sum + parseInt(num); // Convert the strings into numbers
    }, 0);

    return sum / numsList.length;
}

let classAverage = calcAverage(gradesArr);

alert(`The class grade average was ${classAverage}`);     // check highest number

function highestNum(numsList) {
    return numsList.reduce(function (highest, num) {
        if (parseInt(highest) < parseInt(num)) {
            if (highest < num) {
                return num;
            } else {
                return highest;
            }
        }
    });
}

function lowestNum(numsList) {
    return numsList.reduce(function (lowest, num) {
        if (parseInt(lowest) > parseInt(num)) {
            return num;
        } else {
            return lowest;
        }
    });
}

alert(`The class highest grade was ${highestNum(gradesArr)}`);

alert(`The class lowest grade was ${lowestNum(gradesArr)}`);