# Detox iOS Automation

This repository contains a pet project for automated testing on the iOS platform using [Detox](https://github.com/wix/Detox) and [Jest](https://jestjs.io/). The project is written in TypeScript.

## Features

- Automated end-to-end testing for iOS applications
- Uses **Detox** for UI automation
- Written in **TypeScript** for better maintainability
- **Jest** as the testing framework
- Prettier and ESLint for code formatting and linting

## Precondition

You need setup XCode simulator and Android Studio emulator

In this framework used nex devices

```
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
    }
```

## Installation

To set up the project, follow these steps:

1. Clone the repository
2. Install dependencies for app:

```

npm install
npm run ios.pods

```

3. Go to folder with tests

```

cd tests

```

4. Install dependencies for automation tests

```

npm install

```

5. Running IOS Tests

```

npm run test:ios

```

6. Running Android Tests

```

npm run test:android

```

Scripts for gradle

```
 cd android
./gradlew clean
./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug


```
