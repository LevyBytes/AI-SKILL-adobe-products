# add()

containerObj.(type[, bounds, text, {creation_props}]);

### Description

Creates a new control or container object, adds it to this window or container's children, and returns it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | String | Control type. See Control types and creation parameters. |
| bounds | Bounds object | Optional. Bounds data that describes the new control or container size and position relative to its parent. When supplied, this value creates a Bounds object assigned to the new object's bounds property. |
| text | String | Optional. Starting text shown in the control as the title, label, or contents, depending on control type. When supplied, ScriptUI stores it in the new object's text property. |
| creation_props | Object | Optional. This object's properties provide creation parameters that vary by object type. See Control types and creation parameters. |

### Returns

Returns the created object, or null if creation is not possible.
