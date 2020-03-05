export const ADD_FEATURE = "ADD_FEATURE"; // Action type
export const addFeature = feature => { // Action creator
  console.log("Feature added:",feature);
  return { // Action
    type: ADD_FEATURE,
    payload: feature
  };
};


export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = feature => {
  console.log("Feature removed:",feature);

  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};

export const BUY_ITEM = "BUY_ITEM";
export const buyItem  = item => {
    console.log("the item price is:", item.price);
  return {
    type: BUY_ITEM,
    payload: item.price
  };
};

export const CANCEL_ITEM = "CANCEL_ITEM"
export const cancelItem = item => {
  console.log("this item has been cancelled", item)
  return {
    type: CANCEL_ITEM,
    payload: item.price
  }
}