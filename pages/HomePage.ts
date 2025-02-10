import BasePage from './BasePage'
import { Label } from '@components/index'
import { expect as jestExpect } from 'expect'

export default new (class HomePage extends BasePage {
  private welcomeMessage = new Label(
    'WEBDRIVER Demo app for the appium-boilerplate'
  )

  constructor() {
    super()
  }

  public async verifyWelcomeMessage(): Promise<void> {
    const text = this.welcomeMessage.getText()
    jestExpect(text).toBe('WEBDRIVER Demo app for the appium-boilerplate')
  }
})()
