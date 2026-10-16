# Property.setTemporalAutoBezierAtKey()

app.project.item(index).layer(index).propertySpec.setTemporalAutoBezierAtKey(keyIndex, newVal)

### Description

Switches temporal auto-Bezier interpolation on or off for the keyframe you specify. While on, it influences this keyframe only when keySpatialContinuous(keyIndex) is true too.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn temporal auto-Bezier on, false to turn it off. |

### Returns

Nothing.
