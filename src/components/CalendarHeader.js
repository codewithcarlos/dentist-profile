import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";
import { updateViewDate } from "../actions";

const CalendarHeader = (props) => {
  const { dispatch, viewDate } = props;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handlePrevDayClick = () => {
    const newDate = new Date(viewDate.setDate(viewDate.getDate() - 1));
    console.log("left click", newDate.toLocaleDateString("en-US", options));
    dispatch(updateViewDate(newDate));
  };

  const handleNextDayClick = () => {
    const newDate = new Date(viewDate.setDate(viewDate.getDate() + 1));
    console.log("right click", newDate.toLocaleDateString("en-US", options));
    dispatch(updateViewDate(newDate));
  };

  return (
    <div className="calendar-header">
      <span className="nav-arrows" onClick={() => handlePrevDayClick()}>
        <ChevronLeftIcon />
      </span>
      <span className="nav-arrows" onClick={() => handleNextDayClick()}>
        <ChevronRightIcon />
      </span>
      <div>
        <h2 className="calendar-header-date">
          {viewDate.toLocaleDateString("en-US", options)}
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  viewDate: state.calendar.viewDate,
});

export default connect(mapStateToProps)(CalendarHeader);
