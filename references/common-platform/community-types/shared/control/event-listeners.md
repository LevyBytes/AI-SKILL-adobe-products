# _Control event listeners

Community declaration reference: shared/ScriptUI, shared/JavaScript, shared/XMPScript, shared/PlugPlugExternalObject, shared/global.

```typescript
declare class _Control {
    /**
    - Adds an event handler for a selected event type on this element.
    - @param eventName Event name. Event names are listed in the JavaScript Tools Guide.
    - @param handler Function that handles the event. It may refer to an extension-defined function by name or to a local handler that runs for the event. A handler function receives one argument, the UIEvent object.
    - @param capturePhase When true, the handler runs only during the capturing phase of event propagation. The default is false, so the handler runs in the bubble phase when this object is a target ancestor, or in the at-target phase when this object is the target.
      */
      addEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean
    /**
    - Unregisters an event handler for a selected event type on this element.
    - Every argument must exactly match the values used when the handler was registered.
    - @param eventName Event name.
    - @param handler Function that handles the event.
    - @param capturePhase Whether event handling is limited to the capture phase.
      */
      removeEventListener(eventName: string, handler: Function, capturePhase?: boolean): boolean
}
```

Source: [shared/ScriptUI.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/ScriptUI.d.ts); [shared/JavaScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/JavaScript.d.ts); [shared/XMPScript.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/XMPScript.d.ts); [shared/PlugPlugExternalObject.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/PlugPlugExternalObject.d.ts); [shared/global.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/shared/global.d.ts).
