const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("main-btn");
const colorDisplay = document.querySelector(".main-colors");

btn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
document.addEventListener("DOMContentLoaded", () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const btn = document.getElementById("main-btn");
  const color = document.querySelector(".main-colors");

  btn.addEventListener("click", () => {
    const hexColor = generateHexColor();
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  });

  function generateHexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    return hexColor;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }
});
