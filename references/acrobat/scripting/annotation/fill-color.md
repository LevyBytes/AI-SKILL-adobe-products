# fillColor

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | C | color | R/W |

Establishes the fill color behind circle, square, line, polygon, polyline, and free text annotations. You express the value as transparent, gray, RGB, or CMYK color. Color arrays explains how to build these arrays and how this property consumes their values.

Annotations: Circle, Square, Line, Polygon, PolyLine, FreeText

Example: Make a Circle annotation, then give it a fill behind.

```javascript
var annot = this.addAnnot(
{
    type: "Circle",
    page: 0,
    rect: [200,200,400,300],
    author: "A. C. Robat",
    name: "myCircle",
    popupOpen: true,
    popupRect: [200,100,400,200],
    contents: "Hi World!",
    strokeColor: color.red,
    fillColor: ["RGB",1,1,.855]
});
```
