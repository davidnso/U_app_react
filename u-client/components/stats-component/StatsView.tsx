import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import {styles} from './StatsView.styles'
import Contact from '../contact'
export default class StatsView extends Component{
    render(){
        return(
        <View style={styles.wrapper} >
            <Text style={styles.contactStats}>8{"\n"}Friends</Text>
            <View style={styles.profileWrapper}>
                < Contact/>
                <View style={styles.toggleButton}>
                <Text style={styles.buttonText}>My Circle</Text>
                </View>
            </View>
            <Text style={styles.contactStats}>10{"\n"}Family</Text>
        </View>)
    }
}