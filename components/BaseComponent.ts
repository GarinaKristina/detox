import { expect } from 'detox'
import Logger from 'helpers/Logger'

export default abstract class BaseComponent {
  private locator: string | RegExp

  protected constructor(locator: string | RegExp) {
    this.locator = locator
  }

  public getElement(
    elementIdentifier: tElementIdentifier
  ): Detox.NativeElement {
    let baseElement: Detox.NativeElement | null = null

    const byFacade: { [key: string]: () => Detox.NativeMatcher } = {
      id: () => by.id(this.locator),
      label: () => by.label(this.locator),
      text: () => by.text(this.locator),
    }

    baseElement = element(byFacade[elementIdentifier]())
    return baseElement
  }

  public async tap(
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<void> {
    await this.getElement(elementIdentifier).tap()
  }

  public async longPress(
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<void> {
    await this.getElement(elementIdentifier).longPress()
  }

  public async getElementAttributes(
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<ElementAttributesUnion> {
    return this.getElement(elementIdentifier).getAttributes()
  }

  public async swipeTo(
    direction: 'down' | 'up' | 'right' | 'left',
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<void> {
    await this.getElement(elementIdentifier).swipe(direction)
  }

  /**
   * Simulates a scroll on the element with the provided options.
   *
   * @param offsetPoints - the offset to scroll, in points
   * @param direction — the scroll’s direction (valid input: "left"/"right"/"up"/"down")
   * @param options - (Optional) Element locator options.
   */
  public async scrollTo(
    offsetPoints = 250,
    direction: Detox.Direction = 'down',
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<void> {
    await this.getElement(elementIdentifier).scroll(offsetPoints, direction)
  }

  /**
   * Scrolling within an element to reach another element.
   *
   * @param element: Detox.NativeElement,
   * @param offsetPoints - the offset to scroll, in points
   * @param direction — the scroll’s direction (valid input: "left"/"right"/"up"/"down")
   * @param options - (Optional) Element locator options.
   */
  public async scrollToElement(
    element: Detox.NativeElement,
    offsetPoints?: number,
    direction: Detox.Direction = 'down',
    options?: tElementIdentifier
  ): Promise<void> {
    for (let attempt = 1; attempt <= 10; attempt++) {
      try {
        await this.scrollTo(offsetPoints, direction, options)
        await expect(element).toBeVisible(35)
        break
      } catch (error) {
        Logger.info(
          `[BaseComponent.scrollToElement] Error occurred while scrolling to element: ${error}`
        )
      }

      if (attempt === 10) {
        Logger.error(
          `[BaseComponent.scrollToElement] Element not visible after ${attempt} scrolling attempts`
        )
        throw new Error(
          `[BaseComponent.scrollToElement] Element not visible after ${attempt} scrolling attempts`
        )
      }
    }
    Logger.info(
      `[BaseComponent.scrollToElement] Element found while scrolling\n [Element]: ${JSON.stringify(element)}`
    )
  }
}
