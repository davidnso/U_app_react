import React, { Component } from 'react'
import { Text, View, Image, Animated} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FilterBar extends Component {

    state = {
        friends: {
            isSelected: false
        } //this.props.params...
        ,
        family:{
            isSelected: false
        }
    }

    toggleSelected=()=>{
        friends = this.state.friends.isSelected;
        family = this.state.family.isSelected;
        if(!this.state.friends.isSelected){
            friends.isSelected = true;
            family.isSelected = false;
            this.setState({family});
            this.setState({friends});
        }
    }    
    render() {
        return (
            <View style={{
            width:"40%",
            maxWidth:"100%",
            height: 40,
            marginTop:20,
            marginBottom: 40,
            flexDirection:"row",
            justifyContent:"space-between",
            alignSelf:"center"}}>
                <TouchableOpacity activeOpacity={.5} style={{width:50, height:60,alignContent:"center"}} onPress={()=>{this.toggleSelected()}}>
                <Image 
                style={{width:33,height:33,borderRadius:100,alignSelf:"center"}}
                source={require('../../../resources/img/Filter-icon.png')}/>
                <View style={{
                    width:50,
                    borderRadius:30,
                    backgroundColor:"#EEEEEE",
                    alignItems:"center",
                    marginTop:5}}>
                    <Text style={{fontSize:12,fontWeight:"500",color:"#A5ABA9"}}>Family</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} style={{
                    width:50,
                    alignContent:"center"}}
                    onPress={()=>{this.toggleSelected()}}
                    >
                <Image  style={
                    {width:33,height:33,borderRadius:100,alignSelf:"center"}
                }
                source={require('../../../resources/img/Filter-icon-2.png')}/>
                <View style={{
                    width:50,
                    borderRadius:30,
                    backgroundColor: !this.state.family.isSelected? "#EEEEEE": "#0FD3DD",
                    alignItems:"center",
                    marginTop:5}}>
                <Text style={{fontSize:12,fontWeight:"500",color:"#A5ABA9"}}>Friends</Text>
                </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}
