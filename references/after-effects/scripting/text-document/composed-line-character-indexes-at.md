# TextDocument.composedLineCharacterIndexesAt()

textDocument.composedLineCharacterIndexesAt(characterIndex)

Note

This functionality was added in After Effects 24.3

### Description

Hands back the character-index bounds of a ComposedLineRange object within the Text layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| characterIndex | Unsigned integer | A text index in the Text layer, which will be mapped to the composed line it intersects. |

### Returns

Generic object; its start key is set to the text index where the composed line begins (at least zero). Its end key is set to the text index where the composed line ends (above start, or equal to start on the final composed line).

An exception is raised when the computed start and end fall beyond the current TextDocument object. Keep in mind that composed lines are static, so later edits to the TextDocument object instance that alter its length can leave the composed-line data stale.
