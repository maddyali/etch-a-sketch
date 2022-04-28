const grid = document.getElementById("grid");

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", changeColor);
    grid.appendChild(gridItem);
  }
}
createGrid(16);

function changeColor(e) {
  if (e.target.matches(".grid-item")) {
    e.target.classList.add("active");
  }
}
