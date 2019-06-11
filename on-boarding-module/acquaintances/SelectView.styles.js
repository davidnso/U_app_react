import {StyleSheet} from 'react-native'; 
import {OnBoardingText,OnBoardingColors,FONT} from '../../resources/main-styles'

export const styles = StyleSheet.create({
    Title:{
        fontSize: OnBoardingText.sizes.HEADER_SIZE,
        fontWeight: 'bold',
        color: OnBoardingColors.MAIN_TEXT_GREEN,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 100,
    },
    selectedIcon: {
        top: 6,
        alignSelf: 'center',
        borderRadius: 100,
        position: 'absolute',
        left: 20,
        width: 7,
        height: 7,
        marginLeft: 10,
        backgroundColor: '#6FFECE',
        shadowColor: '#B1FFE5',
        shadowRadius: 40,
    },
    Prompt:{
        fontSize: FONT.SIZE,
        fontWeight: '100',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    Acquaintances:{
        fontWeight: 'bold',
        fontSize: OnBoardingText.sizes.DETAIL_SIZE,
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    }
})