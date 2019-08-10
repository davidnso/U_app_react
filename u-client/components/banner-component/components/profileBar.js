import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./profileBar.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ProfileBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.profileWrapper}>
          <Image
            style={styles.profilePic}
            source={require("../../../../resources/img/mee.jpeg")}
          />
        </View>
        <View style={{ position: "absolute", right: 15 }}>
          <TouchableOpacity>
            <Image
              style={styles.manageIcon}
              source={require("../../../../resources/img/whitelist.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
