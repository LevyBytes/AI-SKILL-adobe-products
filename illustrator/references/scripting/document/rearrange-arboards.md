# Document.rearrangeArboards()

app.activeDocument.rearrangeArboards([artboardLayout] [, artboardRowsOrCols] [, artboardSpacing] [, artboardMoveArtwork])

### Description

Reorders document artboards. Every argument can be omitted.

For layout style, the default is DocumentArtboard Layout.GridByRow.

For the chosen layout style, the second argument supplies a row or column count. Valid values are 1..docNumArtboards-1; single row/column layouts use 1 by default.

Spacing is measured in pixels and defaults to 20.

When the final argument is true, which is the default, artboards move together with their artwork.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| artboardLayout | DocumentArtboardLayout, optional | Artboard layout |
| artboardRowsOrCols | Integer, optional | Number of rows or columns |
| artboardSpacing | Number, optional | Number of pixels for spacing |
| artboardMoveArtwork | Boolean, optional | Whether to move artwork with the artboards |

### Returns

Boolean.
