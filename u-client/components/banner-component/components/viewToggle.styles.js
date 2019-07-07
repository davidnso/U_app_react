import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 30,
        bottom: 0,
        position: 'absolute'
    },
    text:{
        fontFamily: 'roboto', 
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFF'
    },
     myCircleCounterCard:{
        width: 20,
        height: 20,
        backgroundColor: '#FFFF',
        borderRadius: 5,
        position: 'absolute',
        right: 40,
        bottom:4

    },
    AcquaintanceCounterCard:{
        width: 20,
        height: 20,
        backgroundColor: '#FFFF',
        borderRadius: 5,
        position: 'absolute',
        right: 22,
        bottom:4

    },
    myCircleTextWrapper:{
        width: '50%',
        height: 24,
        left:0,
        bottom: 14,
        position: 'absolute',
    },
    AcquaintanceTextWrapper:{
        width: '50%',
        height: 24,
        right:0,
        bottom: 14,
        position: 'absolute',
    },
    selectedLine: {
        width: '50%',
        height: 3,
        backgroundColor: '#FFFF',

        left:0,
        bottom:0,
        position: 'absolute'
    },
    AcquaintanceSelectedLine:{
        width: '50%',
        height: 3,
        backgroundColor: '#FFFF',

        right:0,
        bottom:0,
        position: 'absolute'
    }
})
