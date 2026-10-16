# Properties.getProperty()

app.properties.getProperty(property)

### Description

Fetches the value stored for a property.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| property | String | Property whose value should be read. |

### Returns

String.

### Example

Reads a label name at a specified index:

```javascript
var labelIndex = 0;
var property = 'BE.Prefs.LabelNames.' + labelIndex;

if (app.properties.doesPropertyExist(property)) {
    alert(app.properties.getProperty(property));
} else {
    alert('Property "' + property + '" does not exist');
}
```
