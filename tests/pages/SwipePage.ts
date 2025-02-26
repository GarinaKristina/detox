import { expect } from 'detox'

import { AbstractComponent } from '@components/AbstractComponent.ts'

import BasePage from './BasePage.ts'

export default new (class SwipePage extends BasePage {
  private swipeScreen = new AbstractComponent('Swipe-screen')
  private swipeControllerView = new AbstractComponent('RCTScrollContentView')
  private picture = new AbstractComponent('You found me!!!')
  constructor() {
    super()
  }

  public async swipeToPicture(): Promise<void> {
    await this.swipeScreen
      .getElement('id', 0)
      .swipe('up', 'slow', 0.9, 0.7, 0.3)

    await this.swipeControllerView
      .getElement('type')
      .swipe('up', 'slow', 0.5, 0.7, 0.5)
  }

  public async verifyPictureIsVisible(): Promise<void> {
    await expect(this.picture.getElement('text')).toBeVisible()
  }
})()
