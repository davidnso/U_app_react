import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import {OnBoardingColors,OnBoardingText} from '../../../../resources/main-styles'
export const styles = StyleSheet.create({
    container:{
        backgroundColor: OnBoardingColors.BUTTON_GREEN,
        alignItems:'center',
        height: '100%',
        borderRadius: 30,
        width: '100%',
        padding:20,
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: OnBoardingText.BUTTON_FONT
    }
})