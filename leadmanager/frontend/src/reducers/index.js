import { combineReducers } from "redux";
import leadReducer from "./leadReducers";
import errorReducer from "./errorReducers";
import messageReducer from "./messageReducers";

const rootReducer = combineReducers({
  leads: leadReducer,
  errors: errorReducer,
  message: messageReducer
});
export default rootReducer;
