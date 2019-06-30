
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import android.util.Log;
import android.app.Activity;
import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContext;

import java.util.Timer;
import java.util.TimerTask;


public class RNSmsCommunicatorModule extends ReactContextBaseJavaModule implements ActivityEventListener{

  private static final String TAG = "ReactCommunicator";
    private static ReactApplicationContext reactContext;
    private String thisApp;
  public RNSmsCommunicatorModule(ReactApplicationContext Context) {
    super(Context);
    reactContext = Context;

        WritableNativeMap params = new WritableNativeMap();
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