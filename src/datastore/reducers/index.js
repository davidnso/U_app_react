import { combineReducers } from "redux";
import messageReducer from "./messageReducer";

export default combineReducers({
  myCircle: (state = {}) => state,
  phoneNumbers: (state = {}) => state,
  pendingReminders: (state = {}) => state,
  messageQueue: (state = {}) => state,
  messages: messageReducer
});
