# ParagraphRange object

app.project.item(index).layer(index).text.sourceText.value.paragraphRange(paragraphIndexStart, [signedParagraphIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Serving as an accessor onto a paragraph range, the ParagraphRange object reaches into the particular TextDocument object instance it was built from.

- First character index of the range is what the characterStart attribute reports.
- The characterEnd attribute reports the (last + 1) character index of the range, so that (characterEnd - characterStart) gives the count of characters within it.
- These two properties coincide only on an empty trailing paragraph of the TextDocument object.

On access, the ParagraphRange object verifies that the range's effective characterStart and effective characterEnd are still valid for the current span of the related TextDocument object. That is the very rule applied at the ParagraphRange's creation, but since the related TextDocument object can grow or shrink as characters are added or removed, the effective characterStart and effective characterEnd may cease to be valid. When that happens an exception is raised on access, whether read or write. Where the effective range is no longer valid, the isRangeValid attribute returns false.

Bear in mind that a shift in the TextDocument object's length could render the character range valid once more.

For convenience, calling ParagraphRange.characterRange() yields a CharacterRange object instance built from characterStart and characterEnd. That instance stands apart from the ParagraphRange instance it came from, so later changes to the ParagraphRange limits do not carry over to the CharacterRange object instance.

On performance grounds, when you mean to read several attributes it pays to fetch the CharacterRange object just once and reuse it instead of building a fresh one each time.

### Examples

This bumps up the first paragraph's font size in the TextDocument and pins every remaining paragraph to fontSize 40.

```javascript
var textDocument = app.project.item(index).layer(index).property("Source Text").value;

var paragraphRange0 = textDocument.paragraphRange(0,1);
var characterRange0 = paragraphRange0.characterRange();
characterRange0.fontSize = characterRange0.fontSize + 5;

textDocument.paragraphRange(1,-1).characterRange().fontSize = 40;
```
