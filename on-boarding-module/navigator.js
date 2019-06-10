import {createStackNavigator, createAppContainer} from 'react-navigation';
import EnterNumber from './enter-number/base-view'
import GetStartedScreen from './get-started/base-view'
import ContactScreen from './my-circle/familyScreen'
import familyScreen from './my-circle/familyScreen'

export const AppNavigator = createStackNavigator({
    StepOne: GetStartedScreen,
    StepTwo: EnterNumber,
    StepThree: ContactScreen,
    stepFour: familyScreen
},
{headerMode: 'none', initialRouteName: 'StepOne'})



