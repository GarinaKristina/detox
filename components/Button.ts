import { BaseComponent } from '@components/index.ts'

export class Button extends BaseComponent {
  constructor(locator: string | RegExp) {
    super(locator)
  }
}
