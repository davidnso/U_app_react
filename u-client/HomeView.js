import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import ProfileComponent from './components/profile-component/profile-component'
import {styles} from './HomeView.styles'
import LinearGradient from 'react-native-linear-gradient'
import ContactContainer from './components/contact-group-component/contactContainer';
import ReminderContainer from './components/reminders-component/reminderContainer';
import Stats from './components/stats-component/stats';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from './components/nav-bar-component/navBar';
export default class HomeView extends Component{
    render(){
        return(
    <View> 
     <ScrollView showsVerticalScrollIndicator={false} style={styles.screenWrapper}>
        <View style={{backgroundColor:'#FCFCFC'}}>
            <LinearGradient colors={['#E1FFF5','#60EAB9','#01DB8D']} style={styles.banner}>
           <ProfileComponent/>
           </LinearGradient>
           <View style={styles.containerWrapper}>
           <ContactContainer/>
           <Stats/>

           <ReminderContainer/>
           </View>
        </View>
        </ScrollView>
        <NavBar/>
        </View>
        
       )
    }
}