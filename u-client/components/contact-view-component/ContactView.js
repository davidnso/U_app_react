import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
export default class ContactsView extends Component{
    render(){
        return(
            //TODO: EXTEND THE LINEAR GRADIENT TO COVER THE CONTACTS LINE IN THE FUTURE. 
        <LinearGradient colors ={['#FFFF','#E1FFF5']} style={{alignItems:'center', height:'100%'}}>
            <Text >Contacts line!!!</Text>
        </LinearGradient>)
    }
}