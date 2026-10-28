# ArticleMember event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class ArticleMember {
    /**
    - Collection containing event listeners.
      */
      readonly eventListeners: EventListeners
    /**
    - Collection containing events.
      */
      readonly events: Events
    /**
    - Registers an event listener.
    - @param eventType Event type string.
    - @param handler Handler invoked for the event.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Unregisters the event listener.
    - @param eventType Registered event type string.
    - @param handler Registered handler for the event.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
