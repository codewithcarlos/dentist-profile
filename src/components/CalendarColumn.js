import React from "react";
import CalendarRow from "./CalendarRow";
import { connect } from "react-redux";
import adjustForTimeZone from "../utils/dates";

const CalendarColumn = (props) => {
  const { calendar, prefix } = props;
  const { schedule, viewDate } = calendar;
  const timeLookup = adjustForTimeZone(viewDate).split("T")[0];
  const scheduleLookup = schedule[timeLookup];
  const startTimes = scheduleLookup ? scheduleLookup[prefix] : scheduleLookup;
  const events = {};

  for (let key in startTimes) {
    events[Math.floor(key / 30) * 30] = {
      ...startTimes[key],
      top: Number(key),
    };
  }

  const hourBlocks = [];
  for (let i = 0; i < 1440; i += 30) {
    hourBlocks.push(i);
  }

  let left;
  if (prefix === "Dentist") {
    left = "70px";
  } else if (prefix === "Assistant") {
    left = "320px";
  } else if (prefix === "Hygenist") {
    left = "570px";
  }

  const divStyle = {
    backgroundColor: "#90caf9",
    width: "249px",
    minWidth: "249px",
    position: "absolute",
    left: left,
    height: 0,
    border: "1px solid green",
  };
  return (
    <div className="calendar-column">
      {hourBlocks.map((block, i) => (
        <CalendarRow
          key={i}
          blockType={block % 60 === 0 ? "hour" : "half-hour"}
          dataTime={`${prefix}-${block}`}
          calendarEvent={events[block + 30]}
          divStyle={events[block + 30] ? divStyle : { width: 0 }}
          height={events[block + 30] ? events[block + 30]["end"] : 0}
          top={block + 30}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  calendar: state.calendar,
});

export default connect(mapStateToProps)(CalendarColumn);
