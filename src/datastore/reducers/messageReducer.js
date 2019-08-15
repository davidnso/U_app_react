import { FETCH_MESSAGES } from "../actions/types";
import { fetchMessages } from "../actions/fetchMessages";
import { MOCK_STATE } from "../mock-datastore/data";

const initialState = {
  messages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      const messages = action.payload;
      return messages;
    default:
      return state;
  }
}
