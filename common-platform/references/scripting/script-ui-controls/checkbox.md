# checkbox

Class Name: Checkbox

### Description

Checkbox shows two states: a checkmarked box when value is true and an empty box when value is false.

It calls onClick when the user clicks the control or invokes notify() on it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Position and size for the control. |
| text | String | Optional. Text shown in the control. |
| creation_properties | Object | Optional. Object containing any properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Unique control name. |

### Example

Example:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("checkbox"[, bounds, text, {creation_properties}]);
```
