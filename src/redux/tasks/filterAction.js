import * as tasksTypes from "./tasksTypes";
export const changeFilter = filter => {
  return {
    type: tasksTypes.CHANGE_FILTER,
    payload: filter
  };
};
