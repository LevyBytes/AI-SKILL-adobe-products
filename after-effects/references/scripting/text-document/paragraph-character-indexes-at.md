# TextDocument.paragraphCharacterIndexesAt()

textDocument.paragraphCharacterIndexesAt(characterIndex)

Note

This functionality was added in After Effects 24.3

### Description

Hands back the character-index bounds of a paragraph within the Text layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| characterIndex | Unsigned integer | A text index in the Text layer, which will be mapped to the paragraph it intersects. |

### Returns

Generic object; its start key is set to the text index where the paragraph begins (at least zero). Its end key is set to the text index where the paragraph ends (above start, or equal to start on the final paragraph).
