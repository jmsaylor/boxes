let canvas = document.querySelector(".myCanvas");
// const width = (canvas.width = window.innerWidth);
// const height = (canvas.height = window.innerHeight);
const width = (canvas.width = 800);
const height = (canvas.height = 1000);

let ctx = canvas.getContext("2d");

function drawBoxes(age) {
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, width, height);

  let lifeExpectancy = 84 * 52;

  let boxWidth = 10;
  let boxHeight = 6;

  let yPosition = 5;
  let xPosition = 5;

  let counter = 1;

  for (let x = 1; x < lifeExpectancy; x++) {
    if (x < age * 52) {
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
}

drawBoxes(1);
