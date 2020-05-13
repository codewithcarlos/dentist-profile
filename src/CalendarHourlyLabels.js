import React from "react";
import CalendarHourlyLabel from "./CalendarHourlyLabel";

const CalendarHourlyLabels = () => {
  const labels = ["12 AM"];
  for (let i = 1; i < 24; i++) {
    let label;
    if (i > 12) {
      label = i - 12 + " PM";
    } else if (i === 12) {
      label = "12 PM";
    } else {
      label = i + " AM";
    }
    labels.push(label);
  }

  return (
    <div className="calendar-hourly-labels">
      {labels.map((label, i) => (
        <CalendarHourlyLabel key={i} label={label} />
      ))}
    </div>
  );
};

export default CalendarHourlyLabels;
