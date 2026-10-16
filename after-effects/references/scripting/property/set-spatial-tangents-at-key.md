# Property.setSpatialTangentsAtKey()

app.project.item(index).layer(index).propertySpec.setSpatialTangentsAtKey(keyIndex, inTangent[, outTangent])

### Description

Assigns the incoming and outgoing tangent vectors on the keyframe you specify. An exception fires if the property value type is neither `TwoD_SPATIAL` nor `ThreeD_SPATIAL`.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer | The index for the keyframe, in the range [1..numKeys], as returned by the addKey or nearestKeyIndex. |
| inTangent | An array of 2 or 3 floating-point values. | The incoming tangent vector. - If the property value type is PropertyValueType.`TwoD_SPATIAL`, the array contains 2 values. - If the property value type is PropertyValueType.`ThreeD_SPATIAL`, the array contains 3 values. |
| outTangent | An array of 2 or 3 floating-point values. | Optional. The outgoing tangent vector. If not supplied, the out tangent is set to the inTangent value. - If the property value type is PropertyValueType.`TwoD_SPATIAL`, the array contains 2 values. - If the property value type is PropertyValueType.`ThreeD_SPATIAL`, the array contains 3 values. |

### Returns

Nothing.
