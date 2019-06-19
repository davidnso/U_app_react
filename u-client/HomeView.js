import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import NavBar from './components/nav-bar-component/NavBar';
import StatsView from './components/stats-component/StatsView';
import ContactView from './components/contact-view-component/ContactView';
import ReminderDrawer from './components/reminder-drawer-component/ReminderDrawer'
export default class HomeView extends Component{
    render(){
        return(
        <View>
            <NavBar/>
            <StatsView/>
            <ReminderDrawer/>
        </View>)
    }
}