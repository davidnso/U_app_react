import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Contacts from "react-native-contacts";
import { styles } from "./base-view.styles";
import { TextInput } from "react-native-gesture-handler";
import RightButton from "../../resources/helper-components/right-arrow";
export default class ContactScreen extends Component {
  state = {
    contactSelected: 0,
    contacts: [],
    isHidden: true,
    friends: []
  };
  getContacts() {
    Contacts.checkPermission((error, res) => {
      if (res === "authorized") {
        Contacts.getAll((err, contact) => {
          const contactObject = contact.map(x => {
            console.log(x.phoneNumbers[0]);
            return { ...x, isVisible: false };
          });
          this.setState({ contacts: contactObject });
          console.log(this.state.contacts[0]);
        });
      }
    });
  }
  toggleHidden(index) {
    let contact = [...this.state.contacts];
    let selected = this.state.contactSelected;

    if (!this.state.contacts[index].isVisible) {
      contact[index] = { ...contact[index], isVisible: true };
      this.setState({ contacts: contact });
      selected += 1;
      this.setState({ contactSelected: selected });
    } else {
      contact[index] = { ...contact[index], isVisible: false };
      this.setState({ contacts: contact });
      selected != 0 ? (selected -= 1) : selected;
      this.setState({ contactSelected: selected });
    }
    console.log(this.state.contactSelected);
  }

  componentWillMount() {
    this.getContacts();
  }

  renderList = () =>
    this.state.contacts.map((contact, index) => {
      const phoneNumber = contact.phoneNumbers.map((val, key) => {
        return val.number;

      });
      url = require('../../resources/img/profilePlaceHolder.png')
      if(contact.hasThumbnail){
          uriObj = {uri:contact.thumbnailPath}
      }else{
          uriObj = require('../../resources/img/profilePlaceHolder.png')
      }
      return (
        <TouchableOpacity
          onPress={() => {
            this.toggleHidden(index);
          }}
        >
          <View key={contact.phoneNumbers[0].id} style={styles.contactCard}>
            <Image
              style={styles.image}
              source={ uriObj}
            />
            <Text style={styles.contactText}>
              {contact.givenName} {contact.middleName} {contact.familyName}{" "}
            </Text>
            {contact.isVisible && (
              <View
                style={styles.selectedIcon}
                selected={this.state.contacts[index].isVisible}
              />
            )}
          </View>
        </TouchableOpacity>
      );
    });

  render() {
    return (
      <View >
        <Text style={styles.counterText}>
          {this.state.contactSelected} friends
        </Text>
        <TextInput style={styles.searchBox}> </TextInput>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.contactScreenWrapper}>
          {this.renderList()}
        </ScrollView>
        <View style={styles.buttonWrapper}>
        <TouchableOpacity activeOpacity={0.7} >
            <RightButton />
        </TouchableOpacity>
        </View>
      </View>
    );
  }

}
