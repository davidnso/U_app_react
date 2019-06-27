
import { NativeModules , DeviceEventEmitter} from 'react-native';

const { SmsPackage } = NativeModules;
const eventsMap = { 
    message: 'messageReceived'
}

const Message = {}

Message.on = (event , callback)=>{ 
    const nativeEvent = eventsMap[event];
    if(!nativeEvent) {
        throw new Error('invalid event');
    }

    DeviceEventEmitter.removeAllListeners(nativeEvent);
    return DeviceEventEmitter.addListener(nativeEvent,callback)
}
export default Message;
