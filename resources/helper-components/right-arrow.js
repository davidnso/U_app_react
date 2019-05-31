import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import {styles} from './right-arrow.styles'
export default class RightButton extends Component{
render(){
    return(<View>
        <Image style={styles.imageStyles} source={require('../img/right_arrow.png')}></Image>
    </View>)
}
}