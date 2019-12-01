import { combineReducers } from "redux";
import tasksReducer from "./tasks/tasksReducer";

export default combineReducers({
  tasks: tasksReducer
});
