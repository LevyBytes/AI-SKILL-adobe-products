# Property.setInterpolationTypeAtKey()

app.project.item(index).layer(index).propertySpec.setInterpolationTypeAtKey(keyIndex, inType[, outType])

### Description

Assigns both the in and out interpolation types on the keyframe you specify.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer | The index for the keyframe, in the range [1..numKeys], as returned by the addKey or nearestKeyIndex. |
| inType | KeyframeInterpolationType enum. | The incoming interpolation type. One of: - KeyframeInterpolationType.LINEAR - KeyframeInterpolationType.BEZIER - KeyframeInterpolationType.HOLD |
| outType | KeyframeInterpolationType enum. | Optional. The outgoing interpolation type. If not supplied, the 'out' type is set to the inType value. One of: - KeyframeInterpolationType.LINEAR - KeyframeInterpolationType.BEZIER - KeyframeInterpolationType.HOLD |

### Returns

Nothing.
