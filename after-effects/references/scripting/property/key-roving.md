# Property.keyRoving()

app.project.item(index).layer(index).propertySpec.keyRoving(keyIndex)

### Description

Gives true when the keyframe you name is roving. A property's first and last keyframes are never allowed to rove, so attempting to set roving on either is simply disregarded and keyRoving() keeps returning false for it. An exception fires whenever the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Boolean.
