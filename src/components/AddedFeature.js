import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


const AddedFeature = props => {
  console.log('AddedFeatures props', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {/* bulma stretch*/}
      <button className="button is-danger" onClick={() => {
        props.removeFeature(props.feature)
        props.cancelItem(props.feature)
        
      }}>

    <span>Delete</span>
    <span className="icon is-small">
      <FontAwesomeIcon  icon = {faTimesCircle} />
    </span>
  </button>
    {/*   <button className="button" onClick={() => {
        props.removeFeature(props.feature)
        props.cancelItem(props.feature)
        
      }
        }>X</button> */}
      {props.feature.name}
    </li>
  );
};


export default AddedFeature
