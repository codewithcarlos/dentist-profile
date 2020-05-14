import React from "react";
import CalendarColumn from "./CalendarColumn";

const CalendarTable = () => {
  const columns = ["Dentist", "Assistant", "Hygenist"];
  return (
    // <div className="calendar-table-container">
    <div className="calendar-table">
      {columns.map((column, i) => (
        <div className="column-container" key={i}>
          <div className="column-header">{column}</div>
          <CalendarColumn prefix={column} />
        </div>
      ))}
    </div>
    // </div>
  );
};

export default CalendarTable;
