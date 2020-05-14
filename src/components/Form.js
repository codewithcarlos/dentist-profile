import React from "react";
import "./Form.css";
import { connect } from "react-redux";
import { updateSchedule } from "../actions";

const Form = (props) => {
  // eslint-disable-next-line no-extend-native
  Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
  };
  // eslint-disable-next-line no-extend-native
  Date.prototype.adjustForTimeZone = function () {
    var tzo = -this.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? "0" : "") + norm;
      };
    return (
      this.getFullYear() +
      "-" +
      pad(this.getMonth() + 1) +
      "-" +
      pad(this.getDate()) +
      "T" +
      pad(this.getHours()) +
      ":" +
      pad(this.getMinutes()) +
      ":" +
      pad(this.getSeconds()) +
      dif +
      pad(tzo / 60) +
      ":" +
      pad(tzo % 60)
    );
  };
  const { handleClose, schedule, dispatch } = props;
  const [calendarColumn, setCalendarColumn] = React.useState("Dentist");
  const [startTimeValue, setStartTimeValue] = React.useState(
    new Date().adjustForTimeZone().slice(0, 16)
  );
  const [endTimeValue, setEndTimeValue] = React.useState(
    new Date().addHours(1).adjustForTimeZone().slice(0, 16)
    // new Date(new Date().setHours(new Date().getHours() + 1))
  );
  console.log("schedule is", schedule);

  const handleChange = (event) => {
    setCalendarColumn(event.target.value);
  };
  const handleStartTime = (event) => {
    setStartTimeValue(event.target.value);
  };
  const handleEndTime = (event) => {
    setEndTimeValue(event.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const startDate = startTimeValue.split("T")[0];
    const startTime = startTimeValue.split("T")[1];
    const hour = Number(startTime.split(":")[0]);
    const minutes = Number(startTime.split(":")[1]);
    let start = hour * 60 + minutes + 30;
    const endDate = endTimeValue.split("T")[0];
    const end = (new Date(endTimeValue) - new Date(startTimeValue)) / 1000 / 60;
    console.log(startDate, startTime, calendarColumn, start, end);
    dispatch(updateSchedule(startDate, calendarColumn, start, end));
    handleClose();
  };

  return (
    <>
      <form className="login-form" onSubmit={(e) => handleSave(e)}>
        <div className="a-box">
          <div className="a-box-inner">
            <h2 className="a-spacing-small">Update Availability</h2>
            <div className="form-control-a">
              <label htmlFor="calendarColumn">Select a Calendar</label>
              <select
                value={calendarColumn}
                onChange={handleChange}
                className="calendar-dropdown-menu"
              >
                <option value={"Dentist"}>Dentist</option>
                <option value={"Assistant"}>Assistant</option>
                <option value={"Hygenist"}>Hygenist</option>
              </select>
            </div>
            <div className="form-control-a">
              <label htmlFor="startTime">Select a start time</label>
              <input
                type="datetime-local"
                id="meeting-time"
                name="meeting-time"
                value={startTimeValue}
                onChange={(e) => handleStartTime(e)}
              ></input>
            </div>
            <div className="form-control-a">
              <label htmlFor="endTime">Select an end time</label>
              <input
                type="datetime-local"
                id="meeting-time"
                name="meeting-time"
                value={endTimeValue}
                onChange={(e) => handleEndTime(e)}
              ></input>
            </div>
            <div className="save">
              <button className="btn right" type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.calendar.schedule,
});

export default connect(mapStateToProps)(Form);
