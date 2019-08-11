import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerNavigator
} from "react-navigation";
import HomeView from "./HomeView";
import preferencesComponent from "./preferences";
import manageComponent from "./manage";
import settings from "./settings";
import ReminderComponent from "./components/reminder";
export const ClientNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeView },
    Reminders: { screen: ReminderComponent },
    "My Circle": { screen: manageComponent },
    Preferences: { screen: preferencesComponent },
    Settings: { screen: settings }
  },
  {
    initialRouteName: "Home",
    drawerPosition: "right",
    hideStatusBar: false,
    drawerWidth: 250,
    drawerBackgroundColor: "#FFFFFF",
    overlayColor: "#C2C2C2"
  }
);
