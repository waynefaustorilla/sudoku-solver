import React, { Fragment } from "react";
import SudokuBoard from "./components/SudokuBoard";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <Fragment>
      <NavigationBar />

      <article className={"flex items-center justify-center h-screen"}>
        <main className={"flex flex-col gap-2"}>
          <SudokuBoard />
        </main>
      </article>
    </Fragment>
  );
};

export default App;