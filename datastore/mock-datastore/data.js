export const MOCK_STATE = {
  ...myCircle,
  ...messageQueue,
  ...pendingReminders
};
const myCircle = [
  {
    2022157852: {
      name: "David Nsoesie",
      group: "My Circle",
      birthday: "",
      contactImageUri: "../resources/img/prince.png",
      messaageExists: true
    }
  },
  {
    2405933110: {
      name: "Pa",
      group: "My Circle",
      birthday: 1565748131133 + 10000,
      contactImageUri: "../resources/img/mee.jpeg",
      messaageExists: false
    }
  },
  {
    3017253783: {
      name: "Mother",
      group: "My Circle",
      birthday: 1565748131133 + 10000,
      contactImageUri: "../resources/img/briGreg.jpg",
      messaageExists: false
    }
  }
];

const messageQueue = [
  {
    phoneNumber: 2022157852,
    date: Date.now() - 1000,
    message: "What's good brother"
  },
  {
    phoneNumber: 3017253783,
    date: Date.now() - 1000,
    message: "Hey young one, how are you?"
  }
];

const pendingReminders = [
  { type: "birthday", affectedContacts: ["3017253783", "2405933110"] }
];
