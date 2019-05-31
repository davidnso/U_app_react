import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';


//Component imports
import ContactsScreen from './on-boarding-module/my-circle/ContactsScreen'
import GetStartedScreen from './on-boarding-module/get-started/base-view'

export default class App extends Component {

  render() {
    return (
      <View>
        <GetStartedScreen></GetStartedScreen>
      </View>
)
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
