# Property.setTemporalEaseAtKey()

app.project.item(index).layer(index).propertySpec.setTemporalEaseAtKey(keyIndex, inTemporalEase[, outTemporalEase])

### Description

Assigns the incoming and outgoing temporal ease on the keyframe you specify. Refer to the KeyframeEase object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer | The index for the keyframe, in the range [1..numKeys], as returned by the addKey or nearestKeyIndex. |
| inTemporalEase | An array of 1, 2, or 3 KeyframeEase objects | The incoming temporal ease. - If the property value type is PropertyValueType.TwoD, the array contains 2 objects. - If the property value type is PropertyValueType.ThreeD, the array contains 3 objects. - For all other value types, the array contains 1 object. |
| outTemporalEase | An array of 1, 2, or 3 KeyframeEase objects | Optional. The outgoing temporal ease. If not supplied, the outgoing ease is set to the inTemporalEase value. - If the property value type is PropertyValueType.TwoD, the array contains 2 objects. - If the property value type is PropertyValueType.ThreeD, the array contains 3 objects. - For all other value types, the array contains 1 object. |

### Returns

Nothing.
