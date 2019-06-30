
# react-native-sms-communicator

## Getting started

`$ npm install react-native-sms-communicator --save`

### Mostly automatic installation

`$ react-native link react-native-sms-communicator`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-sms-communicator` and add `RNSmsCommunicator.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSmsCommunicator.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSmsCommunicatorPackage;` to the imports at the top of the file
  - Add `new RNSmsCommunicatorPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-sms-communicator'
  	project(':react-native-sms-communicator').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-sms-communicator/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-sms-communicator')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNSmsCommunicator.sln` in `node_modules/react-native-sms-communicator/windows/RNSmsCommunicator.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Sms.Communicator.RNSmsCommunicator;` to the usings at the top of the file
  - Add `new RNSmsCommunicatorPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNSmsCommunicator from 'react-native-sms-communicator';

// TODO: What to do with the module?
RNSmsCommunicator;
```
  