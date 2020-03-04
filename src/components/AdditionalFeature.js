import React from 'react';
import { connect } from "react-redux";
import { addFeature } from '../actions'

const AdditionalFeature = props => {
console.log(props)
  const addFeature = feature => {
   // e.preventDefault()
    props.addFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
         onClick={() => addFeature(props.feature)}   
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+ ${props.feature.price})</li>
  );
};

const mapStateToProps = state => {
  return {
    /* TODO fix this */
    
   /*  features: [...state.features, state.feature]
 */
    
    
  };
};
export default connect(
  mapStateToProps,
   {addFeature}
   )(AdditionalFeature);
