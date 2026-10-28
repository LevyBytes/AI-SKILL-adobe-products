# points

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | C | array | R/W |

A pair of points, [[x 1 , y 1 ], [ x 2 , y 2]], that fixes where the line begins and ends in default user space.

Annotations: Line

Example: Stroke a line joining the two points you give.

```javascript
var annot = this.addAnnot({
    type: "Line",
    page: 0,
    author: "A. C. Robat",
    doCaption: true,
    contents: "Look at this again!",
    points: [[10,40],[200,200]],
});
```

See the arrowBegin and arrowEnd properties, the setProps method, and the Doc object addAnnot method.
