export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = () => feature => {
  // dispatch an action here to remove an item
  return {
    type: REMOVE_FEATURE,
    payload: payload
  };
};

export const BUY_ITEM = "BUY_ITEM";
export const buyItem = () => item => {
  // dispatch an action here to add an item
  return {
    type: BUY_ITEM,
    payload: payload
  };
};
