# TextVariableInstance event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class TextVariableInstance {
    /**
    - EventListener collection for this object.
      */
      readonly eventListeners: EventListeners
    /**
    - Event collection for this object.
      */
      readonly events: Events
    /**
    - Registers an event listener.
    - @param eventType Event type name.
    - @param handler Listener callback or file handler.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Unregisters an event listener.
    - @param eventType Previously registered event type.
    - @param handler Previously registered handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
