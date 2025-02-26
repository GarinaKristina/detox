import { expect } from 'detox'

import { Label } from '@components/index.ts'

import BasePage from './BasePage.ts'

export default new (class HomePage extends BasePage {
  private welcomeMessage = new Label(
    'WEBDRIVER Demo app for the appium-boilerplate'
  )

  constructor() {
    super()
  }

  public async verifyWelcomeMessage(): Promise<void> {
    await expect(this.welcomeMessage.getElement()).toBeVisible()
  }
})()
