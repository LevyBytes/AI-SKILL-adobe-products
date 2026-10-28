# TextDocument.characterRange()

textDocument.characterRange(characterStart, [signedCharacterEnd])

Note

This functionality was added in After Effects 24.3

### Description

Hands back a CharacterRange range-accessor instance for the Text layer.

The constructor arguments are retained on the instance and never change; if the TextDocument length shifts, the instance may raise exceptions on access until that length returns to one where the range is valid once more.

Call toString() to see the parameters it was built with.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| characterStart | Unsigned integer | Starts at zero, must be the less than or equal to the (text) length of the TextDocument object. |
| signedCharacterEnd | Signed integer. | Optional. When omitted, it resolves to (characterStart + 1). A value of -1 makes the CharacterRange object resolve it on access to match the (text) length of the TextDocument object. signedCharacterEnd has to be at least characterStart and no greater than the (text) length of the TextDocument object. |

Throws an exception if the parameters would result in an invalid range.

There is no way to build a CharacterRange object that reaches across the closing carriage return of the TextDocument object.

### Returns

An instance of CharacterRange object
