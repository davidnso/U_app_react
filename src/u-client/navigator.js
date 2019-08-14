import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerNavigator
} from "react-navigation";
import HomeView from "./HomeView";
import preferencesComponent from "./housekeeping/preferences";
import manageComponent from "./mycircle/manage";
import settings from "./settings/settings";
import ReminderComponent from "./reminders/reminder";
import ContactList from "./mycircle/contact-feed/components/contacts-component/contactList";
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
