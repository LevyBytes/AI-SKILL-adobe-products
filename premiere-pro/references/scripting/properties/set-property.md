# Properties.setProperty()

app.properties.setProperty(property, value, persistent, createIfNotExist)

### Description

Writes a property value.

Note

Premiere Pro preferences require a trailing path separator for any file path value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| property | String | Property name to create or update. |
| value | Any | Value to store on the property. |
| persistent | Boolean | Controls whether the value persists across sessions. |
| createIfNotExist | Boolean | Create the property when it is absent. |

### Returns

null

### Example

Changes a label name:

```javascript
var labelIndex = 0;
var property = 'BE.Prefs.LabelNamesX.' + labelIndex;

var newValue = 'Changed via Script';
var persistent = true;
var createIfNotExist = true;

if (app.properties.doesPropertyExist(property)) {
    if (app.properties.isPropertyReadOnly(property)) {
        alert('Could not rename property "' + property + '" because it is read-only.');
    } else {
        var oldValue = app.properties.getProperty(property);
        app.properties.setProperty(property, newValue, persistent, createIfNotExist);
        alert('Value changed from "' + oldValue + '" to "' + newValue + '"');
    }
} else {
    app.properties.setProperty(property, newValue, persistent, createIfNotExist);
    alert('Created new property "' + property + '" with value "' + newValue + '"');
}
```
