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
import { styles } from "./AcquaintanceView.styles";
import { TextInput } from "react-native-gesture-handler";
import RightButton from "../../resources/helper-components/right-arrow";
import {Driver} from '../datastore/driver'
export default class ContactScreen extends Component {

MapAcquaintanceToObjectKeys(){

}
  state = {
    contactSelected: 0,
    contacts: [],
    stage: this.props.acquaintance[0].key,
    friends: [],
    AcquaintanceCount: 0,
    family:[],
    familyCount:0,
    acquaintances: []
  };

componentDidMount(){
}
  render() {
    return (
      <View >
        <Text style={styles.counterText} > {this.state.stage}
          {this.state.contactSelected}
        </Text>
        <TextInput style={styles.searchBox}> </TextInput>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.contactScreenWrapper}>
          {this.renderList()}
        </ScrollView>
        <View style={styles.buttonWrapper} >
        <TouchableOpacity activeOpacity={0.7} onPress={()=> {this.addContactsToList() }} >
            <RightButton />
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  addContactsToList(){
    let friendsList = [];
    let familyList = []
    let remainingContacts = [];
    if(this.state.stage.trimRight()==='friends'){

    this.state.contacts.map(contact=>{
        if(contact.isVisible === true){
            friendsList.push(contact)
        }else{
            remainingContacts.push(contact);
        }
    })
    this.props.navigation.navigate('StepFive');
  }
  if(this.state.stage.trimRight()==='family'){
    this.setState({ stage: 'friends '})
    this.state.contacts.map(contact=>{
      if(contact.isVisible === true){
          familyList.push(contact)
      }else{
          remainingContacts.push(contact);
      }
  })
  }
    this.setState({contacts:remainingContacts})

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

      if(contact.hasThumbnail){
          uriObj = {uri:contact.thumbnailPath}
      }else{
          uriObj = require('../../resources/img/profilePlaceHolder.png')
      }
      return (
        <TouchableOpacity key={contact.rawContactId}
          onPress={() => {
            this.toggleHidden(index);
          }}
        >
          <View style={styles.contactCard}>
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

}
