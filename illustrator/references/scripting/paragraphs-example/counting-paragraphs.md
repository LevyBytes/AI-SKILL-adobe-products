# Counting paragraphs

```javascript
// Counts all paragraphs in current doc and stores result in paragraphCount
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    var paragraphCount = 0;
    for (var i = 0; i < doc.textFrames.length; i++) {
        paragraphCount += doc.textFrames[i].paragraphs.length;
    }
}
```
