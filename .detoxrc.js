/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
   logger: {
    level: 'debug',
   },
  apps: {
    ios: {
      type: 'ios.app',
      binaryPath: 'app/wdiodemoapp.app',    
    },
    android: {
      type: 'android.apk',
      binaryPath: 'app/android.wdio.native.apk',
       testBinaryPath: 'app/app-debug-androidTest.apk',
      reversePorts: [8081]
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 16 Pro',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_API_34_AOSP',
      },
    },
  },
  configurations: {
    ios: {
      device: 'simulator',
      app: 'ios'
    },
    android: {
      device: 'emulator',
      app: 'android'
    }
  }
};