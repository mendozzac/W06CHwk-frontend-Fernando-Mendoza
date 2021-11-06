import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer/robotsReducer";

export default combineReducers({
  robots: robotsReducer,
});
