package com.auditerp;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by apple on 16/11/30.
 */

public class IntentModule extends ReactContextBaseJavaModule {
    public IntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IntentModule";
    }

    @ReactMethod
    public void startActivityFromJs(String name, String params) {
        try {
            Activity activity = getCurrentActivity();
            if (null != activity) {
                Class toActivity = Class.forName(name);
                Intent intent = new Intent(activity, toActivity);
                intent.putExtra("params", params);
                activity.startActivity(intent);
            }

        } catch (Exception ex) {
            throw new JSApplicationIllegalArgumentException("can't open activity :" + ex.getMessage());
        }
    }

    @ReactMethod
    public void startActivityFromJSGetResult(String className, String params, int requestCode, Callback successBack, Callback errorBack) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (currentActivity != null) {
                Class toActivity = Class.forName(className);
                Intent intent = new Intent(currentActivity, toActivity);
                intent.putExtra("params", params);
                currentActivity.startActivityForResult(intent, requestCode);
                //进行回调数据
                successBack.invoke(MainActivity.mQueue.take());
            }
        } catch (Exception e) {
            errorBack.invoke(e.getMessage());
            e.printStackTrace();
        }

    }


}
