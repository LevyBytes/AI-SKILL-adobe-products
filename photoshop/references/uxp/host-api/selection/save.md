# save

25.0

**async** : _Promise_`<void>`

Create an Alpha Channel that stores the current selection.

```javascript
await doc.selection.save("My Selection");
```

UI Location: Select > Save Selection...

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `channelName?` | _string_ | Name for the created channel (Default: "Alpha 1", "Alpha 2", etc.) |
