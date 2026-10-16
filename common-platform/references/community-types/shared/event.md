# Event

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

Base class used by UIEvent.
Stores input-event data as an event travels through a container and control hierarchy, following W3C event-handling rules.

```typescript
declare class Event {
    /**
    - */
      static readonly AT_TARGET: any
    /**

    - */
      static readonly BUBBLING_PHASE: any
    /**

    - */
      static readonly CAPTURING_PHASE: any
    /**

    - */
      static readonly NOT_DISPATCHING: any
    /**

    - True when this event type supports bubbling.
      */
      readonly bubbles: boolean
    /**

    - True when preventDefault() can cancel the default action tied to this event.
      */
      readonly cancelable: boolean
    /**

    - True when this event can be captured.
      */
      readonly captures: boolean
    /**

    - Event target object currently processing the event; during capture and bubble phases it differs from target.
      */
      readonly currentTarget: boolean
    /**

    - Event propagation phase currently active; one of none, target, capture, bubble.
      */
      readonly eventPhase: number
    /**

    - Target object for this event.
      */
      readonly target: object
    /**

    - Date and time when the event occurred.
      */
      readonly timeStamp: Date
    /**

    - Event name represented by this object.
    - Event types are listed in the JavaScript Tools Guide.
      */
      readonly type: string
    /**

    - Blocks the default action tied to this event from running.
      */
      preventDefault(): void
    /**

    - Stops this event from continuing through propagation.
      */
      stopPropagation(): void
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
