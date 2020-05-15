import React from "react";
import CalendarRow from "./CalendarRow";
import { connect } from "react-redux";
import adjustForTimeZone from "../utils/dates";

const CalendarColumn = (props) => {
  const { calendar, prefix } = props;
  const { schedule, viewDate } = calendar;
  const dateLookup = adjustForTimeZone(viewDate).split("T")[0];
  const scheduleLookup = schedule[dateLookup];
  const startTimes = scheduleLookup ? scheduleLookup[prefix] : scheduleLookup;
  const events = {};

  const timeLookup = adjustForTimeZone(viewDate).split("T")[1];
  const hour = Number(timeLookup.split(":")[0]);
  const minutes = Number(timeLookup.split(":")[1]);

  // the subraction of 30 is because the headers (Dentist, Assistant, Hygenist) take up 30px of space
  let scrollLookup = hour * 60 + minutes - 30;
  scrollLookup = `Dentist-${Math.floor(scrollLookup / 30) * 30}`;

  // transformation logic so that availability appears on the correct time block
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
          scrollLookup={scrollLookup}
        />
      ))}
      <div className="filler"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  calendar: state.calendar,
});

export default connect(mapStateToProps)(CalendarColumn);
