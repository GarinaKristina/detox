package com.wdiodemoapp
import com.wix.detox.Detox
import expo.modules.ReactActivityDelegateWrapper
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

// for react-navigation
import android.os.Bundle;

// for react-native-bootsplash
import com.zoontek.rnbootsplash.RNBootSplash;


class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "wdiodemoapp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled))

  /**
   * https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project
   * https://github.com/zoontek/react-native-bootsplash?tab=readme-ov-file#android-1
   */ 
override fun onCreate(savedInstanceState: Bundle?) {
    Detox.onCreate(this, savedInstanceState)  
    RNBootSplash.init(this, R.style.BootTheme) 
    super.onCreate(savedInstanceState) 
}
}
