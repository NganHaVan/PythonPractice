import { combineReducers } from "redux";
import leadReducer from "./leadReducers";

const rootReducer = combineReducers({
  leads: leadReducer
});
export default rootReducer;
