import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import {styles} from './HomeView.styles'
import LinearGradient from 'react-native-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler';
import Banner from './components/banner-component/banner';
//import NavBar from './components/nav-bar-component/navBar';
export default class HomeView extends Component{
    render(){
        return(
   <View style={styles.screenWrapper}>
       <Banner/>
   </View>)
    }
}