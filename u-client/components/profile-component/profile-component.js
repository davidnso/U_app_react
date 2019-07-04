import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './profile-component.styles'
export default class ProfileComponent extends Component{ 
    state = {
        sudoUser:{
            firstName: 'David',
            phoneNumber: 2022157852,
            hasThumbnail: false,
            Acquaintances: {
                Business: 20,
                School: 14,
                Technology: 21,
            },
            friends: 8,
            family: 12,
            pendingNotification: true
        }
    }

    renderProfileInfo = ()=>{

    }

    renderThumbnail

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.familyStatsContainer}>
                    <Text style={styles.statsFont}>Family {this.state.sudoUser.family}</Text>
                </View>
                <View>
                    <View>
                        <Image style={styles.notification} source={require('../../../resources/img/notificationWhite.png')}></Image>
                    </View>
                    <Image style={styles.profilePicture} source={require('../../../resources/img/mee.jpeg')}></Image>
                </View>
                <View style={styles.friendStatsContainer}>
                    <Text style={styles.statsFont}>Friends {this.state.sudoUser.friends}</Text>
                </View>
            </View>
        )
    }
}