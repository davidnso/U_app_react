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
import ContactList from "./components/contact-feed/components/contacts-component/contactList";
export const ClientNavigator = createStackNavigator(
  {
    Home: { screen: HomeView },
    Reminders: { screen: ReminderComponent },
    Circle: { screen: ContactList },
    Preferences: { screen: preferencesComponent },
    Settings: { screen: settings }
  },
  { headerMode: "none", initialRouteName: "Home" }
);
