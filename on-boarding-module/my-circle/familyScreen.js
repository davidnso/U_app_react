import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {Driver} from '../datastore/driver'
import {AsyncStorage} from 'react-native';
import Contacts from "react-native-contacts";
import { styles } from "./base-view.styles";
import { TextInput } from "react-native-gesture-handler";
import RightButton from "../../resources/helper-components/right-arrow";
export default class ContactScreen extends Component {
  state = {
    contactSelected: 0,
    contacts: [],
    stage: 'family ',
    friends: [],
    friends_count: 0,
    family:[],
    familyCount:0,
    acquaintances: []
  };

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
    this.props.navigation.navigate('StepFive' , {contacts: remainingContacts});
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
  async addBulkContactsToStore(contacts){
    try{
     contacts.forEach(contact => {
         //TODO: Create function to parse unnecessary contact information from incoming objects.
         let sanitizedObject = JSON.stringify(contact)
         AsyncStorage.setItem(contact.rawContactId, sanitizedObject, (error)=>{
           if(error){ console.log('Error on bulk add:' + error);}
         })
         console.log('contacts successfully YEA\'D BABY')
     });
    }
    catch(error){
     console.log(error);
    }
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
