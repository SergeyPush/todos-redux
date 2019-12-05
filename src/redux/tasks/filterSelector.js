export const getFilterValue = state => state.filter;

export const getFilteredTasks = state => {
  return state.tasks.filter(task =>
    task.title.toLowerCase().includes(getFilterValue(state).toLowerCase())
  );
};
