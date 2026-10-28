# ParagraphRange.characterRange()

ParagraphRange.characterRange()

### Description

Hands back a CharacterRange object built from the characterStart and characterEnd values.

Should isRangeValid evaluate to false, calling this raises an exception.

Once you have the returned object, it stands on its own — later edits to the originating ParagraphRange no longer affect it.

### Parameters

None.

### Returns

CharacterRange object;
