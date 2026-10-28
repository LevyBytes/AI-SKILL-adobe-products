# numItems

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | Integer | R |

How many items a combo box or list box holds.

Fields

combobox, listbox

Example: Read off the item count of a list box.

```javascript
var f = this.getField("myList");
console.println("There are " + f.numItems + " in this list box");
```

To reach the face names and values inside a combo box or list box, use the getItemAt method, which carries a further numItems example of its own.
