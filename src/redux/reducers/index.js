import { combineReducers } from "redux";
import dealsReduser from "./dealsReduser";
const appReducer = combineReducers({
  dealsReduser,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
