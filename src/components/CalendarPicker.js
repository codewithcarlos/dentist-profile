import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { updateViewDate } from "../actions";

const CalendarPicker = (props) => {
  const { dispatch, viewDate } = props;

  const handleDateChange = (updatedDate) => {
    dispatch(updateViewDate(updatedDate));
  };

  return (
    <DatePicker
      selected={viewDate}
      onChange={(date) => handleDateChange(date)}
      inline
    />
  );
};

const mapStateToProps = (state) => ({
  viewDate: state.calendar.viewDate,
});

export default connect(mapStateToProps)(CalendarPicker);
