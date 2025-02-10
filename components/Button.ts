import { BaseComponent } from '@components/index.ts'

// import constants from '@config/constants.ts'
// import Helper from '@utils/Helper.ts'

export class Button extends BaseComponent {
  constructor(locator: string | RegExp) {
    super(locator)
  }

  // public async isButtonDisplayed(options?: GetElementOptions): Promise<void> {
  //   await Helper.waitFor(this.getElement(options), constants.waitForTimeout._5)
  // }
}
