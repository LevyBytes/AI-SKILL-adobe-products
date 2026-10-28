# scrollbar

Class Name: Scrollbar

### Description

A scrollbar provides a draggable scroll indicator plus stepper buttons that move it. Its orientation is horizontal when width exceeds height at creation time, and vertical when height exceeds width.

onChange runs after the indicator moves or notify() is called. onChanging keeps firing while the user drags the indicator.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| value | Number | Stores the scrollbar indicator's current position inside the scrolling area, constrained by minvalue and maxvalue. |
| stepdelta | Number | Sets the unit moved by the up or down arrow. Default is 1. |
| jumpdelta | Number | Sets the jump amount; for example, clicking the bar away from the indicator or arrows uses this value. Default is 20% of the minvalue-to-maxvalue range. |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| value | Number | Optional. Sets the scroll indicator's starting position. Default is 0. |
| minvalue | Number | Optional. Sets the smallest value accepted by value. Default is 0. Along with maxvalue, defines the scrolling range. |
| maxvalue | Number | Optional. Sets the largest value accepted by value. Default is 100. Along with minvalue, defines the scrolling range. |
| creation_properties | Object | Optional. Holds any of the properties listed below. |

### Creation Properties

| Property | Type | Description |
| --- | --- | --- |
| name | String | Gives this control a unique name. |

### Example

Add this control to window w with:

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
w.add("scrollbar"[, bounds, value, minvalue, maxvalue, {creation_properties}]);
```
