import { HomePage, LoginPage } from '@pages/index'

describe('Forms', () => {
  beforeEach(async () => {
    await device.launchApp({ delete: true })
  })

  it('Login with invalid email', async () => {
    await HomePage.verifyWelcomeMessage()
    await HomePage.bottomNavigation.openFooterMenu('forms')
  })
})
