import React from "react";
import { connect } from "react-redux";
import * as filterAction from "../redux/tasks/filterAction";
import * as filterSelector from "../redux/tasks/filterSelector";
import styled from "styled-components";

const StyledInputSearch = styled.div`
  padding: 0 250px;
  transition: all 0.5s linear;
  &:hover {
    padding: 0 200px;
  }
`;

const InputSearch = ({ value, onChangeFilter }) => {
  const handleChange = e => {
    onChangeFilter(e.target.value);
  };

  return (
    <StyledInputSearch>
      <div className="input-field">
        <i className="material-icons prefix">search</i>
        <input
          type="text"
          placeholder="Search task"
          onChange={handleChange}
          value={value}
        />
      </div>
    </StyledInputSearch>
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
