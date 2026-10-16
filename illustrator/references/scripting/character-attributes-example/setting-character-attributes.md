# Setting character attributes

```javascript
// Creates a new document, adds a simple text item
// then incrementally increases the horizontal and
// vertical scale attributes of each character

var docRef = documents.add();
var textRef = docRef.textFrames.add();
textRef.contents = "I Love Scripting!";
textRef.top = 400;
textRef.left = 100;

// incrementally increase the scale of each character
var charCount = textRef.textRange.characters.length;
var size = 100;
for (var i = 0; i < charCount; i++, size *= 1.2) {
    textRef.textRange.characters[i].characterAttributes.horizontalScale = size;
    textRef.textRange.characters[i].characterAttributes.verticalScale = size;
}
```
