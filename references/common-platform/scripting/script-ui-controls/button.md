# button

Class Name: Button

### Description

Button provides mouse-sensitive pushbutton text. It calls onClick when the user clicks the control or invokes notify() on it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. In a modal dialog, using the special name "ok" sets this as defaultElement, and using "cancel" sets this as the parent dialog's cancelElement. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("button"[, bounds, text, {creation_properties}]);
```
