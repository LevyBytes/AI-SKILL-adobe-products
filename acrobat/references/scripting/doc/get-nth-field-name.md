# getNthFieldName

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | No | All |

Returns the name carried by the document's n th field. See also numFields.

Parameters

| Parameter | Description |
| --- | --- |
| nIndex | Position of the field whose name you want back. |

Returns

The name of the field in the document.

Example: Walk through each field the document contains.

```javascript
for (var i = 0; i < this.numFields; i++)
    console.println("Field[" + i + "] = " + this.getNthFieldName(i));
```
