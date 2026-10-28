# getItemAt

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Fetches the internal value held by one entry of a combo box or list box.

To find how many entries a list holds, read numItems. Related calls include insertItemAt, deleteItemAt, clearItems, currentValueIndices and setItems.

Parameters

| Parameter | Description |
| --- | --- |
| nIdx | The 0-based index of the item in the list or -1 for the last item in the list. |
| bExportValue | (optional, Acrobat 5.0) Controls whether an export value comes back: - When true (the default), the item's export value is returned if one exists; lacking an export value, the item name comes back instead. - When false, only the item name is returned. |

Returns

The export value or name of the specified item.

Example: across both snippets below, take “myList” to hold three entries — “First” exporting 1, “Second” exporting 2, and “Third” carrying no export value.

```javascript
// Returns value of first item in list, which is 1
var f = this.getField("myList");
var v = f.getItemAt(0);
```

This next snippet demonstrates that second optional argument: passing false yields the displayed item name (its face value) even where an export value has been assigned.

```javascript
for (var i=0; i < f.numItems; i++)
    console.println(f.getItemAt(i,true) + ":  " + f.getItemAt(i,false));
```

The output to the console reads:

Reference data, output or notation; not an executable JavaScript program.

```text
1:            First
2:            Second
Third:        Third
```
