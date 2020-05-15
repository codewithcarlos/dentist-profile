import React, { useRef, useEffect } from "react";

const useMountEffect = (scroll) => useEffect(scroll, []);

const CalendarRow = ({
  blockType,
  dataTime,
  calendarEvent,
  divStyle,
  scrollLookup,
}) => {
  const myRef = useRef(null);

  // Scroll on mount
  useMountEffect(() => {
    if (scrollLookup === dataTime) {
      myRef.current.scrollIntoView();
    }
  });

  return (
    <>
      {scrollLookup === dataTime ? (
        <div className={blockType} data-time={dataTime} ref={myRef}>
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
              <span className="available">{` ${calendarEvent.startTime} - ${calendarEvent.endTime}`}</span>
            </div>
          ) : (
            <div className="events"></div>
          )}
        </div>
      ) : (
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
              <span className="available">{` ${calendarEvent.startTime} - ${calendarEvent.endTime}`}</span>
            </div>
          ) : (
            <div className="events"></div>
          )}
        </div>
      )}
    </>
  );
};

export default CalendarRow;
