# Property.keyValue()

app.project.item(index).layer(index).propertySpec.keyValue(keyIndex)

app.project.item(index).layer(index).propertySpec.keyValue(markerComment)

### Description

Locates the keyframe or marker you specify and returns its present value. When nothing matches the argument you pass, the method throws an exception and an error appears.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| markerComment | String | The comment attached to a marker (see MarkerValue.comment attribute). |

### Returns

Returns the value of the type corresponding to the PropertyValueType.
