import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RightButton from '../../resources/helper-components/right-arrow'
import {styles} from './SelectView.styles'

export default class SelectView extends Component{
    state = {
      Acquaintance:[
        {name: 'Business', key: 'B1',isSelected: false},
        {name: 'School', key: 'S1', isSelected: false},
        {name: 'Professional', key: 'P1', isSelected: false},
        {name: 'Arts', key: 'A1', isSelected: false},
        {name: 'Networking', key: 'N1', isSelected: false},
        {name: 'Administrative', key: 'A2', isSelected: false},
        {name: 'Social Media', key: 'SM2', isSelected: false},
        {name: 'Unnecessary', key: 'U1', isSelected: false}]
    }
    render(){
        return(
            <View>
                <View>
                    <Text style={styles.Title}>
                       Time to choose Acquaintances
                    </Text>
                </View>
                <View>
                    <Text style={styles.Prompt}> Select Three Categories</Text>
                    <View>
                    {this.renderAcquaintances()}
                    </View>

                </View>
            </View>
        )
    }

    renderAcquaintances = ()=> this.state.Acquaintance.map((acquaintance,index) =>{
            return(
                <TouchableOpacity onPress={()=>{this.selectAcquaintanceGroup(index)}}>
                <View>
                    <Text style={styles.Acquaintances}>{acquaintance.name}</Text>
            {acquaintance.isSelected && (
              <View
                style={styles.selectedIcon}
              />
            )}
                </View>
                </TouchableOpacity>
            )
        })
    selectAcquaintanceGroup(index){
        Acquaintances = this.state.Acquaintance;
        Acquaintances[index].isSelected = true;
        this.setState({Acquaintance:Acquaintances});
    }
}