import { HomePage, SwipePage } from '@pages/index.ts'

describe('Swipe', () => {
  beforeEach(async () => {
    await device.launchApp({ delete: true })
  })

  it('Verify hide', async () => {
    await HomePage.verifyWelcomeMessage()
    await HomePage.bottomNavigation.openFooterMenu('swipe')
    await SwipePage.swipeToPicture()
    await SwipePage.verifyPictureIsVisible()
  })
})
