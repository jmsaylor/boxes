const canvas = document.querySelector(".myCanvas");
// const width = (canvas.width = window.innerWidth);
// const height = (canvas.height = window.innerHeight);
const width = (canvas.width = 800);
const height = (canvas.height = 1000);

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

let boxWidth = 10;
let boxHeight = 6;

let yPosition = 5;
let xPosition = 5;

let counter = 1;

for (let x = 1; x < weeksInLife(8); x++) {
  if (x < ageMarker(33)) {
    ctx.fillStyle = "rgb(0, 0, 255)";
  } else {
    ctx.fillStyle = "rgb(255, 255, 255)";
  }

  ctx.fillRect(xPosition, yPosition, boxWidth, boxHeight);

  xPosition = (3 + boxWidth) * counter;
  counter++;

  if (xPosition > width) {
    yPosition += 10;
    xPosition = 5;
    counter = 1;
  }
}

function ageMarker(age) {
  return age * 52;
}

function weeksInLife(healthyLifeVar = 0) {
  const lifespan = 75 + healthyLifeVar;

  return lifespan * 52;
}
