import { HomePage } from '@pages/index'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('should have welcome screen', async () => {
    await HomePage.verifyWelcomeMessage()
  })
})
