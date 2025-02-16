import { expect } from 'detox'

import { Button, Input, Label } from '@components/index.ts'

import BasePage from './BasePage.ts'

export default new (class LoginPage extends BasePage {
  private signUpTab = new Button('Sign up')
  private email = new Input('input-email')
  private password = new Input('input-password')
  private confirmPassword = new Input('input-repeat-password')
  private loginButton = new Button('LOGIN')
  private signupButton = new Button('SIGN UP')
  private loginErrorMessage = new Label('Please enter a valid email address')
  private loginSuccessMessage = new Label('Success')

  private signUpErrorMessage = new Label('Please enter the same password')
  private successSignUpMessage = new Label('Signed Up!')
  private ok = new Button('OK')

  constructor() {
    super()
  }

  public async login(parameter: 'valid' | 'invalid') {
    await this.email.setValue(
      parameter === 'valid' ? 'monkey@yandex.com' : 'Abracadabra'
    )
    await this.password.setValue('Password Abracadabra')
    await this.loginButton.tap()
  }

  public async signup(parameter: 'valid' | 'invalid') {
    if (parameter === 'valid') {
      await this.login('valid')
      await this.tapOk()
      await this.signUpTab.tap()
      await this.confirmPassword.setValue('Password Abracadabra')
    } else {
      await this.signUpTab.tap()
      await this.email.setValue('horse@yandex.com')
      await this.password.setValue('Password')
    }
    await this.signupButton.tap()
  }

  public async tapOk() {
    await this.ok.tap('text')
  }

  public async verifyLoginErrorMessage() {
    await expect(this.loginErrorMessage.getElement()).toBeVisible()
  }

  public async verifyLoginSuccessMessage() {
    await expect(this.loginSuccessMessage.getElement('text')).toBeVisible()
  }

  public async verifySignUpErrorMessage() {
    await expect(this.signUpErrorMessage.getElement()).toBeVisible()
  }

  public async verifySignUpSuccessMessage() {
    await expect(this.successSignUpMessage.getElement('text')).toBeVisible()
  }
})()
