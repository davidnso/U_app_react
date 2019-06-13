import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import RightButton from '../../../../resources/helper-components/right-arrow'
import {styles} from './SelectView.styles'

export default class SelectView extends Component{
    constructor(props){
        super(props)
        this.state = {
            Acquaintance:[
              {name: 'Business', key: 'B1',isSelected: false},
              {name: 'School', key: 'S1', isSelected: false},
              {name: 'Professional', key: 'P1', isSelected: false},
              {name: 'Arts', key: 'A1', isSelected: false},
              {name: 'Networking', key: 'N1', isSelected: false},
              {name: 'Administrative', key: 'A2', isSelected: false},
              {name: 'Social Media', key: 'SM2', isSelected: false},
              {name: 'Unnecessary', key: 'U1', isSelected: false}],
              contacts: this.props.navigation.state.params.contacts,
              selectedAcquaintanceGroups: [],
              selected: 0,
          }
    }

    render(){
        return(
            <View style={styles.componentWrapper}>
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
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity activeOpacity={.6}  onPress={()=> this.storeAcquaintanceGroupsAndNavigate()}>
                        <RightButton/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderAcquaintances = ()=> this.state.Acquaintance.map((acquaintance,index) =>{
            return(
                <TouchableOpacity key={acquaintance.key} onPress={()=>{this.selectAcquaintanceGroup(index)}}>
                <View >
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
         selected = this.state.selected;
        Acquaintances = this.state.Acquaintance;
       if(!Acquaintances[index].isSelected && selected<=3){
           Acquaintances[index].isSelected = true;
           selected++}
           else{
            Acquaintances[index].isSelected = false;
            selected--;
           }
           this.setState({selected})
           console.log(this.state.contacts);
        this.setState({Acquaintance:Acquaintances});
    }
    storeAcquaintanceGroupsAndNavigate(){
        selectedGroups =[];
        this.state.Acquaintance.map(group=>{
            if(group.isSelected){
                selectedGroups.push(group);
            }
        })
        console.log(selectedGroups);
        this.setState({selectedAcquaintanceGroups: selectedGroups});
        this.props.navigation.navigate('AcquaintanceStepOne', {contacts:this.state.contacts, Acquaintances: selectedGroups})
    }
}