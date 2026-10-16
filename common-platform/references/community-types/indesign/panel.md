# Panel

Community declaration reference: InDesign/2023.

Panel object, possibly contained in a panel group.

```typescript
declare class Panel {
    /**
    - Event listener collection.
      */
      readonly eventListeners: EventListeners
    /**

    - Event collection.
      */
      readonly events: Events
    /**

    - Index position of Panel in its containing object.
      */
      readonly index: number
    /**

    - Whether the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**

    - Name assigned to Panel.
      */
      readonly name: string
    /**

    - Parent object for Panel (a Application).
      */
      readonly parent: Application
    /**

    - Property bag for assigning several values at once.
      */
      properties: object
    /**

    - When true, the panel is visible.
      */
      visible: boolean
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
      getElements(): Panel[]
    /**

    - Unregisters the event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
    /**

    - Builds executable source text that resolves back to the Panel.
      */
      toSource(): string
    /**

    - Gets the object specifier string.
      */
      toSpecifier(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
