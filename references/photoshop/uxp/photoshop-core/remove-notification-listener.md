# removeNotificationListener

23.0

_Promise_`<void>`

Unregisters a Photoshop event listener.
See [addNotificationListener](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/photoshopcore.md#addnotificationlistener)

```javascript
await core.addNotificationListener("UI", ["userIdle"], onUserIdle);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | _string_ | Notification group. |
| `events` | _string_[] | Array of event names. |
| `listener` | NotificationListener | - |
