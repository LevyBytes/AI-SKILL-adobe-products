# AVLayer.sourceRectAtTime()

app.project.item(index).layer(index).sourceRectAtTime(timeT, extents)

### Description

Fetches the layer's bounding rectangle at the time index you give, adjusted for the contents of a text or shape layer. One use, for instance, is writing text that lines up neatly with the baseline.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timeT | Floating-point value | The time index, in seconds. |
| extents | Boolean | true to include the extents, otherwise false. Extents apply to shape layers, increasing the size of the layer bounds as necessary. |

### Returns

A JavaScript object with four attributes, [top, left, width, height].
