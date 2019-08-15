let myCircle = [
  {
    name: "David Nsoesie",
    phoneNumber: 2022157852,
    messages: [
      {
        content: "What's good brother",
        date: Date.now() - 1000
      }
    ],
    messageExists: true,
    group: "family",
    contactUriExists: false
  },
  {
    name: "Michael Nsoesie",
    phoneNumber: 3017253783,
    messages: [
      {
        content: "Hey young one, how are you!",
        date: Date.now() - 1000
      }
    ],
    messageExists: true,
    group: "friends",
    contactUriExists: true
  }
];

const messageQueue = [
  {
    name: "David Nsoesie",
    phoneNumber: 2022157852,
    date: Date.now() - 1000,
    message: "What's good brother",
    group: "family"
  },
  {
    name: "Michael Nsoesie",
    phoneNumber: 3017253783,
    date: Date.now() - 1000,
    message: "Hey young one, how are you?"
  }
];

const pendingReminders = [
  { type: "birthday", affectedContacts: ["3017253783", "2405933110"] }
];

const phoneNumbers = ["2022157852", "3017253783", "2405933110"];

export const MOCK_STATE = {
  myCircle,
  messageQueue,
  pendingReminders,
  phoneNumbers
};

//   {
//     2022157852: {
//       name: "David Nsoesie",
//       group: "Family",
//       birthday: "",
//       contactImageUri: "../resources/img/prince.png",
//       messaageExists: true,
//       messages: [
//         {
//           date: Date.now() - 1000,
//           message: "What's good brother"
//         }
//       ]
//     }
//   },
//   {
//     2405933110: {
//       name: "Pa",
//       group: "Friend",
//       birthday: 1565748131133 + 10000,
//       contactImageUri: "../resources/img/mee.jpeg",
//       messaageExists: false,
//       messages: []
//     }
//   },
//   {
//     3017253783: {
//       name: "Mother",
//       group: "Family",
//       birthday: 1565748131133 + 10000,
//       contactImageUri: "../resources/img/briGreg.jpg",
//       messaageExists: true,
//       messages: [
//         {
//           date: Date.now() - 1000,
//           message: "What's good brother"
//         }
//       ]
//     }
//   }
// ];
