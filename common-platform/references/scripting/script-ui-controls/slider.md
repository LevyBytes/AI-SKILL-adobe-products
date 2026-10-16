# slider

Class Name: Slider

### Description

This control has a movable position indicator and is always horizontal. Moving the indicator or calling notify() triggers onChange.

During user movement of the indicator, onChanging runs repeatedly.

The value property stores the indicator's current position within the minvalue-to-maxvalue range.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| bounds | Bounds object | Optional. Sets where the control is placed and how large it is. |
| value | Number | Optional. Sets the scroll indicator's starting position. Default is 0. |
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
w.add("slider"[, bounds, value, minvalue, maxvalue, {creation_properties}]);
```
