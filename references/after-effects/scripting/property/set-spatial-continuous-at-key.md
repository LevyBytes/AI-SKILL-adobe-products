# Property.setSpatialContinuousAtKey()

app.project.item(index).layer(index).propertySpec.setSpatialContinuousAtKey(keyIndex, newVal)

### Description

Switches spatial continuity on or off for the keyframe you specify. An exception fires if the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn spatial auto-Bezier on, false to turn it off. |

### Returns

Nothing.
