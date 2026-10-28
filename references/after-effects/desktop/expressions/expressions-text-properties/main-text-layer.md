# Main text layer

Get text properties from “Text Layer 1” but override Font Size and Fill Color

To style several Text layers from a single controller font, wire those layers to one master. Make two Text layers, then drop this expression into the Source Text of either one:

```javascript
// To get all text properties from a text layer

thisComp.layer("Text Layer 1").text.sourceText.style;
```

You can pull a Text layer's style and still replace individual properties by feeding values through the set functions. The two snippets below demonstrate this with Fill Color and Font Size.

```javascript
// To get all text properties from "Text Layer 1" but override Fill Color and Font Size with hardcoded values

var newStyle = thisComp.layer("Text Layer 1").text.sourceText.style;

newStyle.setFillColor(hexToRgb("FF0000")).setFontSize(100);
```

```javascript
// To get all text properties from "Text Layer 1" but override Fill Color and Font Size with the layer’s current text properties

var newStyle = thisComp.layer("Text Layer 1").text.sourceText.style;

var currentFillColor = thisProperty.style.fillColor;

var currentFontSize = thisProperty.style.fontSize;

newStyle.setFillColor(currentFillColor).setFontSize(currentFontSize);
```

## Examples

What follows are sample expressions showing how text property values can be read and applied.
