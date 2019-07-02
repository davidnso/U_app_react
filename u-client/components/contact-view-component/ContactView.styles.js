import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    contactText :{
        fontSize: 16,
        color: '#737070',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 40,
    },
    contactScreenWrapper: {
        zIndex: 0,
        height: '80%',

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
        borderRadius: 100,
        marginLeft:5,
        paddingRight:5,
    },
    badge:{
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    badgeWrapper:{
        width: 20,
        height: 20,
        position: 'absolute',
        right: 0,
        top: 6,
    },
})