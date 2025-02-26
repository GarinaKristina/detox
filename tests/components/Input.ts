import { BaseComponent } from '@components/index.ts'

export class Input extends BaseComponent {
  constructor(locator: string) {
    super(locator)
  }

  /**
   * Set value to input field
   *
   * @param value - value to set
   * @param options - (Optional) Element locator options.
   */
  public async setValue(
    value: string,
    elementIdentifier: tElementIdentifier = 'id'
  ) {
    await this.getElement(elementIdentifier).typeText(value)
  }
}
