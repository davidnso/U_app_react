
import {NativeModules, DeviceEventEmitter} from 'react-native'

const { RNSmsCommunicatorPackage } = NativeModules;
const eventsMap = {
    message: 'messageReceived'
}
const ReactSmsDriver = {}

ReactSmsDriver.listenFor = (event, callback)=>{
    const nativeEvent = eventsMap[event];
    if(!nativeEvent){
        throw new Error('Invalid Event, check config');
    }

    DeviceEventEmitter.removeAllListeners(nativeEvent);
    return DeviceEventEmitter.addListener(nativeEvent,callback)

}

export default ReactSmsDriver;
