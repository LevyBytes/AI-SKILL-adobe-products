# Gradient stop color change example

```javascript
// Creates a new RGB document, then changes the color of the first gradient stop of an indexed gradient
app.documents.add(DocumentColorSpace.RGB);

// Get a reference to the gradient that you want to change
var gradientRef = app.activeDocument.gradients[1];

// Create the new color
var startColor = new RGBColor();
startColor.red = 255;
startColor.green = 238;
startColor.blue = 98;

// apply new color to the first gradient stop
gradientRef.gradientStops[0].color = startColor;
```
