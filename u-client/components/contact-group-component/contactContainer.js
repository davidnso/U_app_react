import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {styles} from './contactContainer.styles'

export default class ContactContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>My Circle</Text>
            </View>
        )
    }
}
