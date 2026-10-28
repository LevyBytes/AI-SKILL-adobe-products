# removeDataObject

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Requies file attachment rights |

Wipes from the document whichever data object carries the name you give.

Kindred objects, properties, and methods include dataObjects, getDataObject, openDataObject, createDataObject, removeDataObject, importDataObject, getDataObjectContents, and setDataObjectContents, plus the data object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | Which data object, named here, gets deleted. |

A data object's name is a property carried by the Data object. The object picks up its name at embed time — either the Acrobat UI assigns it automatically or the JavaScript methods createDataObject and importDataObject assign it programmatically.

Example:

```javascript
this.removeDataObject("MyData");
```
