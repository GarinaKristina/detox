import { BaseComponent } from '@components/index.ts'

export class Input extends BaseComponent {
  constructor(locator: string) {
    super(locator)
  }

  // /**
  //  * Set value to input field
  //  *
  //  * @param value - value to set
  //  * @param options - (Optional) Element locator options.
  //  */
  // public async setValue(value: string, options?: GetElementOptions) {
  //   const inputElement = this.getElement(options)
  //   await inputElement.replaceText(value)
  //   await inputElement.tapReturnKey()
  // }

  // /**
  //  * Get value from input field attribute
  //  *
  //  * @param options - (Optional) Element locator options.
  //  */
  // public async getValue(options?: GetElementOptions): Promise<string> {
  //   const attributes = (await this.getElementAttributes(options)) as Detox.ElementAttributes
  //   return attributes.value as string
  // }

  // /**
  //  * Taps the return key on the keyboard.
  //  *
  //  * @param options - (Optional) Element locator options.
  //  */
  // public async tapReturnKey(options?: GetElementOptions): Promise<void> {
  //   await this.getElement(options).tapReturnKey()
  // }

  // /**
  //  * Types text into an input field and optionally hides the keyboard.
  //  *
  //  * @param valueToSet - Text to type.
  //  * @param options - (Optional) Element locator options.
  //  * @param hideKeyboard - (Optional) If true, taps the return key to hide the keyboard. Defaults to true.
  //  */
  // public async typeText(valueToSet: string | number, options?: GetElementOptions, hideKeyboard: boolean = true): Promise<void> {
  //   await this.getElement(options).typeText(valueToSet.toString())
  //   if (hideKeyboard) await this.tapReturnKey(options)
  // }

  // /**
  //  * Returns the locator for an input element based on the platform (iOS or Android).
  //  *
  //  * @returns {Detox.NativeElement} - The input field element locator.
  //  */
  // public getInputLocator(): Detox.NativeElement {
  //   return device.getPlatform() === 'ios'
  //     ? this.getElement({ type: 'id', with: { type: 'type', locator: 'RCTUITextField', relation: 'and' } })
  //     : this.getElement({ type: 'label', with: { type: 'type', locator: 'android.widget.TextView', relation: 'and' }, index: 1 })
  // }
}
