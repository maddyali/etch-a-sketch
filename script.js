const grid = document.getElementById("grid");
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");
const clearBtn = document.getElementById("clearBtn");

// global variable
let currentSize = 16;

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
  if (e.target.matches(".grid-item")) {
    e.target.classList.add("active");
  }
}
sizeSlider.addEventListener("input", (e) => updateSizeValue(e.target.value));
sizeSlider.addEventListener("input", (e) => changeGridSize(e.target.value));
clearBtn.onclick = reloadGrid;

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
