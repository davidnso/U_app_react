import {createStackNavigator, createAppContainer} from 'react-navigation';
import EnterNumber from './enter-number/base-view'
import GetStartedScreen from './get-started/base-view'

export const AppNavigator = createStackNavigator({
    StepOne: GetStartedScreen,
    StepTwo: EnterNumber
},
{headerMode: 'none', initialRouteName: 'StepOne'})



