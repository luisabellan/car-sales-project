import React from 'react';
import { connect } from "react-redux";
import { removeFeature, cancelItem } from '../actions/'


import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log(props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={Date.now() * Math.random()} removeFeature={props.removeFeature} cancelItem={props.cancelItem}  feature = {item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};
export default connect(mapStateToProps, {removeFeature,cancelItem})(AddedFeatures);