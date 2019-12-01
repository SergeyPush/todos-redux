import React from "react";
import { connect } from "react-redux";

import "./App.css";
import TasksList from "./components/TasksList";
import TaskCreate from "./components/TaskCreate";
import * as tasksSelectors from "./redux/tasks/tasksSelectors";

function App({ tasks, completedTasks }) {
  return (
    <div className="container">
      <TaskCreate />
      <TasksList tasks={tasks} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    tasks: tasksSelectors.getAlltasks(state)
  };
};
export default connect(mapStateToProps)(App);
