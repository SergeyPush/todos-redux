export const getAlltasks = state => state.tasks;

export const getNewTasks = state =>
  state.tasks.filter(task => task.completed === false);

export const getCompletedTasks = state =>
  state.tasks.filter(task => task.completed === true);
