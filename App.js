import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';
import * as Notifications from './u-client/push-notification';

//Component imports
import { createAppContainer } from 'react-navigation';
import {AppNavigator} from './on-boarding-module/navigator'
import {ClientNavigator} from './u-client/navigator';
import ReactSmsDriver from 'react-native-sms-communicator';
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
export default class App extends Component {

  render() {
    return<MainAppContainer/>


  }
}