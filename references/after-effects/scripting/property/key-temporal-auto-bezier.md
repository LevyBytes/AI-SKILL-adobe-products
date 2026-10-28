# Property.keyTemporalAutoBezier()

app.project.item(index).layer(index).propertySpec.keyTemporalAutoBezier(keyIndex)

### Description

Gives true when the keyframe you name uses temporal auto-Bezier interpolation. This interpolation takes hold on the keyframe only when the keyframe interpolation type is KeyframeInterpolationType.BEZIER across both keyInInterpolationType(keyIndex) and keyOutInterpolationType(keyIndex).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.
