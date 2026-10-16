# Using path point objects

Each path point object needs three values.

- A fixed anchor point, the point located on the path.
- Two direction points, left direction and right direction, used to shape the curve of the adjoining path segment.

Each property is supplied as an array of page coordinates in [x, y] form:

- A straight-line segment results when the three properties on a path point object share identical coordinates and the matching properties on the next path point in the line also match one another.
- A curved segment is formed when at least two properties in a path point object use different values.

For object-based path construction, or for adding points to an existing path, first create a path item object and then add the path points as its children:

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
-- set stroked to true so we can see the path
set lineRef to make new path item in docRef with properties {stroked:true}
    --giving the direction points the same value as the
    --anchor point creates a straight line segment
set newPoint to make new path point of lineRef with properties
    {anchor:{220, 475},left direction:{220, 475},right direction:{220, 475}, point type:corner}

set newPoint2 to make new path point of lineRef with properties
    {anchor:{375, 300},left direction:{375, 300},right direction:{375, 300}, point type:corner}

    --giving the direction points the different values
    --creates a curve
set newPoint3 to make new path point of lineRef with properties
    {anchor:{220, 300},left direction:{180, 260},right direction:{240, 320}, point type:corner}

end tell
```

### Using path point objects

A pathPoint object needs three point values.

- A fixed anchor point, which lies on the path.
- Two direction points, left direction and right direction, that shape the curve for the path segment.

Each property is expressed as page coordinates in the [x, y] array format:

- When all three properties on a pathPoint object share identical coordinates, and the next pathPoint's properties also match one another, the resulting segment is straight.
- When at least two properties in a pathPoint object differ, the segment attached to that point becomes curved.

To make a path, or to append points to an existing path, with pathPoint objects, create a pathItem object and then add the path points beneath that pathItem as child objects:

```javascript
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();

//set stroked to true so we can see the path
myLine.stroked = true;

var newPoint = myLine.pathPoints.add();
newPoint.anchor = [220, 475];
//giving the direction points the same value as the
//anchor point creates a straight line segment
newPoint.leftDirection = newPoint.anchor;
newPoint.rightDirection = newPoint.anchor;
newPoint.pointType = PointType.CORNER;

var newPoint1 = myLine.pathPoints.add();
newPoint1.anchor = [375, 300];
newPoint1.leftDirection = newPoint1.anchor;
newPoint1.rightDirection = newPoint1.anchor;
newPoint1.pointType = PointType.CORNER;

var newPoint2 = myLine.pathPoints.add();
newPoint2.anchor = [220, 300];
//giving the direction points different values
//than the anchor point creates a curve
newPoint2.leftDirection =[180, 260];
newPoint2.rightDirection = [240, 320];
newPoint2.pointType = PointType.CORNER;
```
