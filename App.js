import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import Contacts from "react-native-contacts";
import * as Notifications from "./src/u-client/push-notification";

//Component imports
import { createAppContainer } from "react-navigation";
import { AppNavigator } from "./src/on-boarding-module/navigator";
import { ClientNavigator } from "./src/u-client/navigator";
import ReactSmsDriver from "react-native-sms-communicator";
import HomeView from "./src/u-client/HomeView";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MOCK_STATE } from "./src/datastore/mock-datastore";
const OnBoardingAppContainer = createAppContainer(AppNavigator);
const MainAppContainer = createAppContainer(ClientNavigator);

// Notifications.configure();
// ReactSmsDriver.listenFor('message', (data)=>{
//   try{
//   Notifications.localNotification();
//   }catch(err){
//     console.log(err)
//   }
// })

const reducer = () => {
  return MOCK_STATE;
};
const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainAppContainer />
      </Provider>
    );
  }
}
