let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let style = prompt("Fancy or silly?");

let closings = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
];

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function makeCard() {
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  console.log("Happy birthday from the generator.");
}

function makeCard() {
  if (style === "fancy") {
    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name + "!");
  }
 
}

function makeThankYouCard() {
  console.log("Dear " + name + ",");
  console.log("Thanks a " + noun + " — that was " + adjective + " of you.");
  console.log("Sincerely, the generator.");
}

setInterval(makeCard, 2000);
makeThankYouCard();