import React, { Component } from "react";
import { View, Text, Image, Button, StatusBar } from "react-native";
import { styles } from "./HomeView.styles";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Banner from "./components/banner-component/banner";
import Recent from "./components/contact-feed/components/most-recent-component/recent";
import ContactCard from "./components/contact-feed/components/contacts-component/components/contactCard";
import ContactList from "./components/contact-feed/components/contacts-component/contactList";
import NavBar from "./components/navbar-component/navBar";
import FilterBar from "./components/filter-component/filterBar";
import ViewToggle from "./components/banner-component/components/viewToggle";
//import NavBar from './components/nav-bar-component/navBar';
export default class HomeView extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    messages: "3"
  };
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  renderAlert() {
    if (this.state.messages) {
      return (
        <View
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: 6
          }}
        >
          <TouchableOpacity activeOpacity={0.2}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
                backgroundColor: "blue"
              }}
            >
              <Text>{this.state.messages}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
  render() {
    return (
      <View>
        <LinearGradient
          style={styles.screenWrapper}
          colors={["#73C1EB", "#5CBBEC", "#30ADEF", "#05A0F1", "#05A0F1"]}
        >
          <View style={{ maxWidth: 100, alignSelf: "center", marginTop: 30 }}>
            <Image
              style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                alignSelf: "center"
              }}
              source={require("../resources/img/mee.jpeg")}
            />
            <View
              style={{
                position: "absolute",
                right: -3,
                borderRadius: 100,
                width: 30,
                height: 30,
                backgroundColor: "#ffff",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#0FD2DD",
                  fontSize: 17,
                  fontFamily: "roboto"
                }}
              >
                3
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <Text
              style={{
                left: 10,
                color: "#ffff",
                fontFamily: "roboto",
                fontWeight: "100",
                fontSize: 17,
                textAlign: "left"
              }}
            >
              Most Recent
            </Text>
            <Recent active={true} />
          </View>
          <View
            style={{
              backgroundColor: "#F9FBFC",
              height: "100%",
              marginTop: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30
            }}
          >
            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "70%",
                  maxWidth: "70%",
                  alignSelf: "center"
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    this.props.navigation.navigate("Circle");
                  }}
                >
                  <View style={styles.menuOption}>
                    <Image
                      style={{ width: 80, height: 80, alignSelf: "center" }}
                      source={require("../resources/img/My_circle.png")}
                    />
                    <Text style={styles.menuText}>My Circle</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    this.props.navigation.navigate("Reminders");
                  }}
                >
                  <View style={styles.menuOption}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        alignSelf: "center",
                        marginTop: 20
                      }}
                      source={require("../resources/img/notificationIcon.png")}
                    />
                    <Text style={styles.menuText}>Reminders</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "70%",
                  maxWidth: "70%",
                  alignSelf: "center"
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    this.props.navigation.navigate("Preferences");
                  }}
                >
                  <View style={styles.menuOption}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        alignSelf: "center",
                        marginTop: 20
                      }}
                      source={require("../resources/img/List.png")}
                    />
                    <Text style={styles.menuText}>HouseKeeping</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    this.props.navigation.navigate("Settings");
                  }}
                >
                  <View style={styles.menuOption}>
                    <Image
                      style={{
                        width: 55,
                        height: 55,
                        alignSelf: "center",
                        marginTop: 20
                      }}
                      source={require("../resources/img/Settings.png")}
                    />
                    <Text style={styles.menuText}>Settings</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <NavBar />
        </LinearGradient>
      </View>
    );
  }
}
