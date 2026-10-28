# Property.setRovingAtKey()

app.project.item(index).layer(index).propertySpec.setRovingAtKey(keyIndex, newVal)

### Description

Switches roving on or off for the keyframe you specify. A property's first and last keyframes can never rove, so any attempt to set roving on either is disregarded and keyRoving() keeps returning false. An exception fires if the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newVal | Boolean | true to turn roving on, false to turn roving off. |

### Returns

Nothing.
