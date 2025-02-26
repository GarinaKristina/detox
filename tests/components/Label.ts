import { BaseComponent } from '@components/index.ts'

export class Label extends BaseComponent {
  constructor(locator: string | RegExp) {
    super(locator)
  }

  public async getText(
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<string> {
    const attributes = (await this.getElementAttributes(
      elementIdentifier
    )) as Detox.ElementAttributes
    if (attributes.text) return attributes.text
    else throw new Error('No text found')
  }
}
