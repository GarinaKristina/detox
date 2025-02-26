export default abstract class BaseComponent {
  private locator: string | RegExp

  protected constructor(locator: string | RegExp) {
    this.locator = locator
  }

  public getElement(
    elementIdentifier: tElementIdentifier = 'label',
    index: number = 0
  ): Detox.NativeElement {
    let baseElement: Detox.NativeElement | null = null

    const byFacade: { [key: string]: () => Detox.NativeMatcher } = {
      id: () => by.id(this.locator),
      label: () => by.label(this.locator),
      text: () => by.text(this.locator),
      type: () => by.type(this.locator as string),
    }

    baseElement = element(byFacade[elementIdentifier]())
    if (index > 0)
      baseElement = element(byFacade[elementIdentifier]()).atIndex(index)

    return baseElement
  }

  public async tap(
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<void> {
    await this.getElement(elementIdentifier).tap()
  }

  public async getElementAttributes(
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<ElementAttributesUnion> {
    return this.getElement(elementIdentifier).getAttributes()
  }

  public async swipeTo(
    direction: 'down' | 'up' | 'right' | 'left',
    speed: 'fast' | 'slow',
    percentage: number,
    startOffset: number,
    endOffset: number,
    elementIdentifier: tElementIdentifier = 'label'
  ): Promise<void> {
    await this.getElement(elementIdentifier).swipe(
      direction,
      speed,
      percentage,
      startOffset,
      endOffset
    )
  }
}
