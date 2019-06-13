import {createStackNavigator, createAppContainer} from 'react-navigation';
import EnterNumber from './enter-number/base-view'
import GetStartedScreen from './get-started/base-view'
import ContactScreen from './my-circle/familyScreen'
import familyScreen from './my-circle/familyScreen'
import filler from './filler'
import SelectView from './acquaintances/components/select/SelectView'
import AcquaintanceView from './acquaintances/AcquaintanceView'
import completion from './final'
export const AppNavigator = createStackNavigator({
    StepOne: GetStartedScreen,
    StepTwo: EnterNumber,
    Filler: filler,
    StepThree: ContactScreen,
    stepFour: familyScreen,
    StepFive: SelectView,
    AcquaintanceStepOne: AcquaintanceView,
    complete: completion
},
{headerMode: 'none', initialRouteName: 'StepOne'})



