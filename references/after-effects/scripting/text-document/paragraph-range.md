# TextDocument.paragraphRange()

textDocument.paragraphRange(paragraphIndexStart, [signedParagraphIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Hands back a ParagraphRange range-accessor instance for the Text layer.

The constructor arguments are retained on the instance and never change; if the TextDocument contents shift, the instance may raise exceptions on access until those contents return to a state where the range is valid once more.

Call ParagraphRange.toString() to see the parameters it was built with.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| paragraphIndexStart | Unsigned integer | Starts at zero, must be the less than the number of paragraphs in the TextDocument object. |
| signedParagraphIndexEnd | Signed integer | Optional. When omitted, it resolves to (paragraphIndexStart + 1). A value of -1 makes the ParagraphRange object resolve it on access to the final paragraph of the TextDocument object. signedParagraphIndexEnd has to exceed paragraphIndexStart and be no greater than the number of paragraphs in the TextDocument object. |

Throws an exception if the parameters would result in an invalid range.

### Returns

An instance of ParagraphRange object
