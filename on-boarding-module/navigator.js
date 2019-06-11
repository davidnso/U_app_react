import {createStackNavigator, createAppContainer} from 'react-navigation';
import EnterNumber from './enter-number/base-view'
import GetStartedScreen from './get-started/base-view'
import ContactScreen from './my-circle/familyScreen'
import familyScreen from './my-circle/familyScreen'
import filler from './filler'
import SelectView from './acquaintances/SelectView'
export const AppNavigator = createStackNavigator({
    StepOne: GetStartedScreen,
    StepTwo: EnterNumber,
    Filler: filler,
    StepThree: ContactScreen,
    stepFour: familyScreen,
    StepFive: SelectView
},
{headerMode: 'none', initialRouteName: 'StepOne'})



