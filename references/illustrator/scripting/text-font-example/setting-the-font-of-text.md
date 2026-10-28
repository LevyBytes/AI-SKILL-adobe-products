# Setting the font of text

```javascript
// Sets the font of all the text in the document to the first font
if ( app.documents.length > 0 ) {

// Iterate through all text art and apply font 0
    for ( i = 0; i< app.activeDocument.textFrames.length; i++) {
        textArtRange = app.activeDocument.textFrames[i].textRange;
        textArtRange.characterAttributes.textFont = app.textFonts[0];
    }
}
```
