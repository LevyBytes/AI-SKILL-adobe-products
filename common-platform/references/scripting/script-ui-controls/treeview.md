# treeview

Class Name: TreeView

### Description

TreeView shows hierarchical items that can have children. Items at any tree level may be selected individually. If script code or the user changes selection, onChange runs; calling notify() on the object also runs it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| items | Array of Strings | Optional. Provides text for each top-level list item. Each entry creates a ListItem object. An item with type node may contain child items. Pass either this argument or the items property in creation_properties; do not use both. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |
| items | Array of Strings | Provides the text for each top-level list item. Each entry creates a ListItem object. An item with type node may contain child items. Use this property or the items argument, not both. This form is mainly useful for elements declared with Resource specifications. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("treeview"[, bounds, items, {creation_properties}])
```
