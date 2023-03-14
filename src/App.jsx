import React, { Fragment, useState } from "react";
import SudokuBoard from "./components/SudokuBoard";
import NavigationBar from "./components/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import Sudoku from "sudoku";
import { assignToCell, clearBoard } from "./redux/slice";

const App = () => {
  const sudoku = useSelector((state) => state.sudoku.board);

  const dispatch = useDispatch();

  const handleSolveClick = async () => {
    const solved = await Sudoku.solvepuzzle(sudoku);

    // console.log(solved);
    dispatch(assignToCell(solved));
  };

  const handleGenerate = async (event) => {
    event.preventDefault();

    dispatch(clearBoard);

    const generated = await Sudoku.makepuzzle();

    dispatch(assignToCell(generated));
  };

  return (
    <Fragment>
      <NavigationBar />

      <article className={"flex items-center justify-center h-screen"}>
        <main className={"flex flex-col gap-2"}>
          <SudokuBoard board={sudoku} />

          <div className={"flex items-center gap-2 justify-center"}>
            <button onClick={handleGenerate} className={"px-4 py-2 bg-green-500 text-white rounded w-fit hover:bg-green-400 ease-in-out delay-100"}>Generate</button>
            <button onClick={handleSolveClick} className={"px-4 py-2 bg-blue-500 text-white rounded w-fit hover:bg-blue-400 ease-in-out delay-100"}>Solve</button>
          </div>
        </main>
      </article>
    </Fragment>
  );
};

export default App;