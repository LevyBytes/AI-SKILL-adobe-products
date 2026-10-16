# progressbar

Class Name: Progressbar

### Description

This horizontal rectangle visualizes an operation's progress.

Every progressbar is horizontal. Its value property stores the current indicator position; the default is 0. Although minvalue exists, it always remains 0; attempts to assign a different value are ignored without reporting an error.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| value | Number | Optional. Sets the progress indicator's initial position. Default is 0. |
| minvalue | Number | Optional. Sets the smallest value accepted by value. Default is 0. Along with maxvalue, defines the range. |
| maxvalue | Number | Optional. Sets the largest value accepted by value. Default is 100. Along with minvalue, defines the range. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("progressbar"[, bounds, value, minvalue, maxvalue, {creation_properties}]);
```
