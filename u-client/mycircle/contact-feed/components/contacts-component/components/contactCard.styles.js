import { StyleSheet } from "react-native";
import colors from "../../../../../../_styles";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    width: "95%",
    flexDirection: "row",
    marginTop: 15
  },
  contactPicture: {
    borderRadius: 100,
    width: 45,
    height: 45
  },
  infoWrapper: {
    width: "75%",
    left: 20,
    marginTop: 5
  },
  heading: {
    width: 100,
    height: 20
  },
  name: {
    fontFamily: "roboto",
    fontWeight: "600",
    fontSize: 14,
    color: "#000000",
    left: 0
  },
  status_image: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  _status: {
    height: 39,
    width: 37,
    borderRadius: 8,
    justifyContent: "center",
    margin: 10
  },
  status: {
    left: 0,
    backgroundColor: "#0FD3DD",
    width: 85,
    height: 15,
    borderRadius: 6
  },
  statusText: {
    color: "#FFFF",
    fontSize: 12,
    fontFamily: "roboto",
    textAlign: "center",
    fontWeight: "bold",
    bottom: 2
  },
  messageContainer: {
    width: 240,
    marginTop: 3
  },
  message: {
    fontSize: 13,
    fontFamily: "roboto",
    color: colors.DEFAULT_MESSAGE_TEXT
  },
  messageModal: {
    borderRadius: 20,
    width: "87%",
    height: "40%",
    minHeight: 300,
    maxHeight: "40%",
    backgroundColor: "#FFFFFF",
    alignSelf: "center"
  },
  button: {
    backgroundColor: colors.BUTTON_BLUE,
    borderRadius: 20,
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
    height: 20,
    width: 90
  },
  buttonText: {
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center"
  }
});
