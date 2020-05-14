import React from "react";

const CalendarRow = ({
  blockType,
  dataTime,
  calendarEvent,
  divStyle,
  height,
  top,
}) => {
  if (calendarEvent) {
    // divStyle['height'] = height.end;
    // console.log("div style", divStyle, height, top, calendarEvent);
  }
  return (
    <div className={blockType} data-time={dataTime}>
      {calendarEvent ? (
        <div
          className="events"
          style={{
            ...divStyle,
            height: calendarEvent["end"],
            top: calendarEvent["top"],
          }}
        >
          <span className="available">Available</span>
        </div>
      ) : (
        <div className="events"></div>
      )}
    </div>
  );
};

export default CalendarRow;
