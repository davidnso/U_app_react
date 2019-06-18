import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native';
import {styles} from './NavBar.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class NavBar extends Component{
    render(){
        return(
        <View style={styles.wrapper}>
            <TouchableOpacity activeOpacity={.7}>
                <Image style={styles.homeIcon} source={require('../../../resources/img/home.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
                <Image style={styles.notificationIcon} source={require('../../../resources/img/notification.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
                <Image style={styles.menuIcon} source={require('../../../resources/img/list.png')}></Image>
            </TouchableOpacity>
        </View>)
    }
}