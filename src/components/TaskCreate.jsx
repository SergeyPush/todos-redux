import React, { Component } from "react";
import { connect } from "react-redux";

import * as TasksOperations from "../redux/tasks/tasksOperations";

class TaskCreate extends Component {
  state = {
    title: "",
    description: "",
    state: "new",
    completed: false
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.saveTask({ ...this.state });
    this.setState({
      title: "",
      description: ""
    });
  };

  onInputChange = e => {
    const { value } = e.target;
    this.setState({
      title: value
    });
  };

  render() {
    return (
      <div className="row">
        <form
          onSubmit={this.onFormSubmit}
          className="input-field col s12 center-align"
        >
          <input
            type="text"
            placeholder="New Task"
            onChange={this.onInputChange}
            value={this.state.title}
            ref={this.inputRef}
          />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveTask: task => dispatch(TasksOperations.addTask(task))
  };
};

export default connect(null, mapDispatchToProps)(TaskCreate);
