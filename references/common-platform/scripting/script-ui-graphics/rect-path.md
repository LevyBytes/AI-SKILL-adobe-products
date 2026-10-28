# rectPath()

controlObj.graphics.rectPath(left, top[, width, height])

### Description

In currentPath, defines a rectangular path that fillPath() can fill and strokePath() can stroke.

Returns a Point object for the rectangle's upper left corner, which becomes the new currentPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| left, top | Number | Defines the region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Pixel width and height for the region. |

### Returns

Point object
