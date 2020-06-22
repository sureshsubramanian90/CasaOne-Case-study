import { combineReducers } from "redux";
import RuleReducer from "./RuleReducer";

export default combineReducers({
  data: RuleReducer,
});
