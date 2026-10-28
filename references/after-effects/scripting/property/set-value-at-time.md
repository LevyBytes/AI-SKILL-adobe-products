# Property.setValueAtTime()

app.project.item(index).layer(index).propertySpec.setValueAtTime(time, newValue)

### Description

Assigns a keyframe's value at the time you give. When no keyframe yet exists for the named property at that time, one is created and given the value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds, at which to set the value. The beginning of the composition is 0. |
| newValue | Value | A value appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.
