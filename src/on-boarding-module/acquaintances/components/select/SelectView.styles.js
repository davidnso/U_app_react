import {StyleSheet} from 'react-native'; 
import {OnBoardingText,OnBoardingColors,FONT} from '../../../../resources/main-styles'

export const styles = StyleSheet.create({
    componentWrapper:{
        height: '100%'
    },
    Title:{
        fontSize: OnBoardingText.sizes.HEADER_SIZE,
        fontWeight: 'bold',
        color: OnBoardingColors.MAIN_TEXT_GREEN,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 150,
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
        marginTop: 30,
        marginBottom: 30,
    },
    Acquaintances:{
        fontWeight: 'bold',
        fontSize: OnBoardingText.sizes.DETAIL_SIZE,
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    buttonWrapper:{
        alignSelf: 'flex-end',
        marginBottom: -90,
        height: 100,
        width: 100,
    },
})