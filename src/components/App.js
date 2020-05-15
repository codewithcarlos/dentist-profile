import React from "react";
import "./App.css";
import Toolbar from "./Toolbar";
import Calendar from "./Calendar";
import CalendarHeader from "./CalendarHeader";

const App = () => {
  return (
    <div className="main">
      <Toolbar />
      <Calendar />
      <div className="availability">
        <CalendarHeader />
      </div>
    </div>
  );
};

export default App;
