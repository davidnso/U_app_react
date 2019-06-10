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
    constructor(props){
        super(props)
    }
    state = {
        contacts: this.props.navigation.state.params.FinalContacts
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

    addContactsToList(){
        let friendsList = [];
        let remainingContacts = [];
        this.state.contacts.map(contact=>{
            if(contact.isVisible === true){
                friendsList.push(contact)
            }else{
                remainingContacts.push(contact);
            }
        })
        this.setState({contacts:remainingContacts})
      }
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
            <View style={styles.buttonWrapper} >
            <TouchableOpacity activeOpacity={0.7} onPress={()=>this.addContactsToList()}>
                <RightButton />
            </TouchableOpacity>
            </View>
          </View>
        );
      }
}