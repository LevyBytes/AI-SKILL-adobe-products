# measureString()

controlObj.graphics.measureString(text, font[, boundingWidth])

### Description

Computes the space needed to draw a text string in the specified font.

Returns a Dimension object object containing the string height and width in pixels.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | Text | Text string to measure. |
| font | ScriptUIFont object | Optional. ScriptUIFont object specifying the font. The default is this object's font value. |
| boundingWidth | Number | Optional. Maximum placement-area width in pixels for the text. Use it when wrapping a long text string over several lines. |

### Returns

Dimension object
