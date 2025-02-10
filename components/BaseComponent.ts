// import constants from '@config/constants.ts'
// import Helper from '@utils/Helper.ts'
// import Logger from '@utils/Logger.ts'

export default abstract class BaseComponent {
  private locator: string | RegExp

  protected constructor(locator: string | RegExp) {
    this.locator = locator
  }

  // public getElement(options?: GetElementOptions): Detox.NativeElement {
  //   const platformDefaultType = device.getPlatform() === 'ios' ? 'id' : 'label'
  //   const type = options?.type || platformDefaultType

  //   let matcher = this.getMatcher(type, this.adjustLocator(type, this.locator))

  //   if (options?.with) {
  //     const type = options?.with.type || platformDefaultType
  //     const relatedMatcher = this.getMatcher(type, this.adjustLocator(type, options.with.locator))

  //     const relationHandlers = {
  //       and: (m: Detox.NativeMatcher, r: Detox.NativeMatcher) => m.and(r),
  //       withAncestor: (m: Detox.NativeMatcher, r: Detox.NativeMatcher) => m.withAncestor(r),
  //       withDescendant: (m: Detox.NativeMatcher, r: Detox.NativeMatcher) => m.withDescendant(r),
  //     }

  //     matcher = relationHandlers[options.with.relation](matcher, relatedMatcher)
  //   }

  //   const baseElement: Detox.NativeElement | Detox.IndexableNativeElement = element(matcher)

  //   if (!options?.skipIndexCheck) {
  //     const indexToApply = typeof options?.index === 'number' ? options.index : 0
  //     if (this.isIndexableElement(baseElement)) {
  //       return baseElement.atIndex(indexToApply)
  //     }
  //   }

  //   return baseElement
  // }

  // public async tap(options?: GetElementOptions): Promise<void> {
  //   await this.getElement(options).tap()
  // }

  // public async longPress(options?: GetElementOptions): Promise<void> {
  //   await this.getElement(options).longPress()
  // }

  // public async getElementAttributes(options?: GetElementOptions): Promise<ElementAttributesUnion> {
  //   return this.getElement(options).getAttributes()
  // }

  // public async swipeTo(direction: 'down' | 'up' | 'right' | 'left', options?: GetElementOptions): Promise<void> {
  //   await this.getElement(options).swipe(direction)
  // }

  // /**
  //  * Simulates a scroll on the element with the provided options.
  //  *
  //  * @param offsetPoints - the offset to scroll, in points
  //  * @param direction — the scroll’s direction (valid input: "left"/"right"/"up"/"down")
  //  * @param options - (Optional) Element locator options.
  //  */
  // public async scrollTo(offsetPoints = 250, direction: Detox.Direction = 'down', options?: GetElementOptions): Promise<void> {
  //   await this.getElement(options).scroll(offsetPoints, direction)
  // }

  // /**
  //  * Scrolling within an element to reach another element.
  //  *
  //  * @param element: Detox.NativeElement,
  //  * @param offsetPoints - the offset to scroll, in points
  //  * @param direction — the scroll’s direction (valid input: "left"/"right"/"up"/"down")
  //  * @param options - (Optional) Element locator options.
  //  */
  // public async scrollToElement(
  //   element: Detox.NativeElement,
  //   offsetPoints?: number,
  //   direction: Detox.Direction = 'down',
  //   options?: GetElementOptions
  // ): Promise<void> {
  //   for (let attempt = 1; attempt <= 10; attempt++) {
  //     try {
  //       await this.scrollTo(offsetPoints, direction, options)
  //       await Helper.waitFor(element, constants.waitForTimeout._5)
  //       break
  //     } catch (error) {
  //       Logger.info(`[BaseComponent.scrollToElement] Error occurred while scrolling to element: ${error}`)
  //     }

  //     if (attempt === 10) {
  //       Logger.error(`[BaseComponent.scrollToElement] Element not visible after ${attempt} scrolling attempts`)
  //       throw new Error(`[BaseComponent.scrollToElement] Element not visible after ${attempt} scrolling attempts`)
  //     }
  //   }
  //   Logger.info(`[BaseComponent.scrollToElement] Element found while scrolling\n [Element]: ${JSON.stringify(element)}`)
  // }

  // private getMatcher<T extends LocatorType>(type: T, locator: LocatorValue<T>): Detox.NativeMatcher {
  //   const matchers: Matchers = {
  //     id: (loc: string | RegExp) => by.id(loc),
  //     label: (loc: string | RegExp) => by.label(loc),
  //     text: (loc: string | RegExp) => by.text(loc),
  //     type: (loc: string) => by.type(loc),
  //   }

  //   const matcherFn = matchers[type] as MatcherFunction<LocatorValue<T>>
  //   return matcherFn(locator)
  // }

  // private isIndexableElement(element: Detox.NativeElement | Detox.IndexableNativeElement): element is Detox.IndexableNativeElement {
  //   return 'atIndex' in element
  // }

  // private adjustLocator(type: LocatorType, locator: string | RegExp) {
  //   return type === 'id' && device.getPlatform() === 'ios' ? this.prependTestIdToLocator(locator) : locator
  // }

  // private prependTestIdToLocator(locator: string | RegExp): string | RegExp {
  //   if (typeof locator === 'string') return `{TEST_ID}${locator}`
  //   return new RegExp(`\\{TEST_ID\\}${locator.source}`, locator.flags)
  // }
}
