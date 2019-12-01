import * as tasksTypes from "./tasksTypes";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case tasksTypes.FETCH_ALL_TASKS:
      return action.payload;
    case tasksTypes.ADD_TASK:
      return [action.payload, ...state];
    case tasksTypes.DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case tasksTypes.COMPLETE_TASK:
      const index = state.findIndex(task => task.id === action.payload.id);

      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default tasksReducer;
