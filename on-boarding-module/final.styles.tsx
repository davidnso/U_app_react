import {StyleSheet} from 'react-native';
import {OnBoardingColors,FONT,OnBoardingText} from '../resources/main-styles'
export const styles = StyleSheet.create({
    text:{
        fontSize: OnBoardingText.sizes.HEADER_SIZE,
        color: OnBoardingColors.MAIN_TEXT_GREEN,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 20,
        padding: 10,
        top: 220,
        left: 'auto'
    },
    subtext: {
        fontSize: FONT.SIZE,
        //color: '#E5E5E5',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        paddingTop: 30,
        top: 235,
        left: 'auto'
    },
    buttonWrapper:{
        height: 100,
        width: 100,
        marginTop: 330,
        alignSelf: 'center',
        left: 'auto'
    },
    imageStyles:{
        height:80,
        width:80
    },
})