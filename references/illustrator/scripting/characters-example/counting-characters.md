# Counting characters

```javascript
// Counts all characters in the active document,
// including whitespace, and stores in numChars

if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var numChars = 0;
    for (var i = 0; i < doc.textFrames.length; i++) {
        var textArtRange = doc.textFrames[i].contents;
        numChars += textArtRange.length;
    }
}
```
