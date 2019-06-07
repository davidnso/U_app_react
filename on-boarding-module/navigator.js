import {createStackNavigator, createAppContainer} from 'react-navigation';
import EnterNumber from './enter-number/base-view'
import GetStartedScreen from './get-started/base-view'
import ContactScreen from './my-circle/ContactScreen'

export const AppNavigator = createStackNavigator({
    StepOne: GetStartedScreen,
    StepTwo: EnterNumber,
    StepThree: ContactScreen
},
{headerMode: 'none', initialRouteName: 'StepOne'})



