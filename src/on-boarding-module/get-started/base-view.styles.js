import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { OnBoardingText } from "../../resources/main-styles";

export const styles = StyleSheet.create({
  buttonWrapper: {
    height: 63,
    width: 260,
    marginTop: 466
  },
  buttonContainer: {
    alignItems: "center",
    height: "100%",
    borderRadius: 30,
    width: "100%",
    padding: 20
  },
  container: {
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: OnBoardingText.BUTTON_FONT
  }
});
