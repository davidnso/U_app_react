import { FETCH_MESSAGES } from "./types";
import { MOCK_STATE } from "../mock-datastore/data";

export const fetchMessages = () => dispatch => {
  console.log("IN FETCH MESSAGES");
  /**
     * fullMessageQueue should be an object of this type
     * {
    name: string
    phoneNumber: number,
    imageUri: string,
    message: string,
    date: string
  }
     */
  let fullMessageQueue = [];
  let messageCardInfo = {
    contactName: "",
    contactImage: ""
  };
  MOCK_STATE.messageQueue.forEach(messages => {
    MOCK_STATE.myCircle.forEach(contact => {
      if (contact[messages.phoneNumber]) {
        messageCardInfo.contactName = contact[messages.phoneNumber].name;
        messageCardInfo.contactImage =
          contact[messages.phoneNumber].contactImageUri;
      }
    });
    messages.name = messageCardInfo.contactName;
    messages.imageUri = messageCardInfo.contactImage;
    fullMessageQueue.push(messages);
  });
  if (fullMessageQueue) {
    console.log(fullMessageQueue);
  }
  dispatch({
    type: FETCH_MESSAGES,
    payload: fullMessageQueue
  });
};
