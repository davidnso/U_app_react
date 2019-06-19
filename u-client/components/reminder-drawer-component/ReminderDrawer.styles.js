import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    contactImageView:{
        width: '100%',
        height: '63%',
        backgroundColor: 'grey'
    },
    reminderContainer:{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    reminderTitle: { 
        color: '#01DB90',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
    },
    pullBar:{
        marginTop: 10,
        width: 70,
        height:6,
        borderRadius: 40,
        alignSelf: 'center',
        backgroundColor: '#E5E5E5'
    }
})