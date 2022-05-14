const grid = document.getElementById("grid");
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");
const clearBtn = document.getElementById("clearBtn");
const eraserBtn = document.getElementById("eraserBtn");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");

// global variable
let currentSize = 16;
let currentMode = "color";

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    gridItem.addEventListener("mousedown", changeColor);
    grid.appendChild(gridItem);
  }
}
createGrid(currentSize);

// track state of mouse button
let mouseDown = false;
document.onmousedown = function () {
  mouseDown = true;
};
document.onmouseup = function () {
  mouseDown = false;
};

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (currentMode === "color") e.target.style.backgroundColor = "#000000";
  else if (currentMode === "eraser") e.target.style.backgroundColor = "#f7ede2";
  else if (currentMode === "rainbow") {
    let randomRed = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  }
}

function setCurrentMode(newMode) {
  currentMode = newMode;
}

sizeSlider.addEventListener("input", (e) => updateSizeValue(e.target.value));
sizeSlider.addEventListener("input", (e) => changeGridSize(e.target.value));
clearBtn.onclick = reloadGrid;
eraserBtn.onclick = () => setCurrentMode("eraser");
colorBtn.onclick = () => setCurrentMode("color");
rainbowBtn.onclick = () => setCurrentMode("rainbow");

function updateSizeValue(value) {
  sizeValue.textContent = `${value} x ${value}`;
}
function clearGrid() {
  grid.textContent = "";
}
function reloadGrid() {
  clearGrid();
  createGrid(currentSize);
}
function changeGridSize(value) {
  currentSize = value;
  reloadGrid();
}
