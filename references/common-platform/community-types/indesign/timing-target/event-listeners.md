# TimingTarget event listeners

Community declaration reference: InDesign/2023.

```typescript
declare class TimingTarget {
    /**
    - EventListeners collection reference.
      */
      readonly eventListeners: EventListeners
    /**
    - Events collection reference.
      */
      readonly events: Events
    /**
    - Attaches an event listener.
    - @param eventType Event type value.
    - @param handler Event handler value.
    - @param captures Obsolete parameter.
      */
      addEventListener(eventType: string, handler: File | Function, captures?: boolean): EventListener
    /**
    - Detaches an event listener.
    - @param eventType Registered event type.
    - @param handler Registered event handler.
    - @param captures Obsolete parameter.
      */
      removeEventListener(eventType: string, handler: File | Function, captures?: boolean): boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
