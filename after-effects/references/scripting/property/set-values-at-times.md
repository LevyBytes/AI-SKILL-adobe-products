# Property.setValuesAtTimes()

app.project.item(index).layer(index).propertySpec.setValuesAtTimes(times, newValues)

### Description

Assigns values across a batch of keyframes at the times you give. Where the named property lacks a keyframe at a given time, one is created and given its value. You pass times and values as arrays, and the two arrays have to match in length.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| times | Array of floating-point values | An array of times, in seconds. The beginning of the composition is 0. |
| newValues | Array of values | A array of values appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.
