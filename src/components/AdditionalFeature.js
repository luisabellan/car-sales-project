import React from 'react';
import { connect } from "react-redux";
import { addFeature } from '../actions'

const AdditionalFeature = props => {
console.log(props)
  const addFeature = e => {
    e.preventDefault()
    props.addFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
         onClick={() => addFeature}   
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+ ${props.feature.price})</li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.features
  };
};
export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
