import React, { Component } from "react";
import { Text, View, Image } from "react-native";
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
        <Text style={styles.title}> Reminder </Text>

        <LinearGradient
          style={styles.reminderContainer}
          colors={["#05A0F1", "#39B4F5", "#7FCEF8"]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.iconWrapper}>
              <Image
                style={styles.icon}
                source={require("../../resources/img/birthday-cake-solid.png")}
              />
            </View>
            <Text
              style={{
                textAlignVertical: "bottom",
                paddingLeft: 10,
                color: "#ffff",
                fontSize: 16,
                fontWeight: "100",
                fontFamily: "roboto"
              }}
            >
              {" "}
              August Birthdays
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              maxWidth: 70,
              margin: 5,
              marginLeft: 50
            }}
          >
            <Image
              style={{ height: 50, width: 50, borderRadius: 100 }}
              source={require("../../resources/img/mee.jpeg")}
            />
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                position: "absolute",
                right: 0
              }}
              source={require("../../resources/img/mee.jpeg")}
            />
          </View>
          <View
            style={{
              marginLeft: 50
            }}
          >
            <Text
              style={{
                color: "#ffff",
                fontSize: 14,
                fontWeight: "100",
                fontFamily: "roboto"
              }}
              numberOfLines={1}
            >
              Sam, Mike, David, Shae ...
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
