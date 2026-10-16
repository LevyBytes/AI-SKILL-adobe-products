# dash

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | C | array | R/W |

An array of dashes that lays out the pattern of strokes and gaps for drawing a dashed border. Take [3, 2]: it draws the border as 3-point dashes interleaved with 2-point gaps.

The style property has to be set to D before the dash array takes effect.

Annotations: FreeText, Line, PolyLine, Polygon, Circle, Square, Ink

Example: With annot standing in for an Annotation object, the snippet here switches its border over to a dashed one.

```javascript
annot.setProps({ style: "D", dash: [3,2] });
```

See also the example following the delay property.
