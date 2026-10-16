# getMenuCommandTitle

22.5

**async** : _Promise_&lt;string&gt;

Returns the localized title for the requested menu command.

```javascript
const renameLayerStr = await core.getMenuCommandTitle({ commandID: 2983 });
```

### Parameters

| Name | Type |
| --- | --- |
| `options` | _object_ |
| `options.commandID?` | _number_ |
| `options.menuID?` | _number_ |
