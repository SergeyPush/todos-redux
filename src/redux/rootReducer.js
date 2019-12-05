import { combineReducers } from "redux";
import tasksReducer from "./tasks/tasksReducer";
import filterReducer from "./tasks/filterReducer";
import typeReducer from "./tasks/typesReducer";

export default combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
  taskType: typeReducer
});
