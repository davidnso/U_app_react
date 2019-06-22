import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity,PermissionsAndroid} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Contacts from 'react-native-contacts';
import {GetStartedButton} from './components/get-started-button/get-started'
import {styles} from './base-view.styles'
//linked page
import EnterNumber from '../enter-number/base-view'
export default class GetStartedScreen extends Component{
   async componentWillMount(){
        await this.checkPermission().catch(err=>{console.log(err)})

}
async askForPermissions(){
  try{
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,{
        'title': 'Contacts Permission',
        'message': 'U app needs access to your contacts'
      }
    )
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
      return granted
    }
  }catch(err){

  }
}
async checkPermission() {
    await Contacts.checkPermission(async(error,result)=>{
     let decision;
     if(result === 'denied' || result === 'undefined'){
      decision = await this.askForPermissions();

     }
     if(decision === PermissionsAndroid.RESULTS.GRANTED || result === 'authorized'){
       console.log('DID WE GET PERMISSION' + decision)
     }
   })

   }
    render(){
        return (
            <View>
                <Text>
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