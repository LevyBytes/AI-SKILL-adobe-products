# ComposedLineRange object

app.project.item(index).layer(index).text.sourceText.value.composedLineRange(composedLineIndexStart, [signedComposedLineIndexEnd])

Note

This functionality was added in After Effects 24.3

### Description

Acting as an accessor into the TextDocument object instance that spawned it, the ComposedLineRange object addresses a range of composed lines within that document.

A TextDocument object's composed lines are set up when the object is created and stay put as the object is edited. Worth stressing: the TextDocument object instance is not recomposed as you alter it — recomposition happens only when the instance is reapplied to a TextLayer object. So even deleting all the text in a TextDocument object instance leaves the composed-line count where it was.

- The characterStart attribute will report the first character index of the range.
- The characterEnd attribute will report the (last + 1) character index of the range, such that (characterEnd - characterStart) represents the number of characters in the range.
- A composed line always has some length.

On each access, the ComposedLineRange object confirms that its effective characterStart and effective characterEnd still fit the current span of the related TextDocument object. That check follows the same rule used at creation time, but since adding or removing characters can change the related TextDocument object's length, the effective characterStart and effective characterEnd may stop being valid. Where that occurs, any access — read or write alike — throws an exception. When the effective range is no longer valid, the property isRangeValid returns false.

Keep in mind that a later change to the TextDocument object length could restore the character range to validity.

For convenience, calling ComposedLineRange.characterRange() returns a CharacterRange object instance built from characterStart and characterEnd. That instance stands apart from the ComposedLineRange instance it derived from, so any later shift in the ComposedLineRange limits is not relayed to the CharacterRange object instance.

To keep things fast when reading several attributes, it pays to fetch the CharacterRange object a single time and reuse it rather than creating a fresh one on each pass.

### Examples

The snippet below recolors the TextDocument's first composed line to red and sets all the remaining lines to blue.

```javascript
var textDocument = app.project.item(index).layer(index).property("Source Text").value;

var composedLineRange0 = textDocument.composedLineRange(0,1);
var characterRange0 = composedLineRange0.characterRange();
characterRange0.fillColor = [1.0, 0, 0];

textDocument.composedLineRange(1,-1).characterRange().fillColor = [0, 0, 1.0];
```
