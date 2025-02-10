import { BaseComponent } from '@components/index.ts'

// type tBaseBottomNavItems = 'home' | 'more'
// type tBottomNavItems = tBaseBottomNavItems | 'dashboards' | 'meetings' | 'templateReports'
// type tRiskBottomNavItems = tBaseBottomNavItems | 'intakeRequests' | 'conflictReports'

export class BottomNavigation extends BaseComponent {
  // private home: AbstractComponent = new AbstractComponent('Home')
  // private dashboards: AbstractComponent = new AbstractComponent('Dashboards')
  // private intakeRequests: AbstractComponent = new AbstractComponent('Intake Requests')
  // private conflictReports: AbstractComponent = new AbstractComponent('Conflicts Reports')
  // private meetings: AbstractComponent = new AbstractComponent('Meetings')
  // private more: AbstractComponent = new AbstractComponent('More')

  // //DC theme
  // private templateReports: AbstractComponent = new AbstractComponent('Template Reports')

  constructor() {
    super('')
  }

  // @Step('Open bottom navigation menu item', ['menuItemName'])
  // async openMenuItem(menuItemName: tBottomNavItems | tRiskBottomNavItems) {
  //   if (device.getPlatform() === 'ios' && menuItemName === 'more') {
  //     const menuItem = this[menuItemName].getElement({
  //       with: {
  //         type: 'type',
  //         locator: 'RNSVGSvgView',
  //         relation: 'withDescendant',
  //       },
  //     })
  //     await Helper.waitFor(menuItem)
  //     await menuItem.tap()
  //   } else {
  //     await Helper.waitFor(this[menuItemName].getElement())
  //     await this[menuItemName].tap()
  //   }
  // }
}
