import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./navBar.styles";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../resources/img/feedIcon.png")}
          />
          <Image
            style={styles.icon}
            source={require("../../../resources/img/notificationIcon.png")}
          />
        </View>
      </View>
    );
  }
}
