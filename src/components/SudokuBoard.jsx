import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Sudoku from "sudoku";
import { populate, assign } from "./../redux/slice/index";

const SudokuBoard = () => {
  const sudoku = useSelector((state) => state.sudoku.board);

  const dispatch = useDispatch();

  const handleSolveClick = async () => {
    const solved = await Sudoku.solvepuzzle(sudoku);

    dispatch(populate(solved));
  };

  const handleGenerate = async (event) => {
    event.preventDefault();

    dispatch(populate());
  };

  return (
    <div className={"border border-black p-3 flex flex-col rounded shadow gap-3"}>
      <div className={"grid grid-cols-9"}>
        {
          sudoku.map((number, index) => {
            return (
              <input
                key={index}
                type="text"
                defaultValue={number !== null ? (number + 1) : number}
                className={`border border-black text-center w-12 h-12 ${number !== null ? "bg-gray-200" : ""}`}
                onChange={(event) => dispatch(assign({ index: index, number: event.target.value }))}
              />
            )
          })
        }
      </div>

      <div className={"flex items-center gap-2 justify-center"}>
        <button onClick={handleGenerate} className={"px-4 py-2 bg-green-500 text-white rounded-full w-fit hover:bg-green-400 ease-in-out delay-100"}>Generate</button>
        <button onClick={handleSolveClick} className={"px-4 py-2 bg-blue-500 text-white rounded-full w-fit hover:bg-blue-400 ease-in-out delay-100"}>Solve</button>
      </div>
    </div>
  );
};

export default SudokuBoard;