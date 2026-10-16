# ellipsePath()

controlObj.graphics.ellipsePath(left, top[, width, height])

### Description

In currentPath, defines an elliptical path inside the specified rectangular area; fillPath() can fill it, and strokePath() can stroke it.

Returns a Point object for the upper-left area corner; that point becomes currentPoint.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| left, top | Number | Defines the region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Pixel width and height for the region. |

### Returns

Point object
