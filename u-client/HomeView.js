import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./HomeView.styles";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import Banner from "./components/banner-component/banner";
import Recent from "./components/contact-feed/components/most-recent-component/recent";
import ContactCard from "./components/contact-feed/components/contacts-component/components/contactCard";
import ContactList from "./components/contact-feed/components/contacts-component/contactList";
import NavBar from "./components/navbar-component/navBar";
import FilterBar from "./components/filter-component/filterBar";
//import NavBar from './components/nav-bar-component/navBar';
export default class HomeView extends Component {
  render() {
    return (
      <View style={styles.screenWrapper}>
        <Banner />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Recent />
          <ContactList />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}
