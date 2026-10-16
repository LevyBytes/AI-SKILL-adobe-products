# Property.setLabelAtKey()

app.project.item(index).layer(index).propertySpec.setLabelAtKey(keyIndex, labelIndex)

Note

This functionality was added in After Effects 22.6 (2022)

### Description

Assigns the keyframe's label color, identified by its number — 0 stands for None, while 1 through 16 each map to one of the preset colors defined in the Labels preferences.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |
| labelIndex | Integer, in the range [0..16] | The index for the new label value. |

### Returns

Nothing.
