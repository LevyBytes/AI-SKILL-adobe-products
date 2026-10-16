# Applying attributes to words

```javascript
// Creates a new magenta color and applies the color to all words meeting a specific criteria
if (app.documents.length > 0 && app.activeDocument.textFrames.length > 0) {
    // Create the color to apply to the words
    var wordColor = new RGBColor();
    wordColor.red = 255;
    wordColor.green = 0;
    wordColor.blue = 255;

    // Set the value of the word to look for searchWord1 = "the";
    var searchWord2 = "The";
    var searchWord3 = "THE";

    // Iterate through all words in the document
    // and color the words that match searchWord

    for (var i = 0; i < app.activeDocument.textFrames.length; i++) {
        var textArt = activeDocument.textFrames[i];

        for (var j = 0; j < textArt.words.length; j++) {
            var word = textArt.words[j];

            if (word.contents == searchWord1 || word.contents == searchWord2 || word.contents == searchWord3) {
                word.filled = true;
                word.fillColor = wordColor;
            }
        }
    }
}
```
