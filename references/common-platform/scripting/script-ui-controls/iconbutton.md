# iconbutton

Class Name: IconButton

### Description

IconButton presents a mouse-sensitive pushbutton with an icon. It calls onClick when the user clicks the control or invokes notify() on it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| icon | Named resource, pathname, or File object | Optional. Icon source shown in the button control, either a named icon/icon-family resource or a pathname or File for an image file. PNG is required for images. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |
| style | String | String specifying the visual style, one of: - button: Shows a visible border with raised or 3D appearance. - toolbutton: Shows a flat appearance suited to toolbar placement |
| toggle | Boolean | For a button-style control, true makes the first click give it a pressed-button look, and later clicks switch between pressed and unpressed. The control's value property reflects the toggle state. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("iconbutton"[, bounds, icon, {creation_properties}]);
```
