import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import {styles} from './get-started.styles'

styles.color
export class GetStartedButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Get Started
                </Text>

            </View>
        )
    }
}