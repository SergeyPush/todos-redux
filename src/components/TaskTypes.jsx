import React from "react";
import { connect } from "react-redux";

import * as typeSelector from "../redux/tasks/typeSelectors";
import * as typesActions from "../redux/tasks/typesActions";

const TaskTypes = ({ taskType, changeType }) => {
  const onChangeRadio = e => {
    // console.log(e.target.value);
    changeType(e.target.value);
  };

  return (
    <div>
      <p>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            value="all"
            onChange={e => onChangeRadio(e)}
            checked={taskType === "all"}
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            value="new"
            onChange={e => onChangeRadio(e)}
            checked={taskType === "new"}
          />
          <span>New</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="group1"
            type="radio"
            value="completed"
            onChange={e => onChangeRadio(e)}
            checked={taskType === "completed"}
          />
          <span>Completed</span>
        </label>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    taskType: typeSelector.getType(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeType: value => dispatch(typesActions.selectTaskType(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTypes);
