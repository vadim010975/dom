export default class Board {
  constructor(size) {
    this.size = size;
    this.boardEl = document.querySelector("[data-id=board]");
  }

  init() {
    console.log("init");
    for (let i = 0; i < Math.pow(this.size, 2); i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("cell");
      this.boardEl.appendChild(cellEl);
    }
    this.cells = Array.from(this.boardEl.children);
  }
}
