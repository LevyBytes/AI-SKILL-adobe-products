# setUserIdleTime

23.3

**async** : _Promise_`<void>`

Sets how many seconds the Photoshop user must remain idle before the
userIdle event handler registered with [addNotificationListener](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/media/photoshopcore.md#addnotificationlistener) is invoked. An idleTime of 0
turns idle notifications off.

```javascript
await core.setUserIdleTime(3);
```

### Parameters

| Name | Type |
| --- | --- |
| `idleTime` | _number_ |
