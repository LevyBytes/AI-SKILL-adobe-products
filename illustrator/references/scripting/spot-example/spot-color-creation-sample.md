# SpotColor creation sample

```javascript
// Creates a new spot color in the current document, then applies an 80% tint to the color
if ( app.documents.length > 0 ) {
    var doc = app.activeDocument;

    // Create the new spot
    var newSpot = doc.spots.add();

    // Define the new color value
    var newColor = new CMYKColor();
    newColor.cyan = 35;
    newColor.magenta = 0;
    newColor.yellow = 50;
    newColor.black = 0;

    // Define a new SpotColor with an 80% tint
    // of the new Spot's color. The spot color can then
    // be applied to an art item like any other color.
    newSpot.name = "Pea-Green";
    newSpot.colorType = ColorModel.SPOT;
    newSpot.color = newColor;

    var newSpotColor = new SpotColor();
    newSpotColor.spot = newSpot;
    newSpotColor.tint = 80;
}
```
