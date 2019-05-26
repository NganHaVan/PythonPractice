import { combineReducers } from "redux";
import leadReducer from "./leadReducers";
import errorReducer from "./errorReducers";
import messageReducer from "./messageReducers";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
  leads: leadReducer,
  errors: errorReducer,
  message: messageReducer,
  auth: authReducer
});
export default rootReducer;
