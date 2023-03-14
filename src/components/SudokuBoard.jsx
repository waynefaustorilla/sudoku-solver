import React from "react";
import { useSelector } from "react-redux";

const SudokuBoard = ({ board }) => {
  const sudoku = useSelector((state) => state.sudoku.board);

  return (
    <div className={"sudoku-board grid grid-cols-9"}>
      {
        sudoku.map((number, index) => {
          return (
            <input type="text" key={index} defaultValue={number !== null ? (number + 1) : number} className={"border border-black text-center w-12 h-12"} />
          )
        })
      }
    </div>
  );
};

export default SudokuBoard;
