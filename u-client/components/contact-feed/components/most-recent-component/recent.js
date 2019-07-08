import React, { Component } from 'react'
import { Text, View, Image, Animated} from 'react-native'
import {styles} from './recent.styles'
export default class Recent extends Component {
    state = { 
        position: new Animated.Value(0),
        opacity: new Animated.Value(0)
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>Most Recent</Text>
                <View style={styles.mainContainer}>
                    <View style={styles.contactWrapper}> 
                        <Image style={styles.contactPicture} source={require('../../../../../resources/img/prince.png')}></Image>
                    </View>
                    <View style={styles.subContainer}>
                        <View style={styles.infoContainer}>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}>Prince</Text>
                            </View>
                            <View style={styles.timeWrapper}>
                            </View>
                        </View>
                        <View style={styles.messageContainer}></View>
                    </View>
                </View>
            </View>
        )
    }
}
