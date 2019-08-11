import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Animated,
  Button,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import Modal from "react-native-modal";
import {
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from "react-native-gesture-handler";
import { styles } from "./contactCard.styles";
import colors from "../../../../../../_styles";
import LinearGradient from "react-native-linear-gradient";

export default class ContactCard extends Component {
  state = {
    sam: {
      isActive: this.props.active
    },
    statusBarWidth: new Animated.Value(0),
    messageOpacity: new Animated.Value(0),
    statusOpacity: new Animated.Value(0),
    showModal: false,
    text: "",
    isSelected: false,
    cardHeight: new Animated.Value(80)
  };
  /**
   * we render some pretty cool react animations when the component mounts
   * starting with the status container which slides out, followed by the status and message text
   * which render simultaneously.
   */
  componentDidMount() {
    this.animateStatus();
  }
  animateStatus = () => {
    Animated.timing(this.state.statusBarWidth, {
      toValue: this.state.sam.isActive ? 85 : 60,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.statusOpacity, {
        toValue: 1,
        duration: 1000
      }).start();
      Animated.timing(this.state.messageOpacity, {
        toValue: 1,
        duration: 1000
      }).start();
    });
  };
  animateContactCard = () => {
    Animated.timing(this.state.cardHeight, {
      toValue: this.state.sam.isActive && !this.state.isSelected ? 100 : 80,
      duration: 350
    }).start();
    if (!this.state.isSelected) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  };
  setModalVisible = visible => {
    console.log("modal being set to " + visible);
    this.setState({ showModal: visible });
  };
  render() {
    /**
     * KEY POINTS: by default, a users card is inactive, we only change it to an active card
     * if the state says otherwise.
     *
     * while rendering, if the contact is an active card or has a state of active,
     * we change the card color to grey or {#C2C2C2} give it a status message 'NEW MESSAGE'.
     *
     */
    cardColor = "#FFFF";
    status = "Idle";
    statusBarColor = "#eeeeee";
    if (this.state.sam.isActive) {
      cardColor = "#F2F2F2";
      status = "1";
      statusBarColor = "#0FD3DD";
    }

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.animateContactCard();
          }}
        >
          <Animated.View
            style={[
              styles.container,
              { height: this.state.cardHeight, backgroundColor: cardColor }
            ]}
          >
            <View style={styles.status_image}>
              {this.state.sam.isActive && (
                <LinearGradient
                  start={{ x: 0, y: 0.75 }}
                  end={{ x: 1, y: 0.25 }}
                  style={styles._status}
                  colors={[
                    "#10D5DD",
                    "#0AC5E1",
                    "#09B6E9",
                    "#05A0F1",
                    "#0087FC"
                  ]}
                >
                  <Animated.Text
                    style={[
                      styles.statusText,
                      { opacity: this.state.statusOpacity }
                    ]}
                  >
                    {status}
                  </Animated.Text>
                </LinearGradient>
              )}
              {!this.state.sam.isActive && (
                <View
                  style={[styles._status, { backgroundColor: statusBarColor }]}
                >
                  <Animated.Text
                    style={[
                      styles.statusText,
                      { opacity: this.state.statusOpacity }
                    ]}
                  >
                    {status}
                  </Animated.Text>
                </View>
              )}
              <Image
                source={require("../../../../../../resources/img/briGreg.jpg")}
                style={styles.contactPicture}
              />
            </View>

            <View style={styles.infoWrapper}>
              <View style={styles.heading}>
                <Text style={styles.name}>Sam</Text>
              </View>
              <View style={styles.messageContainer}>
                {this.state.sam.isActive && (
                  <Animated.Text
                    style={[
                      styles.message,
                      { opacity: this.state.messageOpacity }
                    ]}
                  >
                    {" "}
                    I’m not really tryna do all that work this weekend, it’s
                    been a hectic week.
                  </Animated.Text>
                )}
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
        {this.state.isSelected && this.state.sam.isActive && (
          <Animated.View
            style={{
              position: "absolute",
              flexDirection: "row",
              justifyContent: "space-evenly",
              bottom: 7,
              width: " 100%",
              alignItems: "center",
              margin: "auto"
            }}
          >
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.BUTTON_GRAY }]}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Wait</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.6}>
              <Text style={styles.buttonText}>Reply</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    );
  }
}
