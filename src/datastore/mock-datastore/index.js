import { MOCK_STATE } from "./data";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  MOCK_STATE,
  applyMiddleware(thunk)
);
