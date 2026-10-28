# New gradient stop example

```javascript
// Adds a new gradient stop to a gradient, color of new stop is 70% gray
if (app.documents.length > 0 && app.activeDocument.gradients.length > 0) {
    // Get a reference to the gradient to change
    var changeGradient = app.activeDocument.gradients[0];

    // Get a reference to the last gradient stop
    var origCount = changeGradient.gradientStops.length;
    var lastStop = changeGradient.gradientStops[origCount - 1];

    // add the new gradient stop
    var newStop = changeGradient.gradientStops.add();

    // Set the values of the new gradient stop.
    // Move the original last gradient stop a bit to the left and insert the new gradient stop at the old position
    newStop.rampPoint = lastStop.rampPoint;
    lastStop.rampPoint = lastStop.rampPoint - 10;

    // Create a new color to apply to the newly created gradient stop
    var newStopColor = new GrayColor();
    newStopColor.gray = 70.0;
    newStop.color = newStopColor;
}
```
