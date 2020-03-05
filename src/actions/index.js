export const ADD_FEATURE = "ADD_FEATURE"; // Action type
export const addFeature = feature => { // Action creator
  console.log(feature);
  return { // Action
    type: ADD_FEATURE,
    payload: feature
  };
};


export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = feature => {
    console.log(feature)
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};

export const BUY_ITEM = "BUY_ITEM";
export const buyItem  = item => {
    console.log(item);
  return {
    type: BUY_ITEM,
    payload: item
  };
};
