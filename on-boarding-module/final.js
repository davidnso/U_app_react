import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { styles } from "./final.styles";
import { TextInput } from "react-native-gesture-handler";

export default class completion extends Component{
    render(){
        return(
            <View>

            <View>
                <Text style={styles.text}> Your Circle, Default Settings </Text>
                <Text style ={styles.subtext}>Notifications Every 15 minutes</Text>
                <Text style ={styles.subtext}>Receive Updates on Birthdays</Text>
                <Text style ={styles.subtext}>Reminders on stale conversations</Text>
            <TouchableOpacity style={styles.buttonWrapper}>
            <Image style={styles.imageStyles} source={require('../resources/img/blankArrow.png')}></Image>
            </TouchableOpacity>
            </View>

            </View>
        )
    }
}