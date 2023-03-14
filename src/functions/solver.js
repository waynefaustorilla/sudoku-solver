import Swal from "sweetalert2";

export class SudokuSolver {
  static isNumberInRow = (board, number, row) => {
    for (let index = 0; index < board.length; index++) {
      if (board[row][index] == number) {
        return true;
      }
    }

    return false;
  };

  static isNumberInColumn = (board, number, column) => {
    for (let index = 0; index < board.length; index++) {
      if (board[index][column] == number) {
        return true;
      }
    }

    return false;
  };

  static isNumberInBox = (board, number, row, column) => {
    const localBoxRow = row - row % 3;
    const localBoxColumn = column - column % 3;

    for (let x = localBoxRow; x < localBoxRow + 3; x++) {
      for (let y = localBoxColumn; y < localBoxColumn + 3; y++) {
        if (board[x][y] === number) {
          return true;
        }
      }
    }

    return false;
  };

  static isValidPlacement = (board, number, row, column) => {
    return !this.isNumberInRow(board, number, row) && !this.isNumberInColumn(board, number, column) && !this.isNumberInBox(board, number, row, column);
  };

  static solveBoard = (board) => {
    try {
      for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {
          if (board[row][column] === 0) {
            for (let numberToTry = 1; numberToTry <= board.length; numberToTry++) {
              if (this.isValidPlacement(board, numberToTry, row, column)) {
                board[row][column] = numberToTry;

                if (this.solveBoard(board)) {
                  return true;
                } else {
                  board[row][column] = 0;
                }
              }
            }

            return false;
          }
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: error,
        icon: "error",
        timer: 3000,
        showCancelButton: false,
        showConfirmButton: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false
      });
    }
  };
}