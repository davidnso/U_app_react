import { StyleSheet } from 'react-native'
import {OnBoardingColors,OnBoardingText} from '../../resources/main-styles'
export const styles = StyleSheet.create({
    container:{
        textAlign: 'left',
        paddingLeft: 20,
        paddingTop: 40
    },
    HEADER: {
        color: OnBoardingColors.MAIN_TEXT_GREEN,
        fontSize: OnBoardingText.sizes.HEADER_SIZE,
        fontWeight: 'bold'
    },
    DETAIL: {
        color: OnBoardingColors.DETAIL_TEXT_GREY,
        fontSize: OnBoardingText.sizes.DETAIL_SIZE,
        fontWeight: '500',
        paddingLeft: 4
    },
    buttonWrapper:{
        marginTop: 120,
        marginLeft: 255,
        height: 100,
        width: 100
    },
    imageStyles:{
        height:100,
        width:100
    },
    TextArea:{
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderBottomColor: '#E7DDDD',
        borderWidth: 3,
        height: 46,
        width: 320,
        marginTop: 15,
        fontSize: 15
    }
})