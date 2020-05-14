import React from "react";
import CalendarHourlyLabels from "./CalendarHourlyLabels";
import CalendarTable from "./CalendarTable";

const CalendarHourly = () => {
  return (
    <div className="calendar-hourly">
      <CalendarHourlyLabels />
      <CalendarTable />
    </div>
  );
};

export default CalendarHourly;
