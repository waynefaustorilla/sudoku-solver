import { createSlice } from "@reduxjs/toolkit";

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
    assignToCell: (state, { payload }) => {
      state.board = payload;
    },
    clearBoard: (state) => {
      state.board = emptyBoard;
    }
  }
});

export const { assignToCell, clearBoard } = sudokuSlice.actions;

export default sudokuSlice.reducer;