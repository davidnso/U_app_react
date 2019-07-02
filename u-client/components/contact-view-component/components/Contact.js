import React, {Component} from 'react';
import {View, Image, Text} from 'react-native'
import {styles} from './Contact.styles'
import StatsView from './stats-component/StatsView';
import { State, TouchableOpacity } from 'react-native-gesture-handler';

export default class Contact extends Component{
    state = {
        birthdaysVerified: false,
        contactName: this.props.navigation.state.params.name,
        contactNumber: this.props.navigation.state.params.phoneNumber,
        picture: this.props.navigation.state.params.phoneNumber? this.this.props.navigation.state.params.phoneNumber: {url:require('../../resources/img/mee.jpeg')},
    }
    renderAlert(){
        if(!this.state.birthdaysVerified){
            return(
                
                <View style = {styles.badgeWrapper}>
                    <TouchableOpacity activeOpacity= {0.2}>
                    <Image style={styles.badge} source={require('../../resources/img/requirementIcon.png')}></Image>
                    </TouchableOpacity>
                </View>
               
            )
        }
    }

    render(){
        return(
            <View>
                <Image style={styles.profilePicture} source={require('../../resources/img/mee.jpeg')}></Image>
                {this.renderAlert()}
            </View>
        )
    }
}