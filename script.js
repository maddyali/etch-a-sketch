const grid = document.getElementById("grid");
// Create grid
function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    grid.appendChild(gridItem);
  }
}
createGrid(16);
// Change color of divs on hover
const gridItems = document.querySelectorAll(".grid-item");
function paintGrid() {
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseover", function (e) {
      if (e.target.matches(".grid-item")) {
        e.target.classList.add("active");
      }
    });
  }
}
paintGrid();
