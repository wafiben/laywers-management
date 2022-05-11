import authReducer from "./AuthReducer";
import adminReducer from './AdminReducer';
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  AuthReducer: authReducer,
});
export default rootReducer;
