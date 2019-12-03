import { combineReducers } from "redux";
import tasksReducer from "./tasks/tasksReducer";
import filterReducer from "./tasks/filterReducer";

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer
});
