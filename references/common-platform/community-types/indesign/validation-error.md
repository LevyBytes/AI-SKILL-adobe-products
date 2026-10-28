# ValidationError

Community declaration reference: InDesign/2023.

Represents an XML validation error.

```typescript
declare class ValidationError {
    /**
    - Attribute name when the validation error concerns an attribute.
      */
      readonly attributeName: string
    /**

    - Element responsible for the validation error.
      */
      readonly element: XMLElement
    /**

    - Message text for the validation error.
      */
      readonly errorMessage: string
    /**

    - Event listeners related to this object.
      */
      readonly eventListeners: EventListeners
    /**

    - Events related to this object.
      */
      readonly events: Events
    /**

    - Position of the ValidationError within its containing object.
      */
      readonly index: number
    /**

    - Indicates whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Parent object for the ValidationError (a Document).
      */
      readonly parent: Document
    /**

    - Property bag used to set several properties together.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type.
    - @param handler Event handler.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Resolves the object specifier and returns object references in an array.
      */
      getElements(): ValidationError[]
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds executable source text that resolves back to the ValidationError.
      */
      toSource(): string
    /**

    - Gets the object specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
