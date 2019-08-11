import React, { Component } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./reminder.styles";

export default class ReminderComponent extends Component {
  state = {
    reminder: {
      types: ["Birthday", "Tasks", "Check"],
      month: "August"
    }
  };
  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text> Reminder </Text>

        <LinearGradient
          style={styles.reminderContainer}
          colors={["#05A0F1", "#39B4F5", "#7FCEF8"]}
        >
          <View style={styles.iconWrapper} />
        </LinearGradient>
      </View>
    );
  }
}
