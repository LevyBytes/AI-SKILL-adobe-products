# Fill

Here are samples for reading a Text layer's Fill and Fill Color:

```javascript
// To return a Boolean value of whether a layer's text has Fill applied to it (True or False)
text.sourceText.style.applyFill;

// To return the value of the Fill Color of a text layer
// By default, this returns an array of the RGB values on a scale from 0 – 1.0
text.sourceText.style.fillColor;

// Set the Fill Color of a text layer with setApplyFill and setFillColor
// setFillColor values are defined as an RGB array on a scale between 0 – 1.0
var newStyle = style.setApplyFill(true);

newStyle.setFillColor([1.0, 1.0, 1.0]);

// Set the Fill Color of a text layer substituting the 0 – 1.0 RGB array with hexToRGB to define the color values with Hex values
var newStyle = style.setApplyFill(true);

newStyle.setFillColor(hexToRgb("FFFFFF"));
```
