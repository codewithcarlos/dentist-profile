import { CONSTANTS } from "../actions";

const intialState = {
  viewDate: new Date(),
  schedule: {},
};

const scheduleReducer = (state = intialState, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_SCHEDULE: {
      console.log("update schedule");
      const schedule = { ...state.schedule };
      const { startDate, scheduleColumn, start, end } = action.payload;
      if (schedule[startDate]) {
        schedule[startDate][scheduleColumn] = {
          ...schedule[startDate][scheduleColumn],
          [start]: { end },
        };
      } else {
        schedule[startDate] = { [scheduleColumn]: { [start]: { end } } };
      }
      const newState = { ...state, schedule };
      console.log("new state after schedule update", newState);
      return newState;
    }
    case CONSTANTS.UPDATE_VIEW_DATE: {
      const viewDate = action.payload;
      const newState = { ...state, viewDate };
      console.log("new state is", newState);
      return newState;
    }
    default: {
      // console.log("default case");
      return state;
    }
  }
};

export default scheduleReducer;
