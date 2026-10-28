# Property.keySpatialContinuous()

app.project.item(index).layer(index).propertySpec.keySpatialContinuous(keyIndex)

### Description

Gives true when the keyframe you name has spatial continuity. An exception fires if the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.
