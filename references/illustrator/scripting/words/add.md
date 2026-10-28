# Words.add()

app.activeDocument.textFrames[index].words.add(contents[, relativeObject][, inseertLocation])

### Description

Places a word in the current document at the requested position.

When no position is supplied, Illustrator inserts the word in the containing text frame after the active word range or cursor point.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| contents | String | Word being added |
| relativeObject | TextFrameItem, optional | Target object that receives the new item |
| insertionLocation | ElementPlacement, optional | Text insertion position |

### Returns

TextRange
