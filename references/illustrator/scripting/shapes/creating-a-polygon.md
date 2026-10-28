# Creating a polygon

Example:

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
set pathRef to make new polygon in docRef with properties
{center point:{144, 288},sides:7,radius:72.0}
end tell
```

The polygon made by the sample uses these values:

- The object center is located 2 inches (144 points) across the horizontal axis and 4 inches (288 points) along the vertical axis.
- The polygon has 7 sides.
- From the center point to each corner, the radius length is 1 inch (72 points).

Create a shape by calling the object whose name matches the shape, such as ellipse, rectangle, or polygon. Its properties define placement, dimensions, and additional details such as a polygon's side count.

Remember:

- The scripting engine interprets every measurement and page coordinate as points. For details, see Measurement Units.
- Illustrator measures x and y coordinates from the document's bottom-left corner, as shown in the Info panel. For details, see Page-item positioning and dimensions.

### Creating a polygon

Example:

```javascript
var myDocument = app.documents.add()
var artLayer = myDocument.layers.add()
var poly = artLayer.pathItems.polygon( 144, 288, 72.0, 7 );
```

The sample calls the polygon() method and creates a polygon with these characteristics:

- The object's center point is inset 2 inches (144 points) along the horizontal axis and 4 inches (288 points) along the vertical axis.
- Each corner lies 1 inch (72 points) from the center point.
- The polygon contains 7 sides.

Create a shape by calling the object whose name matches the desired shape, such as ellipse, rectangle, or polygon. Use that object's properties to set placement, dimensions, and related details, including the side count for a polygon.

Keep these points in mind:

- The scripting engine treats every measurement and page coordinate as points. For more information, see Measurement Units.
- In Illustrator, the Info panel reports x and y coordinates from the document's bottom-left corner. For more information, see Page-item positioning and dimensions.

### Creating a polygon

Example:

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set frontDocument = appRef.ActiveDocument
' Create a new polygon with
' top = 144, left side = 288, width = 72, height = 144
Set newPolygon = frontDocument.PathItems.Polygon(144,288,72,7)
```

The generated polygon uses these values:

- The object's center point is inset 2 inches (144 points) along the horizontal axis and 4 inches (288 points) along the vertical axis.
- The polygon has 7 sides.
- The radius from the center point to each corner measures 1 inch (72 points).
