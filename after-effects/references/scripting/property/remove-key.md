# Property.removeKey()

app.project.item(index).layer(index).propertySpec.removeKey(keyIndex)

### Description

Deletes the keyframe you specify from the property. When no keyframe carries that index, an exception is thrown and an error shown. Each removal renumbers the keyframes that remain, so when deleting several you must begin at the largest index and descend to the smallest — that way every remaining index still points at the same keyframe after each deletion.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Nothing.
