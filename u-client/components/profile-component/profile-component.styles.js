import {StyleSheet} from 'react-native';
import {OnBoardingColors} from '../../../resources/main-styles'
export const styles = StyleSheet.create({
    container:{
        top:40,
        width: 160,
        height: 75,
        left: 20,
    },
    profilePicture:{
        borderRadius: 100,
        width: 70,
        height: 70,
        elevation: 1,
        backgroundColor: '#FFFFFD',
        //TODO: add drop shadow to component picture.
    },
    familyStatsContainer:{
        width:110,
        height: 26,
        backgroundColor: '#F6F6F6',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        right: 0,
        bottom: 12
    },
    friendStatsContainer:{
        width:98,
        height: 26,
        backgroundColor: '#F6F6F6',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        top:3,
        right:17,
        alignContent: 'center',

    },
    statsFont: {
        fontFamily: 'open-sans',
        fontWeight: '400',
        fontSize: 12,
        color: '#01DB90',
        textAlign: 'center',
        top: 5
    },
    notification: {
        //TODO: FIX SHADE OF GREEN ON THE NOTIFICATION.
        position: 'absolute',
        top: -5,
        left: 2,
        width: 25,
        height: 25,
        borderRadius: 100,
        backgroundColor: OnBoardingColors.BUTTON_GREEN,
        elevation: 2,
    }
})