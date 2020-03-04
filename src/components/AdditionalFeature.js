import React from 'react';
import { connect } from "react-redux";

const AdditionalFeature = props => {

/*   const addFeature = e =>{
    e.preventDefault()
    props.addFeature(state.feature.name)
  } */
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    feature: state.feature
  };
};
export default connect(mapStateToProps, {})(AdditionalFeature);
