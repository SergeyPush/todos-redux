import React from "react";
import { connect } from "react-redux";

import "./App.css";
import TasksList from "./components/TasksList";
import TaskCreate from "./components/TaskCreate";
import InputSearch from "./components/InputSearch";
import TaskTypes from "./components/TaskTypes";
import * as filteredTasks from "./redux/tasks/filterSelector";

function App({ tasks, completedTasks }) {
  return (
    <div className="container">
      <InputSearch />
      <TaskCreate />
      <TaskTypes />
      <TasksList tasks={tasks} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    tasks: filteredTasks.getFilteredTasks(state)
  };
};
export default connect(mapStateToProps)(App);
