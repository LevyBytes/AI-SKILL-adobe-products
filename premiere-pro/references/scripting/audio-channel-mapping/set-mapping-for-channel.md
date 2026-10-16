# AudioChannelMapping.setMappingForChannel()

app.project.rootItem.children[index].setMappingForChannel(channelIndex, sourceChannelIndex)

### Description

Assigns a source channel to the requested channel index.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| channelIndex | Integer | Channel index that will receive the mapping. |
| sourceChannelIndex | Integer | Source-channel index to map. |

### Returns

Returns true on success, or false when the mapping is unsupported.
