import React, {Component} from 'react';
import {View, Image, Text} from 'react-native'
import {styles} from './contact.styles'
import StatsView from './stats-component/StatsView';
import { State, TouchableOpacity } from 'react-native-gesture-handler';

export default class Contact extends Component{
    state = {
        birthdaysVerified: false,
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