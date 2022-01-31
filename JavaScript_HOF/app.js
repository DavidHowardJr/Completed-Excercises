console.log("JS HOF Excercise");

let plus = (initialNum) => {
    return (number) => {
        return initialNum + number;
    };
};

const plus15 = plus(15);

console.log(plus15(15)); // 30
console.log(plus15(45)); // 60
console.log(plus15(-10)); // 5

console.log(plus15(10)); // 25





