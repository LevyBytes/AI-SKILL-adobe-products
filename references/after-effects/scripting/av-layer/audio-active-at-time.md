# AVLayer.audioActiveAtTime()

app.project.item(index).layer(index).audioActiveAtTime(time)

### Description

Yields true if this layer's audio is going to play at the moment you specify.

A true result requires audioEnabled to be true, no other audio layer to be soloing (unless this layer is also soloed), and the given time to sit between this layer's inPoint and outPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time, in seconds. |

### Returns

Boolean.
