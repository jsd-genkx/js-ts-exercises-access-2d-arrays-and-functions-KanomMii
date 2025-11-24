const board = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

const rowLength = board.length;
const colLength = board[0].length;
const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
function moveRight() {
  if (col < rowLength) {
    col++;
    moves.push(board[row][col]);
  } else {
    console.log("Invalid move");
  }
}

function moveLeft() {
  if (col > 0) {
    col--;
    moves.push(board[row][col]);
  } else {
    console.log("Invalid move");
  }
}

function moveUp() {
  if (row > 0) {
    row--;
    moves.push(board[row][col]);
  } else {
    console.log("Invalid move");
  }
}

function moveDown() {
  if (row < colLength) {
    row++;
    moves.push(board[row][col]);
  } else {
    console.log("Invalid move");
  }
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
