import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import assetReducer from "./assetReducer";
import taskReducer from "./taskReducer";
import routineReducer from "./routineReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  users: userReducer,
  assets: assetReducer,
  tasks: taskReducer,
  routines: routineReducer
});