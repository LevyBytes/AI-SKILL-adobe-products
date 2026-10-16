# add()

windowOrContainerObj.add(type[, bounds, text, { creation_props } ]);

### Description

Creates a new control or container object, adds it to this window or container's children, and returns it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| type | String | Control type. See Control types and creation parameters. |
| bounds | Bounds object | Optional. Bounds data describing the new control or container size and position relative to its parent. See Bounds object for specification formats. When supplied, ScriptUI creates a Bounds object and assigns it to the new object's bounds property. |
| text | String | Optional. Starting text shown in the control as a title, label, or contents, depending on control type. When supplied, ScriptUI assigns it to the new object's text property. |
| creation_props | Object. | Optional. This object's properties provide creation parameters that vary by object type. See Control types and creation parameters. |

### Returns

The created object, or null if creation is not possible.
