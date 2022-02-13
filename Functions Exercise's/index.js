console.log("Functions Exercise");

function printOdds(count) {
  for (let i = 1; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOdds(23);

function checkAge(name, age) {
  let above16Msg = `Congrats ${name}, you can drive!`;
  let below16Msg = `Sorry ${name}, you have to wait ${
    16 - age
  } year(s) until you can drive`;

  if (age >= 16) {
    console.log(above16Msg);
  } else {
    console.log(below16Msg);
  }
}

checkAge("David", 14);
checkAge("Dylan", 16);
checkAge("Dan", 23);
