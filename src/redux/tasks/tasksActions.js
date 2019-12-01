import * as tasksTypes from "./tasksTypes";

export const fetchAllTasks = tasks => {
  return {
    type: tasksTypes.FETCH_ALL_TASKS,
    payload: tasks
  };
};
export const addTask = task => {
  return {
    type: tasksTypes.ADD_TASK,
    payload: task
  };
};
export const deleteTask = id => {
  return {
    type: tasksTypes.DELETE_TASK,
    payload: id
  };
};
export const completeTask = task => {
  return {
    type: tasksTypes.COMPLETE_TASK,
    payload: task
  };
};
