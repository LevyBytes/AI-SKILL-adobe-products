# getDataObject

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Fetches one particular Data object. See also dataObjects, createDataObject, exportDataObject, importDataObject, and removeDataObject.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The name of the data object to obtain. |

Returns

The Data object corresponding to the specified name.

Example: Get a specific file attachment, and write various information to the console.

```javascript
var MyData = this.getDataObject("MyData");
console.show(); console.clear();
for (var i in MyData) console.println("MyData." + i + "=" + MyData[i]);
```
