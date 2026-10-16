# Swatch event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class Swatch {
    /**
    - EventListeners attached to this object.
      */
      readonly eventListeners: EventListeners
    /**
    - Events attached to this object.
      */
      readonly events: Events
    /**
    - Registers an event listener.
    - @param eventType Event type value.
    - @param handler Event handler value.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Unregisters the event listener.
    - @param eventType Registered event type value.
    - @param handler Registered event handler value.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
