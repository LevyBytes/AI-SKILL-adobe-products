# Property.keyOutInterpolationType()

app.project.item(index).layer(index).propertySpec.keyOutInterpolationType(keyIndex)

### Description

Gives the outgoing interpolation type for the keyframe you specify.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

A KeyframeInterpolationType enumerated value; one of:

- KeyframeInterpolationType.LINEAR
- KeyframeInterpolationType.BEZIER
- KeyframeInterpolationType.HOLD
