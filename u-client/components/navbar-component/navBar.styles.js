import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navbar: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    backgroundColor: "transparent",
    height: 37,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  iconWrapper: {
    top: 5,
    marginBottom: 15,
    width: "40%",
    alignSelf: "center"
  },
  icon: {
    alignSelf: "center",
    width: 30,
    height: 30
  }
});
