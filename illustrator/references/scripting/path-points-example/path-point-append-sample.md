# PathPoint append sample

```javascript
// Appends a new PathPoint to an existing path
// and initializes its anchor and handle points.
if (app.documents.length > 0) {
    var doc = app.activeDocument;

    var line = doc.pathItems.add();
    line.stroked = true;
    line.setEntirePath(Array(Array(220, 475), Array(375, 300)));

    // Append another point to the line
    var newPoint = doc.pathItems[0].pathPoints.add();
    newPoint.anchor = Array(220, 300);
    newPoint.leftDirection = newPoint.anchor;
    newPoint.rightDirection = newPoint.anchor;
    newPoint.pointType = PointType.CORNER;
}
```
