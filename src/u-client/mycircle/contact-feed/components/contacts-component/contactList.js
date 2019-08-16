import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./contactList.styles";
import ContactCard from "./components/contactCard";
import { connect } from "react-redux";
import { fetchMessages } from "../../../../../datastore/actions/fetchMessages";
import { ScrollView } from "react-native-gesture-handler";
class ContactList extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps.messages);
    this.renderList(newProps.messages);
  }

  renderList = messages => {
    if (messages.length > 1) {
      messages.map(message => console.log(message.name));
    }
  };

  renderContactList = () =>
    this.props.contacts.map(contact => {
      console.log("here we are");

      return (
        <ContactCard
          active={contact.messageExists}
          name={contact.name}
          message={contact.messages[0].content}
          date={contact.messages[0].date}
          messageCount={contact.messages.length}
        />
      );
    });
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
        <Text>{this.props.contacts[0].map}</Text>
        <ScrollView
          style={{ height: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.listView}>{this.renderContactList()}</View>
        </ScrollView>
      </View>
    );
  }
}
export default connect(
  mapStateToProps,
  { fetchMessages }
)(ContactList);

function mapStateToProps(state) {
  console.log(state);
  return {
    contacts: state.myCircle,
    messages: state.messages
  };
}
