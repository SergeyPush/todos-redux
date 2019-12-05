import * as tasksTypes from "./tasksTypes";
export const selectTaskType = type => {
  return {
    type: tasksTypes.SELECT_TASK_TYPE,
    payload: type
  };
};
