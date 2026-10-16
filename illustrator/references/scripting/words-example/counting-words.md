# Counting words

```javascript
// Counts all words in current document and stores total in numWords
if ( app.documents.length > 0 ) {
    var numWords = 0;

    for ( i = 0; i < app.activeDocument.textFrames.length; i++) {
        numWords += app.activeDocument.textFrames[i].words.length;
    }
}
```
