import Board from "./Board";
import imgEl from "./imgEl";

const sizeBoard = 4;

const board = new Board(sizeBoard);
board.init();
let cellEl = null;
setInterval(() => {
  let newCellEl;
  do {
    newCellEl = board.cells[Math.floor(Math.random() * board.cells.length)];
  } while (newCellEl === cellEl);
  newCellEl.appendChild(imgEl);
  cellEl = newCellEl;
}, 2000);
