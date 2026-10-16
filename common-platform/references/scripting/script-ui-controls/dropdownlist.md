# dropdownlist

Class Name: DropDownList

### Description

DropDownList contains zero or more items. It calls onChange when a script or user action changes the selected item, or when notify() is invoked on the object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| items | Array of strings | Optional. Provide either this argument or creation_properties, not both. Each list item uses the corresponding text. A ListItem object is created for every item. An item whose text string is "-" creates a separator item. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |
| items | Array of strings | Per-item text values. Details are in the Parameters table. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add( "dropdownlist", bounds[, items, {creation_properties}] );
```
