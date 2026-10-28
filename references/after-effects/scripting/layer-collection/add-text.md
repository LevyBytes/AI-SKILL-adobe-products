# LayerCollection.addText()

app.project.item(index).layers.addText([sourceText])

### Description

Generates a point text layer whose TextDocument.lineOrientation is LineOrientation.HORIZONTAL, then adds the resulting TextLayer object to this collection. For a paragraph (box) text layer instead, call LayerCollection.addBoxText().

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sourceText | String | Optional. The source text of the new layer, or a TextDocument object containing the source text of the new layer. |

### Returns

TextLayer object.
