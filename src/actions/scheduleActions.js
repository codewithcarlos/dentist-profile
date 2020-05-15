import { CONSTANTS } from "../actions";

export const updateViewDate = (updatedDate) => {
  return {
    type: CONSTANTS.UPDATE_VIEW_DATE,
    payload: updatedDate,
  };
};

export const updateSchedule = (startDate, scheduleColumn, start, end, startTime, endTime) => {
  return {
    type: CONSTANTS.UPDATE_SCHEDULE,
    payload: { startDate, scheduleColumn, start, end, startTime, endTime },
  };
};
