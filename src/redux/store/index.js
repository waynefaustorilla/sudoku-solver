import { configureStore } from "@reduxjs/toolkit";
import sudokuReducer from "./../slice/index";

export const store = configureStore({
  reducer: {
    sudoku: sudokuReducer
  },
});