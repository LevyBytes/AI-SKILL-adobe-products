# currentValueIndices

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | F | Integer Array | R/W |

Reads and writes single or multiple values of a list box or combo box.

Read

Hands back the options-array indices for the strings that make up a list box or combo box field's value. Those indices start at 0. A single-string field value comes back as one integer; otherwise the return is an array of integers ordered low to high. Should the field's current value fall outside the set of offered choices — as can happen with an editable combo box — the return is -1.

Write

Assigns the value of a list box or combo box, taking either one integer or an array of integers as its argument. To set a lone string as the value, hand it the 0-based index of that string within the options array. Bear in mind that with an editable combo box, when the value you want is not among the offered choices, you must set the value instead; that case aside, currentValueIndices is the preferred route for setting a list box or combo box value.

For a multiple selection on a list box that permits one, pass this property an array holding the indices — ordered low to high — of those strings within the options array. Pass an array of the form Field.value=["item1", "item3"] and it selects the items too. Whether a list box can take multiple selections is governed through multipleSelection.

numItems, getItemAt, insertItemAt, deleteItemAt and setItems are among the related methods and properties.

Fields

combobox, listbox

Example (Read)

A button's mouse-up action. Here the script reads a list box's current value.

```javascript
var f = this.getField("myList");
var a = f.currentValueIndices;
if (typeof a == "number")     // A single selection
    console.println("Selection: " + f.getItemAt(a, false));
else {     // Multiple selections
    console.println("Selection:");
    for (var i = 0; i < a.length; i ++)
        console.println("   " + f.getItemAt(a[i], false));
}
```

Example (Write)

The following code, selects the second and fourth (0-based index values, 1 and 3, respectively) in a list box.

```javascript
var f = this.getField("myList");
f.currentValueIndices = [1,3];
```
