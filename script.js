const randomButton = document.querySelector(`.random-button`);
const eraserButton = document.querySelector(`.eraser-button`);
const resetButton = document.querySelector(`.reset-button`);
const colorModal = document.getElementById("color-modal");
const gridNumber = document.getElementById("demo");
let rgb = ``;
let gridSize = 16;
const openModal = document.getElementById("color-button");
const closeModal = document.getElementsByClassName(`close`)[0];

const gridMaker = () => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.querySelector(`.square-container`);
    const box = document.createElement(`div`);
    box.className = `box`;
    grid.appendChild(box);
  }
};
gridMaker();
const boxes = document.querySelectorAll(`.box`);
const colorBoxes = () => {
  for (const box of boxes) {
    box.addEventListener(`click`, () => {
      box.style.background = `${rgb}`;
    });
  }
};
const flyOver = () => {
  for (const box of boxes) {
    box.addEventListener("mouseover", () => {
      box.style.background = `${rgb}`;
    });
  }
};
flyOver();
const eraser = () => {
  for (const box of boxes) {
    box.addEventListener("mouseover", () => {
      box.style.background = `white`;
    });
  }
};
const randomColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  rgb = `rgb(${x},${y},${z})`;
  colorBoxes();
  flyOver();
};

randomButton.addEventListener(`click`, () => {
  randomColor();
});
eraserButton.addEventListener(`click`, () => {
  eraser();
});
resetButton.addEventListener(`click`, () => {
  for (const box of boxes) {
    box.style.background = `white`;
  }
});

var slider = document.getElementById("grid-size");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
  gridSize = Number((output.innerHTML = this.value));
};
