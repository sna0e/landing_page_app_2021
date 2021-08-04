import React from "react";
import "./App.css";
import Bar from "./components/Bar";
import Main from "./components/Main";
import Introduce from "./components/Introduce";

function App() {
  return (
    <div className="container">
      <Bar />
      <Main />
      <div className="line"></div>
      <Introduce />
    </div>
  );
}

export default App;
