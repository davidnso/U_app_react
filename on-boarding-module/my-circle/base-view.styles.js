import {StyleSheet} from 'react-native';
import {OnBoardingColors, FONT} from '../../resources/main-styles'
export const styles = StyleSheet.create({
    contactText :{
        fontSize: 16,
        color: '#737070',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 40,
    },
    contactCard:{
        marginTop:10,
        marginLeft: 10,
        flexDirection: 'row',
        paddingTop: 5
    },
    image:{
        width: 65,
        height: 65,
        marginLeft:5,
        paddingRight:5,
    },
    searchBox:{
        marginTop: 20,
        alignSelf: 'center',
        width: 370,
        height: 45,
        backgroundColor: '#F8F8F8',
        borderRadius: 10
    },
    counterText:{
        alignSelf: 'center',
        marginTop: 30,
        color: OnBoardingColors.MAIN_TEXT_GREEN,
        fontSize: FONT.SIZE,
        fontFamily: FONT.FAMILY,
        fontWeight: 'bold'
    },
    buttonWrapper:{
        alignSelf: 'flex-end',
        height: 100,
        width: 100,
    },
    selectedIcon: {
        alignSelf: 'center',
        borderRadius: 100,
        position: 'absolute',
        right: 20,
        width: 10,
        height: 10,
        marginLeft: 10,
        backgroundColor: '#6FFECE',
        shadowColor: '#B1FFE5',
        shadowRadius: 40,
    }
})