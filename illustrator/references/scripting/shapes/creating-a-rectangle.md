# Creating a rectangle

Example:

```applescript
tell application "Adobe Illustrator"
set docRef to make new document
set rectRef to make new rectangle in docRef with properties
    { bounds:{288, 360, 72, 144} }
end tell
```

The rectangle made by the sample uses these values:

- The rectangle's top-right corner sits 4 inches (288 points) up from the page bottom and 5 inches (360 points) from the page's left edge.
- For the rectangle's lower-left corner, the offsets are 1 inch (72 points) from the left edge and 2 inches (144 points) above the page bottom.

### Creating a rectangle

Example:

```javascript
var myDocument = app.documents.add()
var artLayer = myDocument.layers.add()
var rect = artLayer.pathItems.rectangle( 144, 144, 72, 216 );
```

The sample calls the pathItems object's rectangle() method, producing a rectangle with these characteristics:

- Its top is 2 inches (144 points) above the page's bottom edge.
- Its left edge sits 2 inches (144 points) from the page's left edge.
- Its dimensions are 1 inch (72 points) wide by 3 inches (216 points) long.

### Creating a rectangle

Example:

```vbscript
Set appRef = CreateObject("Illustrator.Application")
Set frontDocument = appRef.ActiveDocument
' Create a new rectangle with
' top = 144, left side = 144, width = 72, height = 144
Set newRectangle = frontDocument.PathItems.Rectangle(144,144,72,144)
```

The generated rectangle uses these values:

- Its top is positioned 2 inches (144 points) above the page's bottom edge.
- Its left edge sits 2 inches (144 points) from the page's left edge.
- Its size is 1 inch (72 points) wide by 2 inches (144 points) long.
