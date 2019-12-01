import React, { Component } from "react";
import Preloader from "./Preloader";
import { connect } from "react-redux";
import * as tasksOperations from "../redux/tasks/tasksOperations";

import TaskItem from "./TaskItem";

class TasksList extends Component {
  componentDidMount() {
    this.props.getAllTasks();
  }

  renderTasks = () => {
    const { tasks } = this.props;

    return (
      <ul className="collection">
        {tasks.map(task => (
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    );
  };

  render() {
    const { tasks } = this.props;
    return <div>{tasks.length > 0 ? this.renderTasks() : <Preloader />}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return { getAllTasks: () => dispatch(tasksOperations.getAllTasks()) };
};

export default connect(null, mapDispatchToProps)(TasksList);
