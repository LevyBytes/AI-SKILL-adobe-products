# deleteItemAt

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | D | No | F |

Removes a single entry from a combo box or list box.

With a list box, deleting whatever is currently selected leaves the field with nothing selected at all. Calling the method a second time on that same field while passing no argument can produce unpredictable results, since no current selection remains to remove. The safe approach is to establish a fresh selection first — currentValueIndices is one way — so the method continues to act as described.

Parameters

| Parameter | Description |
| --- | --- |
| nIdx | (optional) Which list entry to remove, given as a 0-based index. Omit it and whatever is selected at the moment gets removed. |

Example: drop whatever entry is selected, then make the list's first entry the new selection.

```javascript
var a = this.getField("MyListBox");
a.deleteItemAt();              // Delete current item, and...
a.currentValueIndices = 0;     // select top item in list
```
