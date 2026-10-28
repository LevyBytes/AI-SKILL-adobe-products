# drawFocusRing()

controlObj.graphics.drawFocusRing(left, top[, width, height])

### Description

Renders a focus ring inside the specified rectangular region. This visual marker shows that a control has keyboard focus and accepts keyboard input.

On Mac OS, this is usually a light blue ring around the control.

On Windows, the indicator is usually a dashed-line rectangle around a portion of the control.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| left, top | Number | Defines the region's top left corner in the owning control's local coordinate system. |
| width, height | Number | Optional. Pixel width and height for the region. |

### Returns

Nothing
