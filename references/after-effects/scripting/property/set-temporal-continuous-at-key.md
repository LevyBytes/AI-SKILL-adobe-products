# Property.setTemporalContinuousAtKey()

app.project.item(index).layer(index).propertySpec.setTemporalContinuousAtKey(keyIndex, newVal)

### Description

Switches temporal continuity on or off for the keyframe you specify. With temporal continuity on, it influences this keyframe only when the keyframe interpolation type is KeyframeInterpolationType.BEZIER across both keyInInterpolationType(keyIndex) and keyOutInterpolationType(keyIndex).

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn temporal auto-Bezier on, false to turn it off. |

### Returns

Nothing.
