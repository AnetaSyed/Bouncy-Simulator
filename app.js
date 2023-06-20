import { table, startBttn } from "./src/constans.js";
import { createTable } from "./src/createTable.js";
import { chooseDirection } from "./src/chooseDirection.js";

createTable();

const ball = {
  row: document.querySelector(".ball").parentNode.rowIndex,
  col: document.querySelector(".ball").cellIndex,
  destRow: 1,
  destCol: 1,
};

function moveBall() {
  ball.row = document.querySelector(".ball").parentNode.rowIndex;
  ball.col = document.querySelector(".ball").cellIndex;

  const cell = {
    current: table.rows[ball.row].cells[ball.col],
    next: table.rows[ball.row + ball.destRow].cells[ball.col + ball.destCol],
  };

  if (cell.next.className === "game-field") {
    cell.current.classList.remove("ball");
    cell.current.classList.add("game-field");
    cell.next.classList.add("ball");
    cell.next.classList.remove("game-field");
  } else if (cell.next.className === "temporary-field") {
    chooseDirection(ball, cell);
    cell.next.classList.remove("temporary-field");
    cell.next.classList.add("game-field");
  } else if (cell.next.className === "border") {
    chooseDirection(ball, cell);
  }

  setTimeout(moveBall, 100);
}

startBttn.addEventListener("click", moveBall);
