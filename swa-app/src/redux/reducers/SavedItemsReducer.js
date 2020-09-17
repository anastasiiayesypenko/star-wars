import types from "../types/types";

const initialState = [];

const SavedItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_SAVED_ITEM:
      return [payload.item, ...state];
    default:
      return state;
  }
};

export default SavedItemsReducer;
