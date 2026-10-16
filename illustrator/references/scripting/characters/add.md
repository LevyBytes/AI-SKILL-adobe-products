# Characters.add()

app.activeDocument.textFrames[index].contents.add(contents[,relativeObject][,insertionLocation])

### Description

Adds one new character with the supplied text at the requested place in the current document.

Without an explicit location, insertion happens after the active selection or insertion point inside the containing text frame.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Text contents to add |
| relativeObject | TextFrameItem, optional | Object to add item to |
| insertionLocation | ElementPlacement, optional | Location to place text |

### Returns

TextRange
