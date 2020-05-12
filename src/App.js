import React from "react";
import "./App.css";
import Toolbar from "./Toolbar";
import Calendar from "./Calendar";

const App = () => {
  return (
    <div className="main">
      <Toolbar />
      <Calendar />
    </div>
  );
};

export default App;
