// Create 16x16 grid
const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
  let grid = document.createElement("div");
  container.appendChild(grid);
  grid.setAttribute("class", "grid");
}
