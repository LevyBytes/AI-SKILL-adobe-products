# removeNotificationListener

23.0

_Promise_`<void>`

Removes an event listener registered for Photoshop events.
See [addNotificationListener](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/photoshopaction.md#addnotificationlistener)

```javascript
await action.removeNotificationListener(["open"], onOpenNewDocument);
```

### Parameters

| Name | Type |
| --- | --- |
| `events` | _string_[] |
| `listener` | NotificationListener |
