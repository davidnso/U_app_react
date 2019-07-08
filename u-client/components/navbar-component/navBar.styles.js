import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    navbar:{
        bottom:0,
        position: 'absolute',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 37,
        borderColor: '#FCF3F3',
        borderWidth: .5,
        elevation:3
    },
    iconWrapper:{
        top:5,
        width: '40%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon:{
        width: 20,
        height: 20,
    }
});