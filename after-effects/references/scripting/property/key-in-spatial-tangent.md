# Property.keyInSpatialTangent()

app.project.item(index).layer(index).propertySpec.keyInSpatialTangent(keyIndex)

### Description

Hands back the incoming spatial tangent for the keyframe you name, provided the property is spatial — meaning its value type is `TwoD_SPATIAL` or `ThreeD_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Array of floating-point values:

- If the property value type is PropertyValueType.`TwoD_SPATIAL`, the array contains 2 floating-point values.
- If the property value type is PropertyValueType.`ThreeD_SPATIAL`, the array contains 3 floating-point values.
- If the property value type is neither of these types, an exception is generated.
