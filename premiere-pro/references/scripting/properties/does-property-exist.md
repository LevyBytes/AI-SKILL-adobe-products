# Properties.doesPropertyExist()

app.properties.doesPropertyExist(property)

### Description

Reports whether the named preference property is present.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| property | String | Property name to test. |

### Returns

Boolean.

### Example

Tests preference labels at indices 10 and 99:

```javascript
var property = 'BE.Prefs.LabelNames.10';
var exists = app.properties.doesPropertyExist(property);
alert('Property "' + property + '" exists: ' + exists.toString());

property = 'BE.Prefs.LabelNames.99';
exists = app.properties.doesPropertyExist(property);
alert('Property "' + property + '" exists: ' + exists.toString());
```
