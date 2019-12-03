import * as tasksTypes from "./tasksTypes";

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case tasksTypes.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
