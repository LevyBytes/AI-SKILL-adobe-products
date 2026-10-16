# Setting a CMYK color

```javascript
// Sets the fill color of the frontmost path item in
// the current document to a light purple CMYK color

if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    var frontPath = app.activeDocument.pathItems[0];

    // Set color values for the CMYK object
    var newCMYKColor = new cmykColor();
    newCMYKColor.black = 0;
    newCMYKColor.cyan = 30.4;
    newCMYKColor.magenta = 32;
    newCMYKColor.yellow = 0;

    // Use the color object in the path item
    frontPath.filled = true;
    frontPath.fillColor = newCMYKColor;
}
```
