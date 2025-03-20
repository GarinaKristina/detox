/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'node_modules/.bin/jest',
      config: './jest.config.ts',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  logger: {
    level: 'debug',
    overrideConsole: false,
    options: {
      colors: true,
      forceColor: false,
      showProcess: false,
      showDate: false,
      maxExceptionLines: 'auto',
      showLoggerName: false,
      showPid: false,
      showLevel: true,
      showMetadata: false,
    },
  },
  apps: {
    ios: {
      type: 'ios.app',
      binaryPath:
        '../ios/build/Build/Products/Debug-iphonesimulator//wdiodemoapp.app',
      build:
        'xcodebuild -project ../ios/wdiodemoapp.xcodeproj -scheme wdiodemoapp -sdk iphonesimulator -configuration Debug -derivedDataPath ../ios/build',
    },
    android: {
      type: 'android.apk',
      build:
        'cd ../android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
      binaryPath: '../android/app/build/outputs/apk/release/app-release.apk',
      testBinaryPath:
        '../android/app/build/outputs/apk/androidTest/release/app-release-androidTest.apk',
      reversePorts: [8081],
    },
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
        avdName: 'My_Android',
      },
    },
  },
  configurations: {
    ios: {
      device: 'simulator',
      app: 'ios',
    },
    android: {
      device: 'emulator',
      app: 'android',
    },
  },
}
