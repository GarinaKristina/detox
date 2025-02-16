import { expect } from 'detox'

import { Button, Input, Label } from '@components/index.ts'
import { Switch } from '@components/Switch.ts'

import BasePage from './BasePage.ts'

export default new (class FormsPage extends BasePage {
  private inputField = new Input('text-input')
  private inputResult = new Label('input-text-result')
  private switch = new Switch('switch')
  private switchText = new Label('switch-text')
  private active = new Button('Active')

  constructor() {
    super()
  }

  public async fillInputField(value: string) {
    await this.inputField.setValue(value)
  }

  public async toggleSwitch() {
    await this.switch.tap('id')
  }

  public async tapActive() {
    await this.active.tap()
  }

  public async verifyInputResults(value: string) {
    await expect(this.inputResult.getElement('id')).toHaveText(value)
  }

  public async verifyToggleSwitchState(state: 'on' | 'off') {
    await this.switch.verifySwitchState(state, 'id')
  }

  public async verifyToggleSwitchText(text: 'ON' | 'OFF') {
    await expect(this.switchText.getElement('id')).toHaveText(
      `Click to turn the switch ${text}`
    )
  }
})()
