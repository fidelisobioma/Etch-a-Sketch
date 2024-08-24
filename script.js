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
