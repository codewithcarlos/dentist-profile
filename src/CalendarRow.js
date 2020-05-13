import React from "react";

const CalendarRow = ({ blockType, dataTime }) => {
  return (
    <div className={blockType} data-time={dataTime}>
      <div className="events"></div>
    </div>
  );
};

export default CalendarRow;
