# setItems

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | D | No | F |

Populates a combo box or list box with its full set of items.

Companion methods and properties are numItems, getItemAt, deleteItemAt, currentValueIndices and clearItems.

Parameters

| Parameter | Description |
| --- | --- |
| oArray | An array whose every element is either something castable to a string or a nested array: - Where an element converts to a string, that string serves as both the user value and the export value for the list item. - Where an element is itself an array, it needs two string-convertible subelements, the first supplying the user value and the second the export value. |

Examples

Pull several fields (combo or list) and fill their lists with entries through a mix of approaches.

```javascript
var l = this.getField("ListBox");
l.setItems(["One", "Two", "Three"]);

var c = this.getField("StateBox");
c.setItems([["California", "CA"],["Massachusetts", "MA"],
    ["Arizona", "AZ"]]);

var c = this.getField("NumberBox");
c.setItems(["1", 2, 3, ["PI", Math.PI]]);
```
