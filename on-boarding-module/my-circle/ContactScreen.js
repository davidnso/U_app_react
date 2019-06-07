import React, { Component } from 'react'
import { Text, View, Image , FlatList} from 'react-native';
import Contacts from 'react-native-contacts';


export default class ContactScreen extends Component{
        state = { contacts: []};
    getContacts(){
        Contacts.checkPermission((error,res)=>{
            if(res === 'authorized'){
                Contacts.getAll((err,contact)=>{
                    const contactObject = contact.map(x=>{ console.log(x.phoneNumbers[0]); return x})
                    this.setState({contacts: contactObject})
                    console.log(this.state.contacts[0])
                })
            }
        })
    }
    componentDidMount(){
        this.getContacts();
    }
    renderList =()=> this.state.contacts.map(contact=>{
        const phoneNumber = contact.phoneNumbers.map((val,key)=>{ return val.number})
        return(
            <View key={contact.phoneNumbers[0].id} >
            <Text>{contact.givenName} {contact.middleName} {contact.familyName}</Text>
            <Text>{phoneNumber}</Text>
            </View>
            )
    });

    render() {
        return(
            <View>
                <Text>CONTACT COMPONENT</Text>
                {this.renderList()}
            </View>

        );
    }h
}