# Stroke

Below are samples for reading a Text layer's Stroke, Stroke Color, and Stroke Width:

```javascript
// To return a Boolean value of whether a layer's text has Stroke applied to it (True or False)
text.sourceText.style.applyStroke;

// To return the value of the Stroke Color of a text layer
// By default, this returns an array of the RGB values on a scale from 0 – 1.0
text.sourceText.style.strokeColor;

// Set the Stroke Color of a text layer with setApplyStroke and setStrokeColor
// setStrokeColor values are defined as an RGB array on a scale between 0 – 1.0
var newStyle = style.setApplyStroke(true);

newStyle.setStrokeColor([1.0, 0.0, 0.0]);

// Set the Stroke Color of a text layer substituting the 0 – 1.0 RGB array with hexToRGB to define the color values with Hex values
var newStyle = style.setApplyStroke(true);

newStyle.setStrokeColor(hexToRgb("FF0000"));

// To return the value of a text layer's Stroke Width as a number
text.sourceText.style.strokeWidth;
```
