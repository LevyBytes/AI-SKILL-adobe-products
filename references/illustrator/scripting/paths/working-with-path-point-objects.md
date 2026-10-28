# Working with PathPoint objects

Each PathPoint object needs three point values:

- A fixed anchor point, which is the point located on the path.
- Two direction points, left direction and right direction, which shape the curve of the adjacent path segment.

Set each property to an array of page coordinates using the format (Array (x,y)):

- A straight-line segment is produced when all three properties on one PathPoint object share identical coordinates and the corresponding properties on the next PathPoint in the line also match each other.
- When a PathPoint object contains two or more different coordinate values, the segment attached to that point becomes curved.

To make a path from PathPoint objects, or to append points to a path that already exists, create a PathItem object and then add the path points beneath that PathItem as child objects.

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Set firstPath = appRef.ActiveDocument.PathItems.Add
    firstPath.Stroked = true
Set newPoint = firstPath.PathPoints.Add
'Using identical coordinates creates a straight segment
newPoint.Anchor = Array(75, 300)
newPoint.LeftDirection = Array(75, 300)
newPoint.RightDirection = Array(75, 300)

Set newPoint2 = firstPath.PathPoints.Add
newPoint2.Anchor = Array(175, 250)
newPoint2.LeftDirection = Array(175, 250)
newPoint2.RightDirection = Array(175, 250)

Set newPoint3 = firstPath.PathPoints.Add
'Using different coordinates creates a curve
newPoint3.Anchor = Array(275, 290)
newPoint3.LeftDirection = Array(135, 150)
newPoint3.RightDirection = Array(155, 150)
```
