# Using insertion points to add spaces

```javascript
// Creates a new document, adds text then inserts a
// space between each character using insertion points

var docRef = documents.add();
var textRef = docRef.textFrames.add();
textRef.contents = "Wouldn't you rather be scripting?";
textRef.top = 400;
textRef.left = 100;
textRef.textRange.characterAttributes.size = 20;

redraw();

// Add a space between each character using insertion points.
var ip;
for (var i = 0; i < textRef.insertionPoints.length; i += 2) {
    ip = textRef.insertionPoints[i];
    ip.characters.add(" ");
}
```
