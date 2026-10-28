# HyperlinkURLDestination event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class HyperlinkURLDestination {
    /**
    - Event listener collection for this object.
      */
      readonly eventListeners: EventListeners
    /**
    - Events collection exposed by this object.
      */
      readonly events: Events
    /**
    - Registers an event listener.
    - @param eventType Event type to listen for.
    - @param handler Handler that responds to the event.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Unregisters an event listener.
    - @param eventType Event type that was registered.
    - @param handler Handler that was registered.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
