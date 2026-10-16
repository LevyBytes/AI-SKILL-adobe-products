# LayerCollection.addVerticalText()

app.project.item(index).layers.addVerticalText([sourceText])

Note

This functionality was added in After Effects 24.2

### Description

Generates a point text layer whose TextDocument.lineOrientation is set to LineOrientation.`VERTICAL_RIGHT_TO_LEFT`, then adds the resulting TextLayer object to this collection. For a paragraph (box) text layer instead, use the LayerCollection.addBoxText() or LayerCollection.addVerticalBoxText() methods.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceText | String | Optional. The source text of the new layer, or a TextDocument object containing the source text of the new layer. |

### Returns

TextLayer object.
