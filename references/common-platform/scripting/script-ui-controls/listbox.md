# listbox

Class Name: ListBox

### Description

ListBox can show any number of items, including none. A selection change from script or user interaction calls onChange; calling the object's notify() method does the same. A double click selects the clicked item and invokes onDoubleClick.

### Parameters

| Parameter | Type | Description |  |
| --- | --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |  |
| items | Array of Strings | Optional. Supplies the text for each list entry. Each entry creates a ListItem object. Pass either this argument or the items property in creation_properties; do not use both. A ListItem object is generated for every item. A text string of "-" creates a separator item. |  |
| creation_properties | Object | Optional. Holds any of the properties listed below. |  |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |
| multiselect | Boolean | false (the default) permits one selected item only. true permits multiple selected items. |
| items | Array of Strings | Provides the text for every list entry. Use this property or the items argument, not both. This form is mainly useful for elements declared with Resource specifications. |
| numberOfColumns | Number | Specifies how many columns show the items; default is 1. With multiple columns, every ListItem object represents one selectable row. The text and image values provide the first-column label, while subitems supplies labels for later columns. |
| showHeaders | Boolean | true shows column titles. |
| columnWidths | Array of Numbers | Preferred column widths in pixels, one number per column. |
| columnTitles | Array of Strings | Title strings corresponding to the columns; they appear when showHeaders is true. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("listbox", bounds[, items, {creation_properties}]);
```
