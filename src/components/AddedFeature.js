import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from '../actions/'

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

/* not needed

const mapStateToProps = state => {
  return {
    feature: state.feature
  };
}; */

export default AddedFeature
