import { createStackNavigator } from "react-navigation";
import HomeView from './HomeView'
export const ClientNavigator = createStackNavigator({
    home: HomeView,
},
{headerMode: 'none', initialRouteName: 'home'})