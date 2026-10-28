# image

Class Name: Image

### Description

Shows an icon or image.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| icon | Named resource, pathname, or File object | Optional. Icon source shown in the button control, either a named icon/icon-family resource or a pathname or File for an image file. PNG is required for images. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("image"[, bounds, icon, {creation_properties}]);
```
