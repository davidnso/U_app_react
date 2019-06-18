import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
       justifyContent: 'center',
    },
    profileWrapper:{
        marginTop: 25,
    },
    profilePicture:{
        borderRadius: 100,
        width: 85,
        height: 85,
        alignSelf: 'center',
    },
    toggleButton:{
        marginTop: 8,
        backgroundColor: '#FFFFFD',
        borderRadius: 30,
        color: '#FFFFFD',
        height: 20,
        width: 95,
        elevation: 3
        // shadowColor: '#A5ABA9',
        // shadowOffset: {width: 1, height: 4},
        // shadowRadius: 30,
        // borderColor: '#A5ABA9',
        // borderWidth: 2,
    },
    contactStats:{
        marginTop: 85,
        marginHorizontal: 20,
        color: '#01DB90',
        fontSize: 13,
        textAlign: 'center',
    },
    buttonText:{
        color: '#A5ABA9',
        fontFamily: 'open-sans',
        fontSize: 12 ,
        fontWeight: '400',
        alignSelf: 'center',
        marginTop: 2,
        }
})