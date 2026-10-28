# strokeColor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | C | color | R/W |

Controls the annotation’s drawn color, expressed as a transparent, gray, RGB, or CMYK value. With a free text annotation, this same property colors both the border and the text. Refer to Color arrays for how these arrays are built and consumed by the property.

Annotations: All

Example: Make a text note red.

```javascript
var annot = this.addAnnot({type: "Text"});
annot.strokeColor = color.red;
```
