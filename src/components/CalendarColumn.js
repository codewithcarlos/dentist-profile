import React from "react";
import CalendarRow from "./CalendarRow";
import { connect } from "react-redux";
import adjustForTimeZone from "../utils/dates";

const CalendarColumn = (props) => {
  const { dispatch, calendar, prefix } = props;
  const { schedule, viewDate } = calendar;
  console.log(
    "poop",
    schedule,
    viewDate,
    adjustForTimeZone(viewDate).split("T")[0],
    schedule[adjustForTimeZone(viewDate).split("T")[0]]
  );
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

const mapStateToProps = (state) => ({
  calendar: state.calendar,
});

export default connect(mapStateToProps)(CalendarColumn);
