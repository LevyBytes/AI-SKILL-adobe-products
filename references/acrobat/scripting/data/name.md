# name

Whatever name this data object goes by.

| Type | Access |
| --- | --- |
| String | R |

Example: Print out the names of every file attached to this document.

```javascript
console.println("Dumping all data objects in the document.");
var d = this.dataObjects;
for (var i = 0; i < d.length; i++)
    console.println("DataObject[" + i + "]=" + d[i].name);
```
