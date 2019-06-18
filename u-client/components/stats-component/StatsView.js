import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import {styles} from './StatsView.styles'
export default class StatsView extends Component{
    render(){
        return(
        <View style={styles.wrapper} >
            <Text style={styles.contactStats}>8{"\n"}Friends</Text>
            <View style={styles.profileWrapper}>
                <Image style={styles.profilePicture} source={require('../../../resources/img/mee.jpeg')}></Image>
                <View style={styles.toggleButton}>
                <Text style={styles.buttonText}>My Circle</Text>
                </View>
            </View>
            <Text style={styles.contactStats}>10{"\n"}Family</Text>
        </View>)
    }
}