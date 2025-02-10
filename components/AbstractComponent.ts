import BaseComponent from '@components/BaseComponent.ts'

export class AbstractComponent extends BaseComponent {
  constructor(locator: string | RegExp) {
    super(locator)
  }
}
