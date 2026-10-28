# CharacterRange.pasteFrom()

CharacterRange.pasteFrom(characterRange)

Note

This functionality was added in After Effects 25.1

### Description

Using paste semantics, brings content over from the characterRange parameter into the callee CharacterRange object. Both can be one and the same instance, and their spans need not match.

A check confirms that both CharacterRange object instances are valid.

Under the hood the operation runs in these steps:

- Delete the text from the target instance.
- Paste the text from the source instance.

Because the call leaves the CharacterRange object's span untouched, a source CharacterRange object instance whose span is shorter than the target's can leave the target instance invalid.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| characterRange | CharacterRange object | Object whose text and styling will be pasted in place of the callee CharacterRange object. |

### Returns

None.
