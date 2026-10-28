# drawImage()

controlObj.graphics.drawImage(image, left, top[, width, height])

### Description

Renders an image inside the specified rectangular region, using the image file from the supplied image object that matches the control's current state.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| image | ScriptUIImage object | ScriptUIImage object containing the images to draw. |
| left, top | Number | Defines the drawing region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Optional. Pixel width and height for the drawing region. If supplied, the image is scaled into that rectangle. If omitted, drawing uses the image's original width or height. |

### Returns

Nothing
