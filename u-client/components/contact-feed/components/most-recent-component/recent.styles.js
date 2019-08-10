import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    top: 10,
    left: 30,
    width: "95%",
    flexDirection: "row"
  },
  subContainer: {
    left: 20
  },
  messageContainer: {
    top: 15,
    borderRadius: 10,
    width: 315,
    height: 80,
    backgroundColor: "#F7F7F7"
    //elevation: 15
  },
  infoContainer: {
    width: "70%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between"
    //alignItems:'baseline'
  },
  nameWrapper: {
    height: 20
  },
  timeWrapper: {
    height: 20
    // paddingBottom: 4
  },
  period: {
    color: "black",
    left: 5,
    fontWeight: "bold"
    // position: 'absolute'
  },
  name: {
    fontFamily: "roboto",
    fontWeight: "600",
    fontSize: 14,
    color: "#000000"
    //position: 'absolute'
  },
  contactPicture: {
    borderRadius: 100,
    width: 35,
    height: 35,
    elevation: 6,
    left: 0
  },
  title: {
    left: 15,
    color: "#E9E9E9",
    fontFamily: "roboto",
    fontWeight: "200",
    fontSize: 17,
    textAlign: "left"
  },
  contactWrapper: {
    borderRadius: 100,
    height: 35,
    width: 35,
    elevation: 15
  },
  time: {
    fontFamily: "roboto",
    fontSize: 10,
    fontWeight: "100"
  }
});
