# selection

controlObj.selection

### Description

Info

Applies only to ListBox objects.

For a ListBox, this value is an array of ListItem objects representing the current selection in a multi-selection list. Assigning it highlights the selected item and scrolls that item into view when needed. With no selected items, the value is null. Assign null to clear every selection.

The value can also change when the user clicks or double-clicks an item, or when remove() or removeAll() removes an item. Each change calls onChange. If the change comes from a double click, onDoubleClick is called.

Instead of object references, the value may be assigned with an item index or an array of indices. Out-of-range index assignments are ignored. Even when assigned with index values, the property returns object references.

- Assigning an array to a single-selection list selects only the first item in that array.
- Assigning one item to a multi-selection list adds that item to the existing selection.

### Type

Array of ListItem objects

### selection

controlObj.selection

### Description

Info

Applies only to DropDownList or TreeView objects.

The currently selected ListItem object.

Assigning this value highlights the selected item and scrolls that item into view when needed. With no selected item, the value is null. Assign null to clear the selection.

The value can also change when the user clicks an item, or when remove() or removeAll() removes an item.

Whenever this value changes, onChange is called.

Instead of object references, the value may be assigned with an item index or an array of indices. Out-of-range index assignments are ignored. Even when assigned with an index value, the property returns an object reference.

### Type

ListItem
