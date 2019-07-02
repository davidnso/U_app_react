import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Platform,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    StatusBar,
} from 'react-native';
import StatsView from '../stats-component/StatsView'
import NavBar from '../nav-bar-component/NavBar'
import SlidingUpPanel from 'rn-sliding-up-panel'
import {styles} from './ReminderDrawer.styles'
import ContactsView from '../contact-view-component/ContactView'
export default class ReminderDrawer extends Component{

    static defaultProps = {
        draggableRange: {
            top: 600/1.75,
            bottom: 50,
        }
    }
    render(){
        //const {top,bottom} = this.props.draggableRange
        return(
            //TODO: BUILD DRAWER COMPONENT
            //TODO: ADD WIDER BACKGROUND VIEW TO DRAWER SO THAT THE COMPONENT IS EASILY ACCESSIBLE.
         <View style={styles.contactImageView}>
             <ContactsView/>
            <SlidingUpPanel showBackdrop={false} height={400} draggableRange={{top:370,bottom:33}} containerStyle={styles.reminderContainer}ref={c=> this._panel = c}>
            <View style={styles.pullBar} ></View>
                    <Text style={styles.reminderTitle}>Reminders</Text>
                </SlidingUpPanel></View>

        )
    }
}
