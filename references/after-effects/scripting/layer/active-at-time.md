# Layer.activeAtTime()

app.project.item(index).layer(index).activeAtTime(time)

### Description

Comes back true when this layer is going to be active at the time you pass.

For that to hold, the layer has to be enabled, no other layer can be soloing unless this one is soloed as well, and the time has to fall between this layer's inPoint and outPoint values.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| time | Floating-point value | The time in seconds. |

### Returns

Boolean.
