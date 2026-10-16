# Documents.add()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.documents.add(
    [documentColorSpace]
    [, width]
    [, height]
    [, numArtBoards]
    [, artboardLayout]
    [, artboardSpacing]
    [, artboardRowsOrCols]
)
```

### Description

Creates a document with optional arguments and returns its Document reference.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| documentColorSpace | DocumentColorSpace, optional | Color space of document |
| width | Number (double), optional | Width of document to add |
| height | Number (double), optional | Height of document to add |
| numArtBoards | Number (long), optional | Number of artboards to create |
| artboardLayout | DocumentArtboardLayout, optional | Artboard layout |
| artboardSpacing | Number, optional | Number of pixels for spacing |
| artboardRowsOrCols | Integer, optional | Number of rows or columns |

### Returns

Document
