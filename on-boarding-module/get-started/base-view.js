import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Contacts from 'react-native-contacts';
import {GetStartedButton} from './components/get-started-button/get-started'
import {styles} from './base-view.styles'
//linked page
import EnterNumber from '../enter-number/base-view'
export default class GetStartedScreen extends Component{

    render(){
        return (
            <View>
                <Text>
                    This is the Get Started Screen
                </Text>
                <View style={styles.container}>
                    <View style={styles.buttonWrapper} >
                        <TouchableOpacity activeOpacity={.6} onPress={()=> this.props.navigation.navigate('StepTwo')}>
                        <GetStartedButton text={'Get Started'} >

                        </GetStartedButton>

                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}