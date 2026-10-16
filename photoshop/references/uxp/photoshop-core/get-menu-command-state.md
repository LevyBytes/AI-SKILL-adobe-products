# getMenuCommandState

22.5

**async** : _Promise_&lt;boolean&gt;

Returns whether a command menu item can currently be invoked.

```javascript
// can a Fill be performed?
const canFill = await core.getMenuCommandState({ commandID: 1042 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.commandID` | _number_ |
