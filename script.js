const container = document.querySelector(".container");
const userInput = document.querySelector("input");
const message = document.querySelector(".message");
const button = document.querySelector(".insert");
const colorThemes = document.querySelectorAll(".color_theme");
const customColor = document.querySelector("#custom_color");
const resetBtn = document.querySelector("#reset");
const containerHeight = 350;
const containerWidth = 350;
container.style.cssText = `width:${containerWidth}px; height:${containerHeight}px`;
button.addEventListener("click", sketch);
function sketch() {
  if (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }
  const gridsContainer = document.createElement("div");
  gridsContainer.classList.add("gridsContainer");
  container.appendChild(gridsContainer);
  // creating grids
  let colsGrid = userInput.value;
  let rowsGrid = userInput.value;
  if (userInput.value < 1) {
    message.textContent = "Number cannot be less than 1";
    message.style.color = "red";
    colsGrid = 16;
    rowsGrid = 16;
  } else if (userInput.value > 100) {
    message.textContent = "Number cannot be more than 100";
    message.style.color = "red";
    colsGrid = 16;
    rowsGrid = 16;
  } else {
    message.textContent = `${userInput.value} x ${userInput.value}`;
    message.style.color = "black";
    colsGrid = userInput.value;
    rowsGrid = userInput.value;
  }
  const gridSize = containerWidth / rowsGrid;
  let grid;
  let createGrids = () => {
    grid = document.createElement("div");
    grid.style.cssText = `width:${gridSize}px; height:${gridSize}px; box-sizing: border-box; border: 1px solid white; background-color: #ccc;`;
    gridsContainer.appendChild(grid);
  };
  //create multiple grids
  const grids = colsGrid * rowsGrid;
  for (i = 0; i < grids; i++) {
    createGrids();
  }
  //add color to grids
  let selectColor;
  colorThemes.forEach((theme) => {
    theme.addEventListener("click", (e) => {
      selectColor = e.target.id;
    });
  });
  //custome color
  customColor.addEventListener("input", () => {
    selectColor = customColor.value;
  });

  let gridColor = Array.from(gridsContainer.children);
  gridColor.map((e) => {
    e.addEventListener("mouseenter", () => {
      if (selectColor) {
        e.style.backgroundColor = selectColor;
      } else {
        e.style.backgroundColor = "black";
      }
      e.style.cursor = "pointer";
    });
  });
  userInput.value = "";
  userInput.focus();
}
//load default value
window.addEventListener("DOMContentLoaded", () => {
  sketch();
});

resetBtn.addEventListener("click", () => {
  location.reload();
});

const colorContainer = document.querySelector(".color_container");
const buttons = document.querySelectorAll(".btn");
colorContainer.addEventListener("click", (e) => {
  let btn = e.target;
  if (btn.classList.contains("btn")) {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    btn.classList.add("active");
  }
});
