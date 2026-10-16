# Endnote event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class Endnote {
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
    - Unregisters a previously attached event listener.
    - @param eventType Event category that was registered.
    - @param handler Handler that was registered for the event.
    - @param captures Obsolete parameter retained for compatibility.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
