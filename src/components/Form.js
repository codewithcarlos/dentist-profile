import React from "react";
import "./Form.css";
import { connect } from "react-redux";
import { updateSchedule } from "../actions";
import adjustForTimeZone from "../utils/dates";

const Form = (props) => {
  // eslint-disable-next-line no-extend-native
  Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
  };
  const { handleClose, viewDate, dispatch } = props;
  const [calendarColumn, setCalendarColumn] = React.useState("Dentist");
  const [startTimeValue, setStartTimeValue] = React.useState(
    adjustForTimeZone(viewDate).slice(0, 16)
  );
  const [endTimeValue, setEndTimeValue] = React.useState(
    adjustForTimeZone(new Date(viewDate).addHours(1)).slice(0, 16)
    // new Date(new Date().setHours(new Date().getHours() + 1))
  );

  // ensure that end time is at least one minute after start time
  let minDate = new Date(startTimeValue);
  minDate = adjustForTimeZone(
    new Date(minDate.getTime() + 1000 * 60)
  ).slice(0, 16);

  // ensure same day scheduling
  let maxDate = new Date(startTimeValue);
  maxDate =
    adjustForTimeZone(new Date(maxDate.setDate(maxDate.getDate() + 1)))
      .slice(0, 16)
      .split("T")[0] + "T00:00";

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
    let startTime = startTimeValue.split("T")[1];
    let endTime = endTimeValue.split("T")[1];

    function formatAMPM(hour, minutes) {
      let formattedTime;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hour > 12) {
        formattedTime = `${hour - 12}:${minutes}PM`;
      } else if (hour === 12) {
        formattedTime = `12:${minutes}PM`;
      } else if (hour === 0) {
        formattedTime = `12:${minutes}AM`;
      } else {
        formattedTime = `${hour}:${minutes}AM`;
      }
      return formattedTime;
    }
    const hour = Number(startTime.split(":")[0]);
    const minutes = Number(startTime.split(":")[1]);
    const endHour = Number(endTime.split(":")[0]);
    const endMinutes = Number(endTime.split(":")[1]);

    startTime = formatAMPM(hour, minutes);
    endTime = formatAMPM(endHour, endMinutes);
    let start = hour * 60 + minutes + 30;
    let end = (new Date(endTimeValue) - new Date(startTimeValue)) / 1000 / 60;
    if (end < 30) end = 30;
    dispatch(
      updateSchedule(startDate, calendarColumn, start, end, startTime, endTime)
    );
    handleClose();
  };

  return (
    <>
      <form className="login-form" onSubmit={(e) => handleSave(e)}>
        <div className="a-box">
          <div className="a-box-inner">
            <h2 className="a-spacing-small">Update Availability</h2>
            <div className="form-control-a">
              <label htmlFor="calendarColumn">Select a column</label>
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
                min={minDate}
                max={maxDate}
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
  viewDate: state.calendar.viewDate,
});

export default connect(mapStateToProps)(Form);
