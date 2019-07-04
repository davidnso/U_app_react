import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {styles} from './stats.styles'
export default class Stats extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.text}>Average Response Time: </Text><Text style={{color:'#01DB8D',fontWeight: 'bold'}}> 20 min</Text>
            </View>
        )
    }
}
