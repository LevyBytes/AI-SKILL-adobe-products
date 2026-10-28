# ColorGroupSwatch

Community declaration reference: InDesign/2023.

ColorGroupSwatch object.

```typescript
declare class ColorGroupSwatch {
    /**
    - EventListeners attached to this object.
      */
      readonly eventListeners: EventListeners
    /**

    - Events attached to this object.
      */
      readonly events: Events
    /**

    - Unique ID assigned to the ColorGroupSwatch.
      */
      readonly id: number
    /**

    - ColorGroupSwatch index inside its container.
      */
      readonly index: number
    /**

    - True when the object specifier maps to valid objects.
      */
      readonly isValid: boolean
    /**

    - Parent ColorGroup for this ColorGroupSwatch.
      */
      readonly parent: ColorGroup
    /**

    - Bulk property assignment object.
      */
      properties: object
    /**

    - Referenced underlying swatch item.
      */
      readonly swatchItemRef: Swatch
    /**

    - Registers an event listener.
    - @param eventType Event type value.
    - @param handler Event handler value.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Turns the object specifier into an array of object references.
      */
      getElements(): ColorGroupSwatch[]
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type value.
    - @param handler Registered event handler value.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds source text that evaluates back to the ColorGroupSwatch.
      */
      toSource(): string
    /**

    - Gets the object specifier.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
