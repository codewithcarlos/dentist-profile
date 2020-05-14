import { combineReducers } from "redux";
import scheduleReducer from "./scheduleReducer";

export default combineReducers({ calendar: scheduleReducer });
