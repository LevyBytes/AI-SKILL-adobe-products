# Property.keyOutSpatialTangent()

app.project.item(index).layer(index).propertySpec.keyOutSpatialTangent(keyIndex)

### Description

Hands back the outgoing spatial tangent for the keyframe you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Array of floating-point values:

- If the property value type is PropertyValueType.`TwoD_SPATIAL`, the array contains 2 floating-point values.
- If the property value type is PropertyValueType.`ThreeD_SPATIAL`, the array contains 3 floating-point values.
- If the property value type is neither of these types, an exception is generated.
