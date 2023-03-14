import React from "react";

const NavigationBar = () => {
  return (
    <nav className={"bg-blue-500 flex px-4 py-2 fixed top-0 w-full"}>
      <span className={"text-white text-lg"}>React Sudoku Solver</span>
    </nav>
  );
};

export default NavigationBar;