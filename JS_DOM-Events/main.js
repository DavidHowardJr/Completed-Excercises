console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
// const node1 = document.getElementById("node1");
// node1.textContent = "I used the getElementById('node1') method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2");
node2[0].textContent =
  "I used the getElementByClassName('node2') method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3s = document.getElementsByTagName("h3");
for (let el of h3s) {
  el.textContent =
    "I used the getElementByTagName('h3') method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const p = document.createElement("p");
p.textContent = "I am a p element";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById("parent");
parent.appendChild(p);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const a = document.createElement("a");
a.textContent = "I am a <a> tag";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(a, p);
// BONUS: Add a link href to the <a>

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newNode = document.createElement("p");
newNode.textContent = "New Child Node";

//ex.replaceChild(newNode, oldNode)
const oldNode = document.getElementById("N1");
const ex = document.getElementById("exercise-container3");
// TODO: Remove the "New Child Node"
ex.removeChild(N1);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(move, 10);
let interval = setInterval(animate, 10);
let box = document.getElementById("box");
let container = document.getElementById("container");
let posX = 0;
let posY = 0;
let isX = true;
let dir = 1;

function animate() {
  // What axis am I moving on
  // What direction
  // you could use an if/else statement instead of a switch case in this scenario EX:
  /* if (isX) {
    moveX();
    } else {
    moveY();
    } */

  switch (true) {
    case isX && dir > 0:
      moveX();
      break;
    case !isX && dir > 0:
      moveY();
      break;
    case isX && dir < 0:
      moveX();
      break;
    case !isX && dir < 0:
      moveY();
      break;
  }
  // Determines movement on X axis
  function moveX() {
    posX += dir;
    box.style.left = posX + "px";
    if (posX >= container.clientWidth - box.clientWidth) {
      isX = false;
    } else if (posX == 0) {
      isX = false;
    }
  }

  // Determines movement on Y axis
  function moveY() {
    posY += dir;
    box.style.top = posY + "px";
    if (posY >= container.clientHeight - box.clientHeight) {
      isX = true;
      dir = -1;
    } else if (posY == 0) {
      isX = true;
      dir = 1;
    }
  }
}
// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionalit

// const btn = document.getElementById("btn");

// function randomRGB() {
//   return Math.floor(Math.random() * 256); // 0-255
// }
// btn.addEventListener("click", function () {
//   box.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
// });

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const feed = document.getElementById("feed");

btn.addEventListener("click", function () {
  feed.textContent = input.value;
});


