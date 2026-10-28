# Providing x-y coordinate pairs

For a path described by page-coordinate pairs, set the entire path property on the PathItems object. This script uses three x-y coordinate pairs to build a three-point path:

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Set firstPath = appRef.ActiveDocument.PathItems.Add
    firstPath.Stroked = True
firstPath.SetEntirePath(Array(Array(220, 475),Array(375, 300),Array(200, 300)))
```
