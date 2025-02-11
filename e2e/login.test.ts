import { HomePage, LoginPage } from '@pages/index'

describe('Login/SignUp', () => {
  beforeEach(async () => {
    await device.launchApp({ delete: true })
  })

  it('Login with invalid email', async () => {
    await HomePage.verifyWelcomeMessage()
    await HomePage.bottomNavigation.openFooterMenu('login')
    await LoginPage.login('invalid')
    await LoginPage.verifyLoginErrorMessage()
  })

  it('Login with valid email', async () => {
    await HomePage.verifyWelcomeMessage()
    await HomePage.bottomNavigation.openFooterMenu('login')
    await LoginPage.login('valid')
    await LoginPage.verifyLoginSuccessMessage()
    await LoginPage.tapOk()
  })

  it('Sign Up with incorrect data', async () => {
    await HomePage.verifyWelcomeMessage()
    await HomePage.bottomNavigation.openFooterMenu('login')
    await LoginPage.signup('invalid')

    await LoginPage.verifySignUpErrorMessage()
  })

  it('Sign Up with correct data', async () => {
    await HomePage.verifyWelcomeMessage()
    await HomePage.bottomNavigation.openFooterMenu('login')
    await LoginPage.signup('valid')
    await LoginPage.verifySignUpSuccessMessage()
  })
})
