import friendReducer from "./friendReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  friendReducer,
});

export default rootReducer;
