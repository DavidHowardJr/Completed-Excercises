console.log("JS OOP Exercise");

class Person {
  constructor(name, numPets, residence, hobbies) {
    this.name = name;
    this.numPets = numPets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  info() {
    console.log(
      `${this.name} has ${this.numPets} pet(s), lives in ${
        this.residence
      }, and enjoys ${this.hobbies.join(" and ")}.`
    );
  }

  greet() {
    console.log("Hello!");
  }
}

class Coder extends Person {
  constructor(name, numPets, residence, hobbies) {
    super(name, numPets, residence, hobbies);

    this.occupation = "Full stack Web Developer";
  }

  greet() {
    console.log("Hi TrueCoder!");
  }
}

let ben = new Person("Ben", 1, "Hoover", [
  "coding",
  "running",
  "ping pong",
  "reading",
]);

let seth = new Person("Seth", 0, "Warrior", ["skate boarding", "video games"]);

ben.info(); // Ben has 1 pet(s), lives in Hoover, and enjoys coding and running and ping pong and reading.
ben.greet(); // Hello

seth.info();
seth.greet();

let tanner = new Coder("Tanner", 0, "Trussville", ["video games", "coding"]);

tanner.info();
tanner.greet();
