# Property.setSelectedAtKey()

app.project.item(index).layer(index).propertySpec.setSelectedAtKey(keyIndex, onOff)

### Description

Selects the keyframe you specify, or clears its selection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| onOff | Boolean | true to select the keyframe, false to deselect it. |

### Returns

Nothing.
