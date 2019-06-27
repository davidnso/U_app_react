
# react-native-module-lib

## Getting started

`$ npm install react-native-module-lib --save`

### Mostly automatic installation

`$ react-native link react-native-module-lib`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-module-lib` and add `RNModuleLib.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNModuleLib.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNModuleLibPackage;` to the imports at the top of the file
  - Add `new RNModuleLibPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-module-lib'
  	project(':react-native-module-lib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-module-lib/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-module-lib')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNModuleLib.sln` in `node_modules/react-native-module-lib/windows/RNModuleLib.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Module.Lib.RNModuleLib;` to the usings at the top of the file
  - Add `new RNModuleLibPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNModuleLib from 'react-native-module-lib';

// TODO: What to do with the module?
RNModuleLib;
```
  