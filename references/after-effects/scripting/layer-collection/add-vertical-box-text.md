# LayerCollection.addVerticalBoxText()

app.project.item(index).layers.addVerticalBoxText([width, height])

Note

This functionality was added in After Effects 24.2

### Description

Generates a paragraph (box) text layer whose TextDocument.lineOrientation is set to LineOrientation.`VERTICAL_RIGHT_TO_LEFT`, then adds the resulting TextLayer object to this collection. When point text is what you want, turn to the LayerCollection.addText() or LayerCollection.addVerticalText() methods.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| [width, height] | Array of floating-point values | The dimensions of the new text box. |

### Returns

TextLayer object.
