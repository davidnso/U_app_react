import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        width: '95%',
        height: 80,
        flexDirection: 'row',
        marginVertical: 3
    },
    contactPicture:{
            borderRadius: 100,
            width: 40,
            height: 40,
            left:8,
            top: 5,
    },
    infoWrapper:{
        width: '75%',
        left: 20,
    },
    heading:{
        width: 100,
        height: 20,
    },
    name: {
        fontFamily: 'roboto',
        fontWeight: '600',
        fontSize: 14,
        color: '#000000',
        left:0
    },
    status:{
        left:0,
        backgroundColor: '#0FD3DD',
        width: 85,
        height: 15,
        borderRadius: 5,
    },
    statusText:{
        color: '#FFFF',
        fontSize: 12,
        fontFamily: 'roboto',
        textAlign: 'center',
        fontWeight: 'bold',
        bottom: 2
    },
    messageContainer:{
        width: 240,
    },
    message:{
        fontSize: 13,
        fontFamily: 'roboto',
    }
})
