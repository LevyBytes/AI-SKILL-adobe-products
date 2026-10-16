# Finding and examining a raster item

```javascript
// Examines the color space of the first raster item in the document and displays
// result in ESTK console
if (app.documents.length > 0 && app.activeDocument.rasterItems.length > 0) {
    var rasterArt = app.activeDocument.rasterItems[0];

    switch (rasterArt.imageColorSpace) {
        case ImageColorSpace.CMYK:
            $.writeln("The color space of the first raster item is CMYK");
            break;

        case ImageColorSpace.RGB:
            $.writeln("The color space of the first raster item is RGB");
            break;

        case ImageColorSpace.GRAYSCALE:
            $.writeln("The color space of the first raster item is GRAYSCALE");
            break;
    }
}
```
