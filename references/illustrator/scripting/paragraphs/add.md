# Paragraphs.add()

app.activeDocument.textFrames[index].paragraphs.add(contents [,relativeObject] [,insertionLocation])

### Description

Creates a paragraph containing the supplied text at the requested position in the current document. When no location is supplied, the containing text frame receives it after the active selection or caret position.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Text contents to add |
| relativeObject | TextFrameItem, optional | Object to add item to |
| insertionLocation | ElementPlacement, optional | Location to place text |

### Returns

TextRange
