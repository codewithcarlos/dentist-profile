import { CONSTANTS } from "../actions";

const intialState = {
  viewDate: new Date(),
  schedule: {},
};

const scheduleReducer = (state = intialState, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_SCHEDULE: {
      const schedule = { ...state.schedule };
      const {
        startDate,
        scheduleColumn,
        start,
        end,
        startTime,
        endTime,
      } = action.payload;
      if (schedule[startDate]) {
        schedule[startDate][scheduleColumn] = {
          ...schedule[startDate][scheduleColumn],
          [start]: { end, startTime, endTime },
        };
      } else {
        schedule[startDate] = {
          [scheduleColumn]: { [start]: { end, startTime, endTime } },
        };
      }
      const newState = { ...state, schedule };
      return newState;
    }
    case CONSTANTS.UPDATE_VIEW_DATE: {
      const viewDate = action.payload;
      const newState = { ...state, viewDate };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default scheduleReducer;
