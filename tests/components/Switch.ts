import { expect } from 'detox'

import { BaseComponent } from '@components/index.ts'

export class Switch extends BaseComponent {
  constructor(locator: string | RegExp) {
    super(locator)
  }

  public async verifySwitchState(
    state: 'on' | 'off',
    elementIdentifier?: tElementIdentifier
  ) {
    await expect(this.getElement(elementIdentifier)).toHaveToggleValue(
      state === 'off' ? false : true
    )
  }
}
