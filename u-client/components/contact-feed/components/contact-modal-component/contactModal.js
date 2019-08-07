import React, { Component } from 'react'
import { Text, View,Image, Modal} from 'react-native'

export default class ContactModal extends Component {
    state={
        contactName: 'David',
        contactPictureUri: '',
        contactMessage:[
            {
                message:'this is message number one. render properly.....'
            },
            // {
            //     message: 'this is message number two. render properly...'
            // }
        ],
        showModal: true
    }
    render() {
        return (
            <View>
                <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          avoidKeyboard = {false}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
            </View>
        )
    }
}
