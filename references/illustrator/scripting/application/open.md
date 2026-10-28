# Application.open()

app.open(file[, documentColorSpace][, options])

### Description

Opens the requested document file.

Note

When a pre-Illustrator 9 document contains both RGB and CMYK colors and `documentColorSpace` is provided, Illustrator converts every color to that chosen color space.

When that parameter is omitted, Illustrator displays a dialog that lets the user choose the color space.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| file | File object | Document file to open |
| documentColorSpace | DocumentColorSpace, optional | Color space for the document |
| options | anything | todo |

### Returns

Document
