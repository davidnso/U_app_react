import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    contact: []
  }

  componentDidMount() {
    this.getContact();
  }

  getContact() {
    Contacts.checkPermission((error, res) => {
      if (res === 'authorized') {
        Contacts.getAll((err, contact) => this.setState({ contact }));
      }
    })
  }
  renderItem({ item, index }) {
    const number = item.phoneNumbers.map((val, key) => { if (key === 0) return val.number }); //may be wrongly the save their name only without phonenumber so only i have show first element only
    return (
      <View style={{ flexDirection: 'row', width: '100%', padding: 10, justifyContent: 'space-between' }}>
        <Text>{item.givenName} {item.middleName} {item.familyName}</Text>
        <Text>{number}</Text>
      </View>
    );
  }
  render() {
    return (
      <FlatList
      style={{ width: '100%'}}
        data={this.state.contact}
        renderItem={(a) => this.renderItem(a)}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
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