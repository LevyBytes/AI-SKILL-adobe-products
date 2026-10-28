# Property.keyTemporalContinuous()

app.project.item(index).layer(index).propertySpec.keyTemporalContinuous(keyIndex)

### Description

Gives true when the keyframe you name has temporal continuity. That continuity takes hold on the keyframe only when the keyframe interpolation type is KeyframeInterpolationType.BEZIER across both keyInInterpolationType(keyIndex) and keyOutInterpolationType(keyIndex).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.
