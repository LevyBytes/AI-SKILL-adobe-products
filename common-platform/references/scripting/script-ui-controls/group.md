# group

Class Name: Group

### Description

Group holds other controls. Containers also provide child-management properties; see Container Attributes.

When a group is hidden, every child inside it is hidden too. Showing the group displays only children whose own visibility is not hidden.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("group"[, bounds, {creation_properties}]);
```
