import React from "react";
import "./Form.css";
// import { MenuItem, Select } from "@material-ui/core";

const Form = ({ handleClose }) => {
  const [calendarColumn, setCalendarColumn] = React.useState("Dentist");
  const [startTimeValue, setStartTimeValue] = React.useState(
    "2018-06-12T19:30"
  );
  const [endTimeValue, setEndTimeValue] = React.useState("2018-06-12T20:30");

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
    console.log(calendarColumn, startTimeValue, endTimeValue);
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

export default Form;
