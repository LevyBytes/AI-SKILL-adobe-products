# MasterSpread event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class MasterSpread {
    /**
    - EventListeners attached to the master spread.
      */
      readonly eventListeners: EventListeners
    /**
    - Events associated with the master spread.
      */
      readonly events: Events
    /**
    - Registers an event listener.
    - @param eventType Event type to listen for.
    - @param handler Handler used for the event.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Detaches an event listener.
    - @param eventType Event type already registered.
    - @param handler Handler already registered.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
