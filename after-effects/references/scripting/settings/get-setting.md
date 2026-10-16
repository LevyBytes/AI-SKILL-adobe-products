# Settings.getSetting()

app.settings.getSetting(sectionName, keyName[, prefType])

### Description

Pulls the value of a script-settings item from the preferences file.

Warning

Exceed 1999 bytes and calling getSetting on that item raises an error (observed in AE 15.0.1)

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a settings section. |
| keyName | String | The key name of the setting item. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

String.

### Example

Suppose a setting under the key "trimPrecomps" sits in a section named "Precomp Cropper" — read its value like so:

```javascript
var trimPrecompsSetting = app.settings.getSetting("Precomp Cropper", "trimPrecomps");
alert("The setting is: " + trimPrecompsSetting);
```
