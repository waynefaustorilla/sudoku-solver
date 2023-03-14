import { createSlice } from "@reduxjs/toolkit";
import Sudoku from "sudoku";

let emptyBoard = {
  board: [
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
  ]
};

const sudokuSlice = createSlice({
  name: "board",
  initialState: emptyBoard,
  reducers: {
    populate: (state) => {
      state.board = emptyBoard;
      state.board = Sudoku.makepuzzle();
    },
    clearBoard: (state) => {
      state.board = emptyBoard;
    },
    assign: (state, { payload }) => {
      const { index, number } = payload;

      state.board[index] = parseInt(number);
    }
  }
});

export const { populate, clearBoard, assign } = sudokuSlice.actions;

export default sudokuSlice.reducer;