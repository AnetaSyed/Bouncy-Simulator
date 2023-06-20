import { possibleVariants } from "./constans.js";

let possibleMoves = [];
function chooseDirection(ball, cell) {
  if (ball.destRow > 0) {
    if (ball.destCol > 0) {
      if (cell.current.nextElementSibling.className === "border") {
        possibleMoves = [...possibleVariants[0]];
      } else if (
        cell.next.previousElementSibling.className === "border" &&
        cell.next.nextElementSibling.className === "border"
      ) {
        possibleMoves = [...possibleVariants[1]];
      } else {
        possibleMoves = [...possibleVariants[2]];
      }
    } else if (ball.destCol === 0) {
      possibleMoves = [...possibleVariants[1]];
    } else if (ball.destCol < 0) {
      if (cell.current.previousElementSibling.className === "border") {
        possibleMoves = [...possibleVariants[0]];
      } else if (
        cell.next.previousElementSibling.className === "border" &&
        cell.next.nextElementSibling.className === "border"
      ) {
        possibleMoves = [...possibleVariants[1]];
      } else {
        possibleMoves = [...possibleVariants[3]];
      }
    }
  } else if (ball.destRow === 0) {
    if (ball.destCol < 0) {
      possibleMoves = [...possibleVariants[4]];
    } else if (ball.destCol > 0) {
      possibleMoves = [...possibleVariants[0]];
    }
  } else if (ball.destRow < 0) {
    if (ball.destCol < 0) {
      if (cell.current.previousElementSibling.className === "border") {
        possibleMoves = [...possibleVariants[0]];
      } else if (
        cell.next.previousElementSibling.className === "border" &&
        cell.next.nextElementSibling.className === "border"
      ) {
        possibleMoves = [...possibleVariants[5]];
      } else {
        possibleMoves = [...possibleVariants[6]];
      }
    } else if (ball.destCol === 0) {
      possibleMoves = [...possibleVariants[5]];
    } else if (ball.destCol > 0) {
      if (cell.current.nextElementSibling.className === "border") {
        possibleMoves = [...possibleVariants[7]];
      } else if (
        cell.next.previousElementSibling.className === "border" &&
        cell.next.nextElementSibling.className === "border"
      ) {
        possibleMoves = [...possibleVariants[5]];
      } else {
        possibleMoves = [...possibleVariants[8]];
      }
    }
  }

  randomDirection(ball, cell, possibleMoves);
}

function randomDirection(ball, cell, array) {
  if (cell.next.className === "temporary-field") {
    for (let i = 0; i < array.length; i++) {
      if (array[i].row === -ball.destRow && array[i].col === -ball.destCol) {
        array.splice(i, 1);
      }
    }
  }
  
  const min = 0;
  const max = array.length - 1;
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

  ball.destRow = array[randomIndex].row;
  ball.destCol = array[randomIndex].col;
}

export { chooseDirection };
