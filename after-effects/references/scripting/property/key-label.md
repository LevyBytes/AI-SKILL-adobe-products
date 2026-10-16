# Property.keyLabel()

app.project.item(index).layer(index).propertySpec.keyLabel(keyIndex)

Note

This functionality was added in After Effects 22.6.

### Description

Gives the keyframe's label color, identified by its number — 0 stands for None, while 1 through 16 each map to one of the preset colors defined in the Labels preferences.

Read only. Use setLabelAtKey to assign keyframe color labels.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| keyIndex | Integer, in the range [1..numKeys] | The index for the keyframe, as returned by the addKey or nearestKeyIndex. |

### Returns

Integer (0 to 16); read only.
