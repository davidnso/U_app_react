import React, { Component } from 'react'
import { Text, View, Image, Animated, Button, ScrollView, KeyboardAvoidingView} from 'react-native'
import Modal from 'react-native-modal'
import { TouchableHighlight, TouchableOpacity, TextInput} from 'react-native-gesture-handler'
import {styles} from './contactCard.styles';

export default class ContactCard extends Component {
    state = {
        sam:{
            isActive: this.props.active,
        },
        statusBarWidth: new Animated.Value(0),
        messageOpacity: new Animated.Value(0),
        statusOpacity: new Animated.Value(0),
        showModal: false,
        text: ''
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
    setModalVisible = (visible)=>{

        console.log('modal being set to ' + visible);
        this.setState({showModal: visible});
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
            <View >
                <TouchableOpacity style={[styles.container, {backgroundColor: cardColor}]} onPress={()=>{
                    this.setModalVisible(true)
                }} >
                <Image source={require('../../../../../../resources/img/briGreg.jpg')} style={styles.contactPicture}/>
                <View style={styles.infoWrapper}>
                    <View style={styles.heading}>
                        <Text style={styles.name}>Sam</Text>
                    </View>
                    <Animated.View style={[styles.status, {backgroundColor: statusBarColor, width: this.state.statusBarWidth}]}>
                        <Animated.Text style={[styles.statusText, {opacity: this.state.statusOpacity}]}>{status}</Animated.Text>
                    </Animated.View>
                    <View style={styles.messageContainer} >
                      {this.state.sam.isActive && <Animated.Text style={[styles.message, {opacity: this.state.messageOpacity}]}> I’m not really tryna do all that work this weekend, it’s been a hectic week.</Animated.Text>}
                    </View>
                </View>
                </TouchableOpacity>
                <KeyboardAvoidingView behavior="padding" enabled>
                <Modal style={styles.messageModal}
                isVisible={this.state.showModal}
                onBackdropPress={()=>{this.setModalVisible(false)}}
                avoidKeyboard={false}>
                    <View style={{top: -30, alignSelf: 'center', position:'absolute',}}>
                        <Image style={{ width:50, height:50, borderRadius: 100}} source={require('../../../../../../resources/img/briGreg.jpg')} />
                    </View>
                    <ScrollView style={{
                        position:'absolute',
                        width:'95%',
                        maxWidth:'95%',
                        height:'80%',
                        alignSelf:'center',
                        paddingBottom:10
                        }}>
                            <View style={{
                                marginBottom: 10,
                                padding: 10,
                                borderRadius: 8,
                                backgroundColor: '#F7F7F7'
                            }}>
                                <Text>
                                    What's up brodie
                                </Text>
                            </View>
                            <View style={{
                                marginBottom: 10,
                                padding: 10,
                                borderRadius: 8,
                                backgroundColor: '#F7F7F7'
                            }}>
                                <Text style={{padding: 10}}>
                                    I heard you were up Towson, I'm tryna see if i can head up there this weekend. Is anybody at the apartment
                                </Text>
                            </View>
                            <View style={{
                                marginBottom: 10,
                                padding: 10,
                                borderRadius: 8,
                                backgroundColor: '#F7F7F7'
                            }}>
                                <Text>
                                    I heard you were up Towson, I'm tryna see if i can head up there this weekend. Is anybody at the apartment
                                </Text>
                            </View>
                    </ScrollView>
                    <View style={
                        {
                            alignSelf: 'center',
                            bottom: 10,
                            width: '80%',
                            position: 'absolute',
                            borderWidth: .5,
                            borderColor: '#CDCDCD',
                            borderRadius: 10,
                            height: 40
                        }
                    }>
                        <TextInput style={{paddingTop:10, maxHeight: 60}} 
                        multiline
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}>
                        </TextInput>
                        <TouchableOpacity style={{backgroundColor: 'blue', width:20}}>

                        </TouchableOpacity>
                    </View>
                </Modal>
                </KeyboardAvoidingView>
                
            </View>
        )
    }
}
