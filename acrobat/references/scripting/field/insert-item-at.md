# insertItemAt

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | D | No | F |

Adds a fresh entry to a combo box or list box.

Companion methods and properties are numItems, getItemAt, deleteItemAt, clearItems, currentValueIndices and setItems.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The item name that will appear in the form. |
| cExport | (optional) The value exported for the field when this entry is the chosen one. Omitting it makes cName serve as the export value. |
| nIdx | (optional) Where in the list the new entry lands. At 0 (the default) it goes to the top; at –1 it is appended to the bottom. |

Example:

```javascript
var l = this.getField("myList");
l.insertItemAt("sam", "s", 0); /* inserts sam to top of list l */
```
