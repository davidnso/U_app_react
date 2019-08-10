import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import HomeView from "./HomeView";
import optionsDrawer from "./drawer";
let ClientNavigator = createStackNavigator(
  {
    home: HomeView
  },
  { headerMode: "none", initialRouteName: "home" }
);

ClientNavigator = createDrawerNavigator(
  {
    home: HomeView,
    options: optionsDrawer
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "#FFFFF",
    overlayColor: "#C2C2C2"
  }
);

export { ClientNavigator };
