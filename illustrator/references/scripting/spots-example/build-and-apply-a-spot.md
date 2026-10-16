# Build and apply a spot

```javascript
// Defines and applies a new spot color in the current document,
// then applies the color to the first path item
if (app.documents.length > 0 && app.activeDocument.pathItems.length > 0) {
    // Define the new color value
    var newRGBColor = new RGBColor();
    newRGBColor.red = 255;
    newRGBColor.green = 0;
    newRGBColor.blue = 0;

    // Create the new spot
    var newSpot = app.activeDocument.spots.add();

    // Define the new SpotColor as 80% of the RGB color
    newSpot.name = "Scripted Red spot";
    newSpot.tint = 80;
    newSpot.color = newRGBColor;

    // Apply a 50% tint of the new spot color to the frontmost path item.
    // Create a spotcolor object, set the tint value,
    var newSpotColor = new SpotColor();
    newSpotColor.spot = newSpot;
    newSpotColor.tint = 50;

    // Use the spot color to set the fill color
    var frontPath = app.activeDocument.pathItems[0];
    frontPath.filled = true;
    frontPath.fillColor = newSpotColor;
}
```
