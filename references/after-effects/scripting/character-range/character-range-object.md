# CharacterRange object

app.project.item(index).layer(index).text.sourceText.value.characterRange(characterIndexStart, [signedCharacterIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Acting as an accessor into the TextDocument object instance that spawned it, the CharacterRange object addresses a range of characters within that document.

Whereas the TextDocument object reports character attributes from the first character alone, a character range may cover zero or more characters. The upshot is that when two or more characters disagree on an attribute, that mixed state is reported back as undefined.

- The characterStart attribute is the first character index of the range.
- The characterEnd attribue will report the (last + 1) character index of the range, such that (characterEnd - characterStart) represents the number of characters in the range.

For the majority of attributes, the effective range is allowed to be zero — that is, an insertion point.

On each access, the CharacterRange object confirms that its characterStart and effective characterEnd still fit the current span of the related TextDocument object. That check follows the same rule used at creation time, but since adding or removing characters can change the related TextDocument object's length, the characterStart and effective characterEnd may stop being valid. Where that occurs, any access — read or write alike — throws an exception. When the effective range is no longer valid, the isRangeValid attribute returns false.

Keep in mind that a later change to the TextDocument object length could restore the CharacterRange object range to validity.
