import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const CalendarHeader = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  return (
    <div className="calendar-header">
      <span className="nav-arrows">
        <ChevronLeftIcon />
      </span>
      <span className="nav-arrows">
        <ChevronRightIcon />
      </span>
      <div>
        <h2 className="calendar-header-date">
          {today.toLocaleDateString("en-US", options)}
        </h2>
      </div>
    </div>
  );
};

export default CalendarHeader;
