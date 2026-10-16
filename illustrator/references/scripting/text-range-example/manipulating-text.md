# Manipulating Text

```javascript
// Changes size of the first character of each word in the
// current document by changing the size attribute of each character

if ( app.documents.length > 0 ) {
    for ( i = 0; i < app.activeDocument.textFrames.length; i++ ) {
        var text = app.activeDocument.textFrames[i].textRange;
        for ( j = 0 ; j < text.words.length; j++ ) {
            //each word is a textRange object
            var textWord = text.words[j];

            // Characters are textRanges too.
            // Get the first character of each word and increase it's size.

            var firstChars = textWord.characters[0];
            firstChars.size = firstChars.size * 1.5;
        }
    }
}
```
