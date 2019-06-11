import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {styles} from './filler.styles';

export default class filler extends Component{
    state={
        timePassed: false,
    }
    render(){
        return(<View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('StepThree')}>
            <View>
                <Text style={styles.text}> Now, It's time to fill your circle with family and friends, </Text>
                <Text style ={styles.subtext}> Don't be too generous...</Text>
            </View>
            </TouchableOpacity>
            </View>
        )
    }
}