import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./contactList.styles";
import ContactCard from "./components/contactCard";

export default class ContactList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <Image
            style={styles.profilePic}
            source={require("../../../../../resources/img/mee.jpeg")}
          />
        </View>
        <Text style={styles.title}> Contacts </Text>
        <View style={styles.listView}>
          <ContactCard active={true} />
          <ContactCard active={true} />
          <ContactCard active={false} />
          <ContactCard active={false} />
          <ContactCard active={false} />
          <ContactCard active={false} />
          <ContactCard active={true} />
        </View>
      </View>
    );
  }
}
