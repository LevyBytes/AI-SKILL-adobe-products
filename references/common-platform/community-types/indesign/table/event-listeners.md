# Table event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class Table {
    /**
    - Event listeners are exposed through this collection.
      */
      readonly eventListeners: EventListeners
    /**
    - Events are exposed through this collection.
      */
      readonly events: Events
    /**
    - Adds an event listener.
    - @param eventType Event type.
    - @param handler Event handler.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Removes the event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
