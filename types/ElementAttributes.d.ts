type ElementAttributesUnion =
  | Detox.IosElementAttributes
  | Detox.ElementAttributes
  | Detox.AndroidElementAttributes
  | { elements: Detox.IosElementAttributes[] }
  | { elements: Detox.AndroidElementAttributes[] }

type tElementIdentifier = 'id' | 'label' | 'text' | 'type'
