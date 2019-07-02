import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './ContactView.styles'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
export default class ContactsView extends Component{
    state = {
        contacts: [ {rawContactId:1,
                    givenName: 'David',
                    familyName: 'Nsoesie',
                    phoneNumber: 2022147883,
                    hasThumbnail: false,
                    hasMessage: true},
                    {rawContactId:13,
                        givenName: 'Michale',
                        phoneNumber: 1452345324,
                        hasThumbnail: false,
                    hasMessage: false},
                    {   rawContactId:4,
                        givenName: 'Junior',
                        phoneNumber: 23453245342,
                        hasThumbnail: false,
                    hasMessage: true},
                ]
    }
    renderAlert(contact){
    if(contact.hasMessage === false){
        return( 
        <View style = {styles.badgeWrapper}>
        <TouchableOpacity activeOpacity= {0.2}>
        <Image style={styles.badge} source={require('../../../resources/img/requirementIcon.png')}></Image>
        </TouchableOpacity>
    </View>
        )
    }
}

    renderList = () =>
    this.state.contacts.map((contact, index) => {

      if(contact.hasThumbnail){
          uriObj = {uri:contact.thumbnailPath}
      }else{
          uriObj = require('../../../resources/img/profilePlaceHolder.png')
      }
      return (
        <TouchableOpacity key={contact.rawContactId}
         
        >
            {this.renderAlert(contact)}
          <View style={styles.contactCard}>
              <View> 
            <Image
              style={styles.image}
              source={ uriObj}
            />
            </View>
            <Text style={styles.contactText}>
              {contact.givenName} {contact.middleName} {contact.familyName}{" "}
            </Text>
           
          </View>
        </TouchableOpacity>
      );
    });
    render(){
        return(
            //TODO: EXTEND THE LINEAR GRADIENT TO COVER THE CONTACTS LINE IN THE FUTURE. 
        <LinearGradient colors ={['#FFFF','#E1FFF5']} style={{alignItems:'center', height:'100%'}}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contactScreenWrapper}>
          {this.renderList()}
        </ScrollView>
        </LinearGradient>)
    }
}