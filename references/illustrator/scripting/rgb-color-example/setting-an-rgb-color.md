# Setting an RGB color

```javascript
// Sets the default fill color in the current document to yellow.

if (app.documents.length > 0) {
    // Define the new color
    var newRGBColor = new RGBColor();
    newRGBColor.red = 255;
    newRGBColor.green = 255;
    newRGBColor.blue = 0;

    app.activeDocument.defaultFillColor = newRGBColor;
}
```
