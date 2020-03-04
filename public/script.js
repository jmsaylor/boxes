function changeAge(e) {
  e.preventDefault();

  ctx.clearRect(0, 0, width, height);

  let age = document.getElementById("age").value;
  console.log(age);
  drawBoxes(age);
}
