import shortid from "shortid";
import * as tasksActions from "./tasksActions";
import * as tasksService from "../../services/tasks-api";

export const getAllTasks = () => dispatch => {
  tasksService
    .fetchTasks()
    .then(tasks => dispatch(tasksActions.fetchAllTasks(tasks)));
};

export const addTask = task => dispatch => {
  const taskWithId = { ...task, id: shortid.generate() };
  tasksService
    .addTask(taskWithId)
    .then(savedTask => dispatch(tasksActions.addTask(savedTask)));
};

export const deleteTask = id => dispatch => {
  tasksService.deleteTask(id).then(() => dispatch(tasksActions.deleteTask(id)));
};

export const completeTask = task => dispatch => {
  tasksService
    .updateTask({ ...task, completed: !task.completed })
    .then(() =>
      dispatch(
        tasksActions.completeTask({ ...task, completed: !task.completed })
      )
    );
};
