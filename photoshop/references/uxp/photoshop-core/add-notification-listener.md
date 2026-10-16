# addNotificationListener

23.3

**async** : _Promise_`<void>`

Attach a listener to a Photoshop core event. Photoshop invokes a callback in the form
of `(eventName: string, descriptor: ActionDescriptor) => void`.

See the [table of events](../event-codes/reference-index.md).

Example group/event pair: '`UI`' with '`userIdle`'

- Fired after the Photoshop user has been idle for the configured number of seconds. See [setUserIdleTime](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/media/photoshopcore.md#setuseridletime).
- Fired again with descriptor `{idleEnd: true}` once the user is no longer idle. Use this signal to wrap up work performed while idle.

```javascript
await core.addNotificationListener("UI", ["userIdle"], onUserIdle);
```

### Parameters

| Name | Type |
| --- | --- |
| `group` | _string_ |
| `events` | _string_[] |
| `callback` | NotificationListener |
