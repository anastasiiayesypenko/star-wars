import { combineReducers } from "redux";

import SavedItemsReducer from "./SavedItemsReducer";
import SWListsReducer from "./SWListsReducer";

const RootReducer = combineReducers({
  savedItems: SavedItemsReducer,
  SWLists: SWListsReducer,
});

export default RootReducer;
