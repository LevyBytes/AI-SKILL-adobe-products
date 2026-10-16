# KinsokuTable event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class KinsokuTable {
    /**
    - EventListener collection for this object.
      */
      readonly eventListeners: EventListeners
    /**
    - Event collection for this object.
      */
      readonly events: Events
    /**
    - Registers a listener for an event.
    - @param eventType Event category to listen for.
    - @param handler Callback or File handler used for the event.
    - @param captures Obsolete parameter retained for compatibility.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Unregisters an event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
