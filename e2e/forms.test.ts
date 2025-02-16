import { FormsPage, HomePage, LoginPage } from '@pages/index.ts'

describe('Forms', () => {
  beforeEach(async () => {
    await device.launchApp({ delete: true })
  })

  it('Verify the result fill out the form', async () => {
    await HomePage.verifyWelcomeMessage()
    await HomePage.bottomNavigation.openFooterMenu('forms')
    await FormsPage.fillInputField('Hello World')
    await FormsPage.verifyInputResults('Hello World')
    await FormsPage.verifyToggleSwitchState('off')
    await FormsPage.toggleSwitch()
    await FormsPage.verifyToggleSwitchState('on')
    await FormsPage.verifyToggleSwitchText('OFF')
    await FormsPage.tapActive()
    await LoginPage.tapOk()
  })
})
