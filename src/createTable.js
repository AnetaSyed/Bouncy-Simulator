import { board, table, rows, cols } from "./constans.js";

function createTable() {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      if (board[i][j] === "X") {
        cell.classList.add("border");
      } else if (board[i][j] === "0") {
        cell.classList.add("game-field");
      } else if (board[i][j] === "Y") {
        cell.classList.add("temporary-field");
      } else if (board[i][j] === "1") {
        cell.classList.add("ball");
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

export { createTable };
