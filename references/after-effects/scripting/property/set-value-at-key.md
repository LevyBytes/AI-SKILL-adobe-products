# Property.setValueAtKey()

app.project.item(index).layer(index).propertySpec.setValueAtKey(keyIndex, newValue)

### Description

Locates the keyframe you specify and assigns its value. When the property holds no keyframes, or none at that index, the method throws an exception and shows an error.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| newValue | Value | A value appropriate for the type of property being set; see Property.propertyValueType. |

### Returns

Nothing.
