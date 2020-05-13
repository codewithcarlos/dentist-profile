import React from "react";
import CalendarRow from "./CalendarRow";

const CalendarColumn = ({ prefix }) => {
  const hourBlocks = [];
  for (let i = 0; i < 1440; i += 30) {
    hourBlocks.push(i);
  }
  return (
    <div className="calendar-column">
      {hourBlocks.map((block, i) => (
        <CalendarRow
          key={i}
          blockType={block % 60 === 0 ? "hour" : "half-hour"}
          dataTime={`${prefix}-${block}`}
        />
      ))}
    </div>
  );
};

export default CalendarColumn;
