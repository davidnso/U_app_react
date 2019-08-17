import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Contacts from "react-native-contacts";
import { styles } from "./base-view.styles";
//linked page
import EnterNumber from "../enter-number/base-view";
import LinearGradient from "react-native-linear-gradient";
export default class GetStartedScreen extends Component {
  async componentWillMount() {
    await this.checkPermission().catch(err => {
      console.log(err);
    });
  }
  async askForPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: "Contacts Permission",
          message: "InTouch app needs access to your contacts"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return granted;
      }
    } catch (err) {}
  }
  async checkPermission() {
    await Contacts.checkPermission(async (error, result) => {
      let decision;
      if (result === "denied" || result === "undefined") {
        decision = await this.askForPermissions();
      }
      if (
        decision === PermissionsAndroid.RESULTS.GRANTED ||
        result === "authorized"
      ) {
        console.log("DID WE GET PERMISSION" + decision);
      }
    });
  }
  render() {
    return (
      <View>
        <Text />
        <View style={styles.container}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => this.props.navigation.navigate("StepTwo")}
            >
              <LinearGradient
                start={{ x: 0, y: 0.75 }}
                end={{ x: 1, y: 0.25 }}
                colors={["#0FD3DE", "#0BC8E0", "#09BAE7", "#059EF2", "#018DFA"]}
                style={styles.buttonContainer}
              >
                <Text style={styles.text}>Get Started</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
