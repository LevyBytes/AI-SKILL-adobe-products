# MenuElement

Community declaration reference: InDesign/2023.

Menu elements object.

```typescript
declare class MenuElement {
    /**
    - Event listener collection.
      */
      readonly eventListeners: EventListeners
    /**

    - Event collection.
      */
      readonly events: Events
    /**

    - Index position of MenuElement in its containing object.
      */
      readonly index: number
    /**

    - Whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Parent object for MenuElement (a Menu or Submenu).
      */
      readonly parent: any
    /**

    - Property bag for assigning several values at once.
      */
      properties: object
    /**

    - Registers an event listener.
    - @param eventType Event type value.
    - @param handler Event handler value.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**

    - Creates object references by resolving the specifier.
      */
      getElements(): MenuElement[]
    /**

    - Deletes the MenuElement.
      */
      remove(): void
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds executable source text that resolves back to the MenuElement.
      */
      toSource(): string
    /**

    - Gets the object specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
