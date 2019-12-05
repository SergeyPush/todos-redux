import * as tasksTypes from "./tasksTypes";
const typesReducer = (state = "all", action) => {
  switch (action.type) {
    case tasksTypes.SELECT_TASK_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default typesReducer;
