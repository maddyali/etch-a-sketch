const gridContainer = document.querySelector(".container");
// Create 16x16 grid
function createGrid() {
  for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
  }
}
createGrid();
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
