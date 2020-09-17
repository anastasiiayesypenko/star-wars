import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./reducers/RootReducer";

const middlewares = applyMiddleware(thunk);
const store = createStore(RootReducer, middlewares);

export default store;