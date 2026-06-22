# Control Types And Creation Parameters (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Control objects — Control types and creation parameters

Containers expose extra child-management properties; see Container Attributes. Hiding a panel also hides its children. Showing it again displays only those children whose own hidden state does not suppress them.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| text | String | Optional. Provides the text shown in the control. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add a tab to tabbed panel t in window w with:

```
w.t.add("tab"[, bounds, text, {creation_properties}]);
```

### tabbedpanel

Class Name: TabbedPanel

### Description

This container holds selectable tab containers. Unlike a panel element, it accepts only tab elements as direct children.

Containers expose extra child-management properties; see Container Attributes. Hiding a panel also hides its children. Showing it again displays only those children whose own hidden state does not suppress them.

The parent's selection property holds the selected tab child. Exactly one tab child must be selected; selecting one tab clears selection on the rest. When selection changes from user action or script assignment, tabbedpanel receives onChange.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| text | String | Optional. Provides the text shown in the control. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

```
w.add("tabbedpanel"[, bounds, text, {creation_properties}]);
```

### treeview

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

```
w.add("treeview"[, bounds, items, {creation_properties}])
```
