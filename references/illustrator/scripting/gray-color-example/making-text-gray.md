# Making text gray

```javascript
// Sets the color of the first word in the active document to a shade of gray

if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
    var text = app.activeDocument.textFrames[0].textRange;
    var firstWord = text.words[0];

    // Create the new color
    var textColor = new GrayColor();
    textColor.gray = 45;

    firstWord.filled = true;
    firstWord.fillColor = textColor;
}
```
