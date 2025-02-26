import { BaseComponent, Button } from '@components/index.ts'

type tFooterMenu = 'login' | 'home' | 'webview' | 'forms' | 'swipe' | 'drag'

export class BottomNavigation extends BaseComponent {
  private login = new Button('Login')
  private home = new Button('Home')
  private webview = new Button('Webview')
  private forms = new Button('Forms')
  private swipe = new Button('Swipe')
  private drag = new Button('Drag')

  constructor() {
    super('')
  }

  public async openFooterMenu(menu: tFooterMenu): Promise<void> {
    await this[menu].tap()
  }
}
