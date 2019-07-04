import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {styles} from './reminderContainer.styles'
export default class ReminderContainer extends Component {
    render() {
        return (
            <View style ={styles.container}>
                <Text style={styles.titleText}> Reminders </Text>
            </View>
        )
    }
}
