import React, {Component} from 'react'
import Message from 'react-native-module-lib';
import {View, Text, Image, Button, DeviceEventEmitter} from 'react-native'
import NavBar from './components/nav-bar-component/NavBar';
import StatsView from './components/stats-component/StatsView';
import ContactView from './components/contact-view-component/ContactView';
import ReminderDrawer from './components/reminder-drawer-component/ReminderDrawer'

export default class HomeView extends Component{
    componentDidMount(){
        try{ 
     Message.on('message', (data:any)=>{
        console.log(JSON.stringify(data))
     })
    }
     catch(err){
        console.log(err)
    }
       
    }
    render(){

        return(
        <View>
            <Text>This is home</Text>
        </View>)
    }
}