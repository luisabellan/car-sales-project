import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdditionalFeature = props => {
  console.log(props)


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          props.addFeature(props.feature)
          props.buyItem(props.feature)
        }
        }

        className="button is-primary"
      >
        <span className="button-text">Add</span>
        <span className="icon is-small">
        <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </button>
      {props.feature.name} (+ ${props.feature.price})</li>
  );
};



export default AdditionalFeature
