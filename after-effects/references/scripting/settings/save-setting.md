# Settings.saveSetting()

app.settings.saveSetting(sectionName, keyName, value[, prefType])

### Description

Stores a value for a script-settings item.

Warning

Exceed 1999 bytes and calling saveSetting on that item raises an error (observed in AE 15.0.1)

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a settings section. |
| keyName | String | The key name of the setting item. |
| value | String | The new value. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Example

To stash a setting named "trimPrecomps" for a script called "Precomp Cropper", you might write:

```javascript
var trimPrecompsSetting = true;
app.settings.saveSetting("Precomp Cropper", "trimPrecomps", trimPrecompsSetting);
```

Keep in mind the value lands as a string. Later on, parse it back into a bool if that's what you need.
