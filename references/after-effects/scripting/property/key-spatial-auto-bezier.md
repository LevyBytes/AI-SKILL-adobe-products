# Property.keySpatialAutoBezier()

app.project.item(index).layer(index).propertySpec.keySpatialAutoBezier(keyIndex)

### Description

Gives true when the keyframe you name uses spatial auto-Bezier interpolation. (That interpolation takes hold on this keyframe only while keySpatialContinuous(keyIndex) is true as well.) An exception fires if the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.
