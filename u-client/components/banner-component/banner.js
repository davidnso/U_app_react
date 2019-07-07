import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './banner.styles'
import ProfileBar from './components/profileBar';
import ViewToggle from './components/viewToggle';
export default class Banner extends Component {
    render() {
        return (
            <View>
                <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style={styles.banner} colors={['#10D5DD','#0AC5E1','#09B6E9','#05A0F1','#0087FC']}>
                <ProfileBar/>
                <ViewToggle/>
                </LinearGradient>
            </View>
        )
    }
}
