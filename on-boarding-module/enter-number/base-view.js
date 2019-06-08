import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import {styles} from './base-view.styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RightButton from '../../resources/helper-components/right-arrow'
export default class EnterNumber extends Component{
    render(){
        state={
        }
        ButtonWasPressed = ()=>{
            console.log('Button was pressed')
        }

        return(
            <View style={styles.container}>
                <Text style={styles.HEADER}>
                    What's Your Number?
                </Text>
                <Text style= {styles.DETAIL}>
                    We'll text a code to verify your number
                </Text>
                <TextInput style={styles.TextArea}>

                </TextInput>
                <TouchableOpacity activeOpacity={.5} onPress={()=> this.props.navigation.navigate('StepThree')}>
                <View style={styles.buttonWrapper}>
                <RightButton text="this is it"></RightButton>
                </View>
                </TouchableOpacity>

            </View>
        )
    }
}