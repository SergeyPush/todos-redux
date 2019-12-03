import React from "react";
import { connect } from "react-redux";
import * as filterAction from "../redux/tasks/filterAction";
import * as filterSelector from "../redux/tasks/filterSelector";

const InputSearch = ({ value, onChangeFilter }) => {
  const handleChange = e => {
    onChangeFilter(e.target.value);
  };

  return (
    <div className="input-field">
      <i className="material-icons prefix">search</i>
      <input
        type="text"
        placeholder="search"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: filterSelector.getFilterValue(state)
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onChangeFilter: filter => dispatch(filterAction.changeFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(InputSearch);
