
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNSmsCommunicatorModule extends ReactContextBaseJavaModule implements ActivityEventListener{

  private static final String TAG = "ReactCommunicator";
  private final ReactApplicationContext reactContext;

  public RNSmsCommunicatorModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;

    reactContext = Context;


        reactContext.addActivityEventListener(this);

        params.putString("message:","THE USER WAS FOUND, HERE'S A NOTIFICATION");
        try {
            this.sendEvent("messageReceived", params);
        }catch(Error e){
            Log.i("error:", e.toString());
        }
        Log.e("ReactCommunicatorModule:", "HERE!!!!!!!!!!!!!!");
        thisApp = reactContext.getPackageName();
  }

  @Override
  public String getName() {
    return "RNSmsCommunicator";
  }

  public static ReactApplicationContext getInstance(){
    if(reactContext!=null){
    return reactContext;
    }else{
        return null;
    }
}

public static void sendEvent(final String event, final WritableMap params) {
  if(reactContext.hasActiveCatalystInstance()) {
      Log.e("RECEIVER MODULE", "SEND EVENT REACHED!!!");
 reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(event, params);
  }else{
      new Timer().schedule(new TimerTask() {
          @Override
          public void run() {
              sendEvent(event,params);
          }
      }, 1000);
  }
}

@Override
public void onNewIntent(Intent intent){}
@Override
public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {}

}