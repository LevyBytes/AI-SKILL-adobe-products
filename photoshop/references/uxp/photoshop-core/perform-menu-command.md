# performMenuCommand

22.5

**async** : _Promise_&lt;boolean&gt;

Invokes a menu command by `commandID`. It returns false
when the command fails or is unavailable.
Capture command IDs through Record Action Notifications in the Plugins > Development menu.

```javascript
// menu item Select > All
await core.performMenuCommand({ commandID: 1017 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `commandID` for the menu item. |
| `options.commandID` | _number_ | - |
