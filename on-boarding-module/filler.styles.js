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
        top: 350,
        left: 'auto'
    },
    subtext: {
        fontSize: FONT.SIZE,
        color: '#E5E5E5',
        alignSelf: 'center',
        textAlign: 'center',
        top: 310,
        left: 'auto'
    }
})