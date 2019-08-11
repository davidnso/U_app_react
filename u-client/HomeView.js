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
      <View style={styles.screenWrapper}>
        <View style={{ maxWidth: 100, alignSelf: "center", marginTop: 30 }}>
          <Image
            style={{
              height: 90,
              width: 90,
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
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <Text
            style={{
              left: 15,
              color: "#E9E9E9",
              fontFamily: "roboto",
              fontWeight: "200",
              fontSize: 17,
              textAlign: "left"
            }}
          >
            Most Recent
          </Text>
          <Recent active={true} />
        </View>
        <View style={{ marginTop: 50 }}>
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
                this.props.navigation.navigate("circle");
              }}
            >
              <View style={styles.menuOption} />
              <Text style={styles.menuText}>My Circle</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.menuOption} />
              <Text style={styles.menuText}>Reminders</Text>
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
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.menuOption} />
              <Text style={styles.menuText}>HouseKeeping</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.menuOption} />
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
        <NavBar />
      </View>
    );
  }
}
