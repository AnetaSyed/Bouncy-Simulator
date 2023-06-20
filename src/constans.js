const board = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

const table = document.querySelector("#game-board");
const rows = board.length;
const cols = board[0].length;

const possibleVariants = [
  [
    { row: -1, col: -1 },
    { row: 1, col: -1 },
    { row: 0, col: -1 },
  ],
  [
    { row: -1, col: 1 },
    { row: -1, col: -1 },
    { row: -1, col: 0 },
  ],
  [
    { row: -1, col: 0 },
    { row: 0, col: -1 },
    { row: -1, col: -1 },
  ],
  [
    { row: -1, col: 0 },
    { row: 0, col: 1 },
    { row: -1, col: 1 },
  ],
  [
    { row: -1, col: 1 },
    { row: 1, col: 1 },
    { row: 0, col: 1 },
  ],
  [
    { row: 1, col: -1 },
    { row: 1, col: 1 },
    { row: 1, col: 0 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
  ],
  [
    { row: -1, col: 1 },
    { row: 1, col: 1 },
    { row: 0, col: 1 },
  ],
  [
    { row: 0, col: -1 },
    { row: 1, col: 0 },
    { row: 1, col: -1 },
  ],
];

const startBttn = document.querySelector("#start-bttn");

export { board, table, rows, cols, possibleVariants, startBttn };
