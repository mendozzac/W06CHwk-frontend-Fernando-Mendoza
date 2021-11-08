import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer/robotsReducer";
import userReducer from "./userReducer/userReducer";

export default combineReducers({
  robots: robotsReducer,
  user: userReducer,
});
