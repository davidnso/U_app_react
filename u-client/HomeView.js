import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import NavBar from './components/nav-bar-component';
import StatsView from './components/stats-component';
import ContactView from './components/contact-view-component';
export default class HomeView extends Component{
    render(){
        return(
        <View>
            <NavBar/>
            <StatsView/>
            <ContactView/>
        </View>)
    }
}