# Preferences.deletePref()

app.preferences.deletePref(sectionName, keyName[, prefType])

### Description

Removes a preference from the preference file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sectionName | String | The name of a preferences section. |
| keyName | String | The key name of the preference. |
| prefType | PREFType enum | Optional. Which preference file to use. |

### Returns

Nothing.

### Example

Suppose a setting under the key "trimPrecomps" lives in a section named "Precomp Cropper" — this removes it:

```javascript
app.preferences.deletePref("Settings_Precomp Cropper", "trimPrecomps");
```
