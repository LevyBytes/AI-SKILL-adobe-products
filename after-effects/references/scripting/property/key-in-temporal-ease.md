# Property.keyInTemporalEase()

app.project.item(index).layer(index).propertySpec.keyInTemporalEase(keyIndex)

### Description

Hands back the incoming temporal ease for the keyframe you name.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Array of KeyframeEase objects:

- If the property value type is PropertyValueType.TwoD, the array contains 2 objects.
- If the property value type is PropertyValueType.ThreeD, the array contains 3 objects.
- For any other value type, the array contains 1 object.
