import React, { Component } from "react";
import Dimensions from "Dimensions";
import { Text, View, Animated } from "react-native";
import { styles } from "./viewToggle.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class ViewToggle extends Component {
  state = {
    myCircle: {
      messagesRemaining: 7,
      selected: true,
      lineWidth: new Animated.Value(Dimensions.get("window").width / 2)
    },
    Acquaintances: {
      messagesRemaining: 3,
      selected: false,
      lineWidth: new Animated.Value(0)
    }
  };
  myCircleColor = "#0FD2DD";
  AcquaintancesColor = "#018DF9";

  toggleMyCircleSelected = () => {
    Acquaintances = this.state.Acquaintances;
    myCircle = this.state.myCircle;
    if (this.state.Acquaintances.selected === true) {
      myCircle.selected = true;
      Acquaintances.selected = false;
    }
    console.log(Dimensions.get("window").width / 2);
    Animated.timing(this.state.myCircle.lineWidth, {
      toValue: 200,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.Acquaintances.lineWidth, {
        toValue: 0,
        duration: 500
      }).start();
    });
    this.setState({ Acquaintances });
    this.setState({ myCircle });
  };
  toggleAcquaintanceSelected = () => {
    Acquaintances = this.state.Acquaintances;
    myCircle = this.state.myCircle;
    if (this.state.Acquaintances.selected === false) {
      myCircle.selected = false;
      Acquaintances.selected = true;
    }
    Animated.timing(this.state.Acquaintances.lineWidth, {
      toValue: 200,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.myCircle.lineWidth, {
        toValue: 0,
        duration: 500
      }).start();
    });
    this.setState({ Acquaintances });
    this.setState({ myCircle });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.myCircleTextWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.toggleMyCircleSelected}
          >
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 17,
                fontWeight: "100",
                textAlign: "center",
                color: this.state.myCircle.selected ? "#FFFF" : "#D3D3D3"
              }}
            >
              My Circle
            </Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: this.state.myCircle.selected
                  ? "#FFFF"
                  : "#D3D3D3",
                borderRadius: 5,
                position: "absolute",
                right: 40,
                bottom: 4
              }}
            >
              <Text
                style={{
                  color: this.myCircleColor,
                  fontSize: 14,
                  textAlign: "center"
                }}
              >
                {this.state.myCircle.messagesRemaining}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.state.myCircle.selected && (
          <Animated.View
            style={[
              styles.selectedLine,
              { width: this.state.myCircle.lineWidth }
            ]}
          />
        )}
        <View style={styles.AcquaintanceTextWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.toggleAcquaintanceSelected}
          >
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 17,
                fontWeight: "100",
                textAlign: "center",
                color: this.state.Acquaintances.selected ? "#FFFF" : "#D3D3D3"
              }}
            >
              Acquaintances
            </Text>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: this.state.Acquaintances.selected
                  ? "#FFFF"
                  : "#D3D3D3",
                borderRadius: 5,
                position: "absolute",
                right: 22,
                bottom: 4
              }}
            >
              <Text
                style={{
                  color: this.AcquaintancesColor,
                  fontSize: 14,
                  textAlign: "center"
                }}
              >
                {this.state.Acquaintances.messagesRemaining}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.state.Acquaintances.selected && (
          <Animated.View
            style={[
              styles.AcquaintanceSelectedLine,
              { width: this.state.Acquaintances.lineWidth }
            ]}
          />
        )}
      </View>
    );
  }
}
