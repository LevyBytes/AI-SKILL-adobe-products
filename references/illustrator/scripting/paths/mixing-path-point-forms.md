# Mixing path point forms

Below, the script constructs a three-point path:

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set myDoc = appRef.ActiveDocument
Set myLine = myDoc.PathItems.Add
    myLine.Stroked = True
    myLine.SetEntirePath( Array( Array(320, 475), Array(375, 300)))

' Append another point to the line
Set newPoint = myLine.PathPoints.Add
    'Using identical coordinates creates a straight segment
    newPoint.Anchor = Array(220, 300)
    newPoint.LeftDirection = Array(220, 300)
    newPoint.RightDirection = Array(220, 300)
```
