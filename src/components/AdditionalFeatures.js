import React from 'react';
import { connect } from "react-redux";
import {addFeature} from '../actions' 

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} addFeature={props.addFeature} feature={item} />
            
            
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};
export default connect(mapStateToProps, {addFeature})(AdditionalFeatures);
