# LayerCollection.addBoxText()

app.project.item(index).layers.addBoxText([width, height])

### Description

Generates a paragraph (box) text layer whose TextDocument.lineOrientation is LineOrientation.HORIZONTAL, then drops the resulting TextLayer object into this collection. When you instead need point text, reach for the LayerCollection.addText() method.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| [width, height] | Array of floating-point values | The dimensions of the new text box. |

### Returns

TextLayer object.
