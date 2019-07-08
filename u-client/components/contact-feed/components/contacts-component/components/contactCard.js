import React, { Component } from 'react'
import { Text, View, Image, Animated} from 'react-native'
import {styles} from './contactCard.styles'

export default class ContactCard extends Component {
    state = {
        sam:{
            isActive: this.props.active,
        },
        statusBarWidth: new Animated.Value(0),
        messageOpacity: new Animated.Value(0),
        statusOpacity: new Animated.Value(0),
    }
/**
 * we render some pretty cool react animations when the component mounts
 * starting with the status container which slides out, followed by the status and message text
 * which render simultaneously.
 */
    componentDidMount(){
        this.animateStatus();
    }
    animateStatus = ()=>{
        Animated.timing(this.state.statusBarWidth,{
            toValue: this.state.sam.isActive?85:60,
            duration: 500,

        }).start(()=>{
            Animated.timing(this.state.statusOpacity,{
                toValue: 1,
                duration: 1000,
            }).start();
            Animated.timing(this.state.messageOpacity,{
                toValue: 1,
                duration: 1000,
            }).start();
        });
    }

    render() {
        /**
         * KEY POINTS: by default, a users card is inactive, we only change it to an active card
         * if the state says otherwise.
         *
         * while rendering, if the contact is an active card or has a state of active,
         * we change the card color to grey or {#C2C2C2} give it a status message 'NEW MESSAGE'.
         *
         */
        cardColor = '#FFFF';
        status = 'Idle';
        statusBarColor = '#C2C2C2';
        if(this.state.sam.isActive){
            cardColor = '#F2F2F2';
            status = 'New Message';
            statusBarColor = '#0FD3DD';

        }
        return (
            <View style={[styles.container, {backgroundColor: cardColor}]}>
                <Image source={require('../../../../../../resources/img/briGreg.jpg')} style={styles.contactPicture}/>
                <View style={styles.infoWrapper}>
                    <View style={styles.heading}>
                        <Text style={styles.name}>Sam</Text>
                    </View>
                    <Animated.View style={[styles.status, {backgroundColor: statusBarColor, width: this.state.statusBarWidth}]}>
                        <Animated.Text style={[styles.statusText, {opacity: this.state.statusOpacity}]}>{status}</Animated.Text>
                    </Animated.View>
                    <View style={styles.messageContainer}>
                      {this.state.sam.isActive && <Animated.Text style={[styles.message, {opacity: this.state.messageOpacity}]}> I’m not really tryna do all that work this weekend, it’s been a hectic week.</Animated.Text>}
                    </View>
                </View>
            </View>
        )
    }
}
