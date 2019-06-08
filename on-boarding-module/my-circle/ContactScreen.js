import React, { Component } from 'react'
import { Text, View, Image , FlatList , TouchableOpacity, ScrollView} from 'react-native';
import Contacts from 'react-native-contacts';
import {styles} from './base-view.styles'
import { TextInput } from 'react-native-gesture-handler';
import RightButton from '../../resources/helper-components/right-arrow'
export default class ContactScreen extends Component{
        state = {
            contactSelected: 0,
            contacts: [],
            isHidden: true,
        };
    getContacts(){
        Contacts.checkPermission((error,res)=>{
            if(res === 'authorized'){
                Contacts.getAll((err,contact)=>{
                    const contactObject = contact.map(x=>{ console.log(x.phoneNumbers[0]); return {...x, isVisible: false} })
                    this.setState({contacts: contactObject})
                    console.log(this.state.contacts[0])
                })
            }
        })
    }
    toggleHidden(index){
        let contact = [...this.state.contacts];
        if(!this.state.contacts[index].isVisible){
        contact[index] = {...contact[index], isVisible: true};
        this.setState({contacts:contact});
        }else{
        contact[index] = {...contact[index], isVisible: false};
        this.setState({contacts:contact});
        }
        console.log(this.state.contacts[index]);
    }

    componentDidMount(){
        this.getContacts();
    }

    renderList =()=> this.state.contacts.map((contact,index)=>{
        const phoneNumber = contact.phoneNumbers.map((val,key)=>{ return val.number})
        return(
            <TouchableOpacity onPress={()=>{this.toggleHidden(index)}}>
                <View key={contact.phoneNumbers[0].id} style={styles.contactCard} >

                    <Image style={styles.image} source={require('../../resources/img/profilePlaceHolder.png')}></Image>
                    <Text style={styles.contactText}>{contact.givenName} {contact.middleName} {contact.familyName} </Text>
                    {contact.isVisible && <View style={styles.selectedIcon} selected={this.state.contacts[index].isVisible}></View>}

                </View>
            </TouchableOpacity>
            )
    });

    render() {
        return(

            <View>
                <Text style={styles.counterText}>{this.state.contactSelected} friends</Text>
                <TextInput style={styles.searchBox}> </TextInput>
                <ScrollView showsVerticalScrollIndicator={false}>
                {this.renderList()}
                </ScrollView>
                <TouchableOpacity activeOpacity={.7}>
                <View style={styles.buttonWrapper}>
                <RightButton></RightButton>
                </View>
                </TouchableOpacity>
            </View>

        );
    }h
}