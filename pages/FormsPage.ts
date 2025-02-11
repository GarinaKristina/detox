import BasePage from './BasePage'
import { AbstractComponent, Button, Input, Label } from '@components/index'
import { expect } from 'detox'

export default new (class FormsPage extends BasePage {
  private inputField = new Input('text-input')
  private inputResult = new Label('input-text-result')
  private switch = new AbstractComponent('switch')
  private switchText = new Label('switch-text')
  private dropdown = new AbstractComponent('text_input')
  private slider = new AbstractComponent('slider')
  private done = new Button('done_button')
  private active = new Button('Active')
  private inactive = new Button('Inactive')

  constructor() {
    super()
  }
})()
