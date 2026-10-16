# Combining path point types

This sample builds a three-point path by mixing the entire path property with an object-defined point.

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
-- set stroked to true so we can see the path
set lineRef to make new path item in docRef with properties {stroked:true}
set entire path of lineRef to { {220, 475},{375, 300} }
set newPoint to make new path point of lineRef with properties
    {anchor:{220, 300},left direction:{180, 260},right direction:{240, 320}, point type:corner}
end tell
```

Build a line or freeform path by supplying path points, either as x-y coordinate pairs or as path point objects.

Coordinate pairs alone produce straight path segments. Curves require pathPoint objects. A single path may mix page-coordinate pairs with pathPoint objects.

### Combining path point types

This sample script constructs a path with three vertices:

```javascript
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();
myLine.stroked = true;
myLine.setEntirePath( [[220, 475], [375, 300]]);

// Append another point to the line
var newPoint = myLine.pathPoints.add();
newPoint.anchor = [220, 300];
newPoint.leftDirection = newPoint.anchor;
newPoint.rightDirection = newPoint.anchor;
newPoint.pointType = PointType.CORNER;
```

A line or freeform path is built by supplying path points, either as x-y coordinate pairs or as PathPoint objects.

When you supply only x-y coordinates, Illustrator creates straight path segments. Curves require PathPoint objects instead. One path may mix page-coordinate pairs with PathPoint objects.
