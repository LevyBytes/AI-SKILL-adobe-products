# dataObjects

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array | R |

An array holding every named data object found in the document.

Companion properties and methods are openDataObject, getDataObject, createDataObject, importDataObject, removeDataObject, getDataObjectContents, and setDataObjectContents.

Example: List all embedded files in the document.

```javascript
var d = this.dataObjects;
for (var i = 0; i < d.length; i++)
    console.println("Data Object[" + i + "]=" + d[i].name);
```
