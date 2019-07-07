import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { styles } from './profileBar.styles';

export default class ProfileBar extends Component {
    render() {
        return (
            <View style={styles.navbar}>
                <View style={styles.profileWrapper}>
                    <Image style={styles.profilePic} source={require('../../../../resources/img/mee.jpeg')}></Image>
                </View>
                <Image style={styles.manageIcon} source={require('../../../../resources/img/whitelist.png')}/>
            </View>
        )
    }
}
