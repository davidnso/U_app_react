import React, { Component } from "react";
import { Text, View, Image, Animated } from "react-native";
import { styles } from "./navBar.styles";
import {
  TouchableHighlight,
  TouchableOpacity
} from "react-native-gesture-handler";

export default class NavBar extends Component {
  state = {
    inactive: {
      height: 24,
      width: 24
    },
    animatedOpacity: new Animated.Value(0.0)
  };
  componentDidMount() {
    this.animateNavBar();
  }
  animateNavBar = () => {
    Animated.timing(this.state.animatedOpacity, {
      toValue: 1.0,
      duration: 1000
    }).start();
  };
  render() {
    return (
      <Animated.View
        style={[styles.navbar, { opacity: this.state.animatedOpacity }]}
      >
        <TouchableOpacity>
          <Image
            style={[
              styles.icon,
              {
                height: 20,
                width: 20,
                marginTop: 5
              }
            ]}
            source={require("../../../resources/img/wrench-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[
              styles.icon,
              {
                height: this.state.inactive.height,
                width: this.state.inactive.height,
                marginTop: 5
              }
            ]}
            source={require("../../../resources/img/reminder-nav.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../../resources/img/homeIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[
              styles.icon,
              {
                height: this.state.inactive.height,
                width: this.state.inactive.height,
                marginTop: 5
              }
            ]}
            source={require("../../../resources/img/profile-nav.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[
              styles.icon,
              {
                height: this.state.inactive.height,
                width: this.state.inactive.height,
                marginTop: 5
              }
            ]}
            source={require("../../../resources/img/gear-icon.png")}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
