import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';


//Component imports
import { createAppContainer } from 'react-navigation';
import {AppNavigator} from './on-boarding-module/navigator'
import {ClientNavigator} from './u-client/navigator';

const OnBoardingAppContainer = createAppContainer(AppNavigator);
const MainAppContainer = createAppContainer(ClientNavigator);
export default class App extends Component {

  render() {
    return<MainAppContainer/>


}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
}
