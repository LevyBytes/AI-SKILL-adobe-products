# PreflightProcess event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class PreflightProcess {
    /**
    - Collection object for event listeners.
      */
      readonly eventListeners: EventListeners
    /**
    - Collection object for events.
      */
      readonly events: Events
    /**
    - Attaches an event listener.
    - @param eventType Event type.
    - @param handler Event handler.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Detaches the event listener.
    - @param eventType Previously registered event type.
    - @param handler Previously registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
