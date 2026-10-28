# addNotificationListener

23.0

**async** : _Promise_`<void>`

Register one callback against one or more Photoshop events.
Its callback form is `(eventName: string, descriptor: ActionDescriptor) => void`.

```javascript
await action.addNotificationListener(["open"], onOpenDocumentHandler);
```

Use the [table of events](../event-codes/reference-index.md), or use
the [introspection methods described under `batchPlay`](../batch-play/reference-index.md).

### Parameters

| Name | Type |
| --- | --- |
| `events` | _string_[] |
| `callback` | NotificationListener |
