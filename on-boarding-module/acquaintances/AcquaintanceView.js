import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { styles } from "./AcquaintanceView.styles";
import { TextInput } from "react-native-gesture-handler";
import RightButton from "../../resources/helper-components/right-arrow";
import {AsyncStorage} from 'react-native'
import {Driver} from '../datastore/driver'
export default class AcquaintanceView extends Component {
constructor(props){
  super(props)
  this.state = {
    contactSelected: 0,
    contacts: this.props.navigation.state.params.contacts,
    stage: ' ',
    AcquaintanceCount: 0,
    acquaintances: []
  };
}
 stageCounter = 0 ;
 allStages = this.parseAcquaintanceGroups();
//AcquaintanceGroups = this.props.navigation.state.params.Acquaintances;
parseAcquaintanceGroups(){
  let parsedArray = [];
  this.props.navigation.state.params.Acquaintances.map(group=>{
     parsedArray.push(group.name)
  })
  return parsedArray;
}
setStage(){
this.setState({stage: this.allStages[0]})
}

componentDidMount(){
  this.setStage()
}
  render() {
    return (
      <View >
        <Text style={styles.counterText} > {this.state.stage} {this.state.contactSelected}</Text>
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

  //TODO: FOR SCALABILITY WE DON'T WANT TO PREDEFINE THE AMOUNT OF ACQUAINTANCE GROUPS POSSIBLE, INSTEAD, "FOR EACH GROUP, DYNAMICALLY CHECK THE STAGE AND APPEND ACCORDINGLY"
  addContactsToList(){
    let acquaintanceList = [];
    let remainingContacts = [];
    if(this.state.stage === this.allStages[this.stageCounter] && this.stageCounter == 0){
      this.stageCounter++;
      this.setState({ stage: this.allStages[this.stageCounter]})
      this.state.contacts.map(contact=>{
        if(contact.isVisible === true){
            acquaintanceList.push(contact)
        }else{
            remainingContacts.push(contact);
        }
    })
    }
    if(this.state.stage=== this.allStages[this.stageCounter] && this.stageCounter == 1){
      this.stageCounter++;
      this.setState({ stage: this.allStages[this.stageCounter]})
    this.state.contacts.map(contact=>{
        if(contact.isVisible === true){
            acquaintanceList.push(contact)
        }else{
            remainingContacts.push(contact);
        }
    })
  }
  if(this.state.stage=== this.allStages[this.stageCounter] && this.stageCounter == 2){
    this.state.contacts.map(contact=>{
        if(contact.isVisible === true){
            acquaintanceList.push(contact)
        }else{
            remainingContacts.push(contact);
        }
        try{
        this.addBulkContactsToStore(acquaintanceList);
        }catch(err){
          console.log(err)
        }
    })
    //NAVIGATE
  }
    this.setState({contacts:remainingContacts})

  }

  async addBulkContactsToStore(contacts){
    try{
     contacts.forEach(contact => {
         //TODO: Create function to parse unnecessary contact information from incoming objects.
         let sanitizedObject = JSON.stringify(contact)
         AsyncStorage.setItem(contact.rawContactId, sanitizedObject, (error)=>{
             console.log('Error on bulk add:' + error);
         })
         console.log('contacts successfully YEA\'D BABY')
     });
    }
    catch(error){
     console.log(error);
    }
 }

  async getContacts(key){
    try{
       let payload = await AsyncStorage.getItem(key, (error,response)=>{
            error? console.log(error):console.log(response);
        })
        return JSON.parse(payload);
    }catch(err){
        console.log(err)
    }
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
