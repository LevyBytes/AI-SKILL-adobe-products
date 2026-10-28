# Flash event listeners

Community declaration reference: Animate/22.0.

```typescript
declare class Flash {
    /**
    - Adds a function that will run for a chosen event. Multiple listeners may be assigned to the same event.
    - If an event fires often, such as mouseMove, and the handler runs for a long time, the application may hang or enter an error state. Keep prePublish and postPublish handlers small and fast.
    - @returns Integer listener ID. Pass this ID to fl.removeEventListener().
    - @param eventType Event type supplied to the callback. Allowed values: "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged""timelineChanged", "frameChanged", "prePublish", "postPublish", "selectionChanged", and "dpiChanged".
    - The documentChanged value means the foreground document changed, not that the document's contents changed. In other words, fl.getDocumentDOM() returns a different value than it returned before this event.
    - @param callbackFunction Name of the function to run each time the event occurs.
      */
      addEventListener(eventType: string, callbackFunction: any): number
    /**
    - Removes a function that was registered with fl.addEventListener().
    - @returns Boolean true when the event listener is removed successfully; false when the function was never in the fl.addEventListener() list.
    - @param eventType String specifying which event type to detach from this callback function. Allowed values: "documentNew", "documentOpened", "documentClosed", "mouseMove", "documentChanged", "layerChanged", "timelineChanged", and "frameChanged".
    - @param id Integer listener ID returned by the matching fl.addEventListener() call.
      */
      removeEventListener(eventType: string, id: number): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
