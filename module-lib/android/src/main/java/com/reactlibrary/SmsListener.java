
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import android.content.BroadcastReceiver;
import android.telephony.SmsMessage;
import android.util.Log;
import android.content.Context;
import android.content.Intent;
import android.net.sip.SipSession;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import android.provider.Telephony;
import java.util.Timer;
import java.util.TimerTask;

import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;

public class SmsListener extends BroadcastReceiver{
  private static final String TAG = "SmsListener";
  String msg,phoneNumber;

  @Override
  public void onReceive(Context context, Intent intent){
        Log.e("Sms broadcast receiver Intent Received:" , intent.getAction());
        if (Telephony.Sms.Intents.SMS_RECEIVED_ACTION.equals(intent.getAction())) {
            for (SmsMessage smsMessage : Telephony.Sms.Intents.getMessagesFromIntent(intent)) {
                String messageBody = smsMessage.getMessageBody();
                String phoneNumber = smsMessage.getOriginatingAddress();
                Log.i("message", messageBody);
                Log.i("PhoneNumber", phoneNumber);

                    Log.i("msg:", "is in my circle");
                new Timer().schedule(new TimerTask() {
                    @Override
                    public void run() {
                        notification();
                    }
                }, 100,1000000);

            }
        }
  }
  public static void notification(){

    WritableNativeMap params = new WritableNativeMap();
    Log.e("NOTIFICATION","HERE WE ARE!!!");
    params.putString("message:","THE USER WAS FOUND, HERE'S A NOTIFICATION");
    ReceiverModule.sendEvent("messageReceived", params);
}

  // @Override
  // public String getName() {
  //   return "ReceiverModule";
  // }
}

class contactManager {
  Context context;
  public contactManager(Context args){
      context = args;
  }

  public SharedPreferences initSharedPreferences(){
      SharedPreferences preferences;
      preferences = this.context.getSharedPreferences("CONTACT_LIST", Context.MODE_PRIVATE);
      preferences.edit().putString("phoneNumber","5555215554");
      preferences.edit().commit();

      return preferences;
  }
}