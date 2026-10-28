# tabbedpanel

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

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("tabbedpanel"[, bounds, text, {creation_properties}]);
```
