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
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <View style={styles.screenWrapper}>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0.75 }}
            end={{ x: 1, y: 0.25 }}
            style={styles.banner}
            colors={["#10D5DD", "#0AC5E1", "#09B6E9", "#05A0F1", "#0087FC"]}
          >
            <View style={styles.navbar}>
              <View style={styles.profileWrapper}>
                <Image
                  style={styles.profilePic}
                  source={require("../resources/img/mee.jpeg")}
                />
              </View>
              <View style={{ position: "absolute", right: 15 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.openDrawer();
                  }}
                >
                  <Image
                    style={styles.manageIcon}
                    source={require("../resources/img/whitelist.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ViewToggle />
          </LinearGradient>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <FilterBar />
          <Recent />
          <ContactList />
        </ScrollView>
      </View>
    );
  }
}
