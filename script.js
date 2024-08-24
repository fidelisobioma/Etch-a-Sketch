//Dynamicallly styling div element
const container = document.querySelector(".grid_container");
const cWidth = 300;
const cHeight = 300;
container.style.cssText = `width:${cWidth}px; height: ${cHeight}px;`;
//Adding box size
const boxRows = 10;
const boxCols = 10;
let boxes = boxRows * boxCols;
let boxSize = cWidth / boxRows;
//create single box
let createBoxes = () => {
  const box = document.createElement("div");
  box.style.cssText = `box-sizing: border-box;width: ${boxSize}px;height: ${boxSize}px; background-color:#ccc;  border: 1px solid white;`;
  container.appendChild(box);
};
//create multiple boxes
for (i = 0; i < boxes; i++) {
  createBoxes();
}
