import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as tasksOperations from "../redux/tasks/tasksOperations";

const StyledIcon = styled.i`
  color: grey;
  cursor: pointer;
  &:hover {
    color: tomato;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TaskItem = ({ task, deleteTask, completeTask }) => {
  const handleDeleteClick = id => {
    deleteTask(id);
  };

  const handleTaskComplete = task => {
    completeTask(task);
  };

  return (
    <StyledListItem className="collection-item">
      <StyledLabel>
        <input
          type="checkbox"
          checked={task.completed ? "checked" : ""}
          onChange={() => handleTaskComplete(task)}
        />
        <span className="teal-text" style={{ fontSize: "16px" }}>
          {task.title}
        </span>
      </StyledLabel>
      <span
        className={`new badge ${task.completed ? "red" : "green"}`}
        data-badge-caption={task.completed ? "completed" : "new"}
      />
      <StyledIcon
        className="material-icons"
        onClick={() => handleDeleteClick(task.id)}
      >
        delete
      </StyledIcon>
    </StyledListItem>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(tasksOperations.deleteTask(id)),
    completeTask: task => dispatch(tasksOperations.completeTask(task))
  };
};

export default connect(null, mapDispatchToProps)(TaskItem);
