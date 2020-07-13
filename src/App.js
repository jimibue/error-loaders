import React from "react";
import "./App.css";
import SpinnerDemo from "./SpinnerDemo";
import ErrorDemo from "./ErrorDemo";
import UseAxiosSpinner from "./UseAxiosSpinner";

function App() {
  return (
    <div className="App">
      <UseAxiosSpinner />
      <ErrorDemo />

      <SpinnerDemo />
    </div>
  );
}

export default App;
