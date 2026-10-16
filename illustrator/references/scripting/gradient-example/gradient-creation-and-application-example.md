# Gradient creation and application example

```javascript
// Creates a new gradient in current document then applies the gradient to the frontmost path item

if (app.documents.length > 0) {
    // Create a color for both ends of the gradient
    var startColor = new RGBColor();
    startColor.red = 0;
    startColor.green = 100;
    startColor.blue = 255;

    var endColor = new RGBColor();
    endColor.red = 220;
    endColor.green = 0;
    endColor.blue = 100;

    // Create a new gradient
    // A new gradient always has 2 stops
    var newGradient = app.activeDocument.gradients.add();
    newGradient.name = "NewGradient";
    newGradient.type = GradientType.LINEAR;

    // Modify the first gradient stop
    newGradient.gradientStops[0].rampPoint = 30;
    newGradient.gradientStops[0].midPoint = 60;
    newGradient.gradientStops[0].color = startColor;

    // Modify the last gradient stop
    newGradient.gradientStops[1].rampPoint = 80;
    newGradient.gradientStops[1].color = endColor;

    // construct an Illustrator.GradientColor object referring to the newly created gradient
    var colorOfGradient = new GradientColor();
    colorOfGradient.gradient = newGradient;

    // get first path item, apply new gradient as its fill
    var topPath = app.activeDocument.pathItems[0];
    topPath.filled = true;
    topPath.fillColor = colorOfGradient;
}
```
