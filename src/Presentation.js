import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarHourly from "./CalendarHourly";

const Presentation = () => {
  return (
    <div className="presentation">
      <CalendarHeader />
      <CalendarHourly />
    </div>
  );
};

export default Presentation;
