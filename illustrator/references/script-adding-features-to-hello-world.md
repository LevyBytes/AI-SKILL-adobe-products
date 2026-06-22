# Adding Features To Hello World, Object References, Obtaining Objects From Documents And Layers, Working With Selections ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Adding features to "Hello World"; Object references; Obtaining objects from documents and layers; Working with selections; Working with text frames; Threaded frames; Creating paths and shapes; Paths.

## Adding features to "Hello World"

### Your first Illustrator script — Adding features to "Hello World"

Next, create another script that edits the Illustrator document produced by the first script. The second script demonstrates these tasks:

- Access the active document.
- Read the active document's width.
- Set the text frame width to the document width.

If the Illustrator document has already been closed, run the first script again to create a new document.

Use this sequence:

1. In Script Editor, choose File > New so a new script is created.

```
tell application "Adobe Illustrator"

-- current document is always the active document
set docRef to the current document
set docWidth to the width of docRef

-- resize the text frame to match the page width
set width of text frame 1 of docRef to docWidth

-- alternatively, one can reference the item directly, as follows:
set width of text frame 1 of current document to docWidth

end tell
```

3. Run the script.

The next script modifies the Illustrator document produced by your first script. It demonstrates how to:

- Access the active document.
- Read the active document width.
- Set the text frame width to the document's width.

If the Illustrator document was closed, run the first script again to create a new one.

Follow these steps:

1. In Script Editor, start a new script with File > New.

```
var docRef = app.activeDocument;
var docWidth = docRef.width
var frameRef = docRef.textFrames[0]
frameRef.width = docWidth
```

3. Run the script.

The next script modifies the Illustrator document produced by the first script. This second script demonstrates these operations:

- Access the active document.
- Read the active document's width.
- Set the text frame width to the document width.

Run the first script again if the Illustrator document from that earlier step has already been closed.

Run this code:

```
Set appRef = CreateObject("Illustrator.Application")
'Get the active document
Set documentRef = appRef.ActiveDocument
Set sampleText = documentRef.TextFrames(1)
' Resize the TextFrame item to match the document width
sampleText.Width = documentRef.Width
sampleText.Left = 0
```

2. Execute the script.

## Object references

AppleScript receives Illustrator object references either by index position or by name. The next reference targets layer 2's first path

```
path item 1 of layer 2 of document 1
```

Creating or deleting other objects may change an object's index position. For example, when a new path item is added on layer 2, it becomes path item 1 of layer 2 of document 1.

That new object moves the original path item to index position 2. As a result, later references to path item 1 of layer 2 of document 1 address the new object. This indexing behavior gives the lowest index number to the object most recently worked on.

Review this sample script:

```
-- Make 2 new objects and try to select both
tell application "Adobe Illustrator"
    set newDocument to make new document
    set rectPath to make new rectangle in newDocument
    set starPath to make new star in newDocument
    set selection of newDocument to {rectPath, starPath}
end tell
```

This script is meant to select both the rectangle and the star, but it selects only the star. Run it with the Event Log window open to inspect the references Illustrator returns after each make command. Open Event Log from the bottom of the Script Editor window. Illustrator reports path item 1 of layer 1 of document 1 for both commands, so the final line evaluates as

```
set selection of document 1 to {path item 1 of layer 1 of document 1,
    path item 1 of layer 1 of document 1}
```

Name-based references avoid the problem:

```
tell application "Adobe Illustrator"
    set newDocument to make new document
    make new rectangle in newDocument with properties {name:"rectangle"}
    make new star in newDocument with properties {name:"star"}
    set selection of newDocument to
    {path item "rectangle" of newDocument,
    path item "star" of newDocument}
end tell
```

This example shows why AppleScript scripts need unique object identification. For objects you will access later, assign names or variables; index-based access does not guarantee that the object you retrieve is the one you expected.

## Obtaining objects from documents and layers

### Object references — Obtaining objects from documents and layers

This script addresses an object through the document:

```
-- Get reference for first page item of document 1
tell application "Adobe Illustrator"
    set pageItemRef to page item 1 of document 1
end tell
```

In the next script, pageItemRef may refer to a different object than the prior script returned, because this reference includes a layer:

```
-- Get reference for first page item of layer 1 of document 1
tell application "Adobe Illustrator"
    set pageItemRef to page item 1 of layer 1 of document 1
end tell
```

## Working with selections

### Object references — Working with selections

After someone selects items in a document, those items are available through the document's selection property. Use this AppleScript to retrieve the selection:

```
tell application "Adobe Illustrator"
    set myDoc to current document
    set selectedObjects to selection of myDoc
end tell
```

The selection property may hold an array containing any art-object type, depending on the current selection. Before reading or changing selected art-item properties, pull the separate array entries. Check an object's type through the class property.

The next AppleScript reads the first array entry and reports its class:

```
tell application "Adobe Illustrator"
    set myDoc to current document
    set selectedObjects to selection of myDoc
    set topObject to item 1 of selectedObjects
    display dialog (class of topObject)
end tell
```

In a selection array, the first entry is the selected item most recently added to the page, rather than the item selected most recently.

### Working with selections

To select an art object, use the object's selected property.

### Accessing and referencing objects — Working with selections

After a document selection is made, the chosen objects live in the document's selection property. This retrieves every selected object from the active document:

```
var selectedObjects = app.activeDocument.selection;
```

The selection property may contain an array made up of whatever art-object types are currently selected. Before reading or changing properties on the selected artwork, pull out the separate array entries. Check an object's type through the typename property.

This example reads the first array entry and then reports its object type:

```
var topObject = app.activeDocument.selection[0];
alert(topObject.typename)
```

In a selection array, the first entry is the selected object most recently placed on the page, rather than the object selected last.

### Selecting artwork objects

Set an art object's selected property when the script needs to select that object.

After a document selection is made, the chosen objects are kept in the document's selection property. This retrieves the selection:

```
Set appRef = CreateObject ("Illustrator.Application")
Set documentRef = appRef.ActiveDocument
selectedObjects = documentRef.Selection
```

The selection property can contain an array of any art-object type, depending on the current selection. To read or change properties on selected art items, first retrieve the individual array entries. Use the typename property to determine the object's type.

This sample retrieves the first array entry and then shows the type value:

```
Set appRef = CreateObject ("Illustrator.Application")
Set documentRef = appRef.ActiveDocument
selectedObjects = documentRef.Selection
Set topObject = selectedObjects(0)
MsgBox(topObject.Typename)
```

When a script runs from the Illustrator Scripts menu (File > Scripts), MsgBox does not show a dialog.

In a selection array, the first entry is the selected object most recently added to the page, not the object selected most recently.

### Working with selections

Set an art object's Selected property when the script needs to select that object.

## Working with text frames

In AppleScript, set the kind property on the text frame object when you need a text frame of a particular type.

```
set myRect to make new rectangle in current document with properties
{position:{100, 700}, height:100, width:100}
set myAreaText to make new text frame in current document with properties
{kind:point text,contents:"Text Frame 1"}
```

In JavaScript, create a text frame for a particular frame type through the text frame object's kind property:

```
var rectRef = docRef.pathItems.rectangle(700, 50, 100, 100);
//use the areaText method to create the text frame
var areaTextRef = docRef.textFrames.areaText(rectRef);
```

In VBScript, create a specific kind of text frame by calling the TextFrames method that matches the frame type you need:

```
Set rectRef = docRef.PathItems.Rectangle(700, 50, 100, 100)

' Use the AreaText method to create the text frame
Set areaTextRef = docRef.TextFrames.AreaText(rectRef)
```

## Threaded frames

### Working with text frames — Threaded frames

Illustrator supports threading area text frames and path text frames, and scripts can do the same.

For text frames that already exist, connect them with the next frame or previous frame property on the text frame object.

When placing this script in your script editor, keep the contents property value on a single line. The long-line character (¬) cannot be used inside string contents.

```
tell application "Adobe Illustrator"
    make new document
    make new rectangle in current document with properties
        {position:{100, 500}, height:100, width:100}
    make new text frame in current document with properties
        {kind:area text, text path:the result, name:"tf1", contents:"This is two text frames linked together as one story, with text flowing from the first to the last. First frame content. "}
    make new rectangle in current document with properties
        {position:{300, 700}, height:100, width:100}
    make new text frame in current document with properties
        {kind:area text, text path:the result, name:"tf2", contents:"Second frame content." }
    --use the next frame property to thread the frames
        set next frame of text frame "tf1" of current document to
        text frame "tf2" of current document
    redraw
end tell
```

### Threaded frames make one story object

Linked frames are represented as one story object. After running the preceding script, run this AppleScript to inspect the counts.

```
display dialog ("There are " & (count(text frames of current document)) & " text frames.")
display dialog("There are " & (count(stories of current document)) & " stories.")
```

Illustrator scripting supports threaded area text frames and threaded path text frames, matching the application behavior.

For frames that already exist, connect them by setting the text frame object's nextFrame or previousFrame property.

If you paste this script into the ESTK, keep the contents property value unwrapped:

```
var myDoc = documents.add();
var myPathItem1 = myDoc.pathItems.rectangle(244, 64, 82, 76);
var myTextFrame1 = myDoc.textFrames.areaText(myPathItem1);
var myPathItem2 = myDoc.pathItems.rectangle(144, 144, 42, 116);
var myTextFrame2 = myDoc.textFrames.areaText(myPathItem2);

// use the nextFrame property to thread the text frames
myTextFrame1.nextFrame = myTextFrame2;
var sText = "This is two text frames linked together as one story, with text
flowing from the first to the last. This is two text frames linked together as one
story, with text flowing from the first to the last. This is two text frames linked
together as one story. ";
myTextFrame1.contents = sText;
redraw();
```

### Threaded frames make one story object

Linked frames belong to one story object. To see the result, execute this JavaScript after the preceding script has run.

```
var myDoc = app.activeDocument
alert("There are " + myDoc.textFrames.length + " text frames.")
alert("There are " + myDoc.stories.length + " stories.")
```

Illustrator scripting can thread area text frames or path text frames, just as the Illustrator application can.

To connect text frames that already exist, set the TextFrames object's NextFrame or PreviousFrame property.

When pasting this script into a script editor, keep the Contents property value on one line. The long-line character (\_) cannot be used within string text.

```
Set appRef = CreateObject("Illustrator.Application")
Set myDoc = appRef.Documents.Add
Set myPathItem1 = myDoc.PathItems.Rectangle(244, 64, 82, 76)
Set myTextFrame1 = myDoc.TextFrames.AreaText(myPathItem1)
    myTextFrame1.Contents = "This is two text frames linked together as one story, with text flowing from the first to the last."
Set myPathItem2 = myDoc.PathItems.Rectangle(144, 144, 42, 116)
Set myTextFrame2 = myDoc.TextFrames.AreaText(myPathItem2)

'Use the NextFrame property to thread the frames
myTextFrame1.NextFrame = myTextFrame2

appRef.Redraw()
```

### Threaded frames make one story object

Threaded frames form one story object. To verify this, run the following VBScript after the earlier script has completed.

```
Set myDoc = appRef.ActiveDocument
myMsg = "alert(""There are " & CStr(myDoc.TextFrames.Count) & " text frames. "")"
appRef.DoJavaScript myMsg
myMsg = "alert(""There are " & CStr(myDoc.Stories.Count) & " storiess. "")"
appRef.DoJavaScript myMsg
```

## Creating paths and shapes

This part covers how to build items made from paths.

## Paths

### Creating paths and shapes — Paths

For a line or freeform path, provide path points as either x-y coordinate pairs or path point objects.

Supplying x-y coordinates restricts the path to straight segments. Curved paths require path point objects. A single path may mix page coordinates with path point objects.

### Specifying a series of x-y coordinates

When defining a path from page-coordinate pairs, set the entire path property of the path items object. This script uses three x-y coordinate pairs to produce a three-point path:

```
tell application "Adobe Illustrator"
set docRef to make new document
-- set stroked to true so we can see the path
set lineRef to make new path item in docRef with properties {stroked:true}
set entire path of lineRef to { {220, 475},{200, 300},{375, 300} }
end tell
```

### Using path point objects

Each path point object needs three values.

- A fixed anchor point, the point located on the path.
- Two direction points, left direction and right direction, used to shape the curve of the adjoining path segment.

Each property is supplied as an array of page coordinates in [x, y] form:

- A straight-line segment results when the three properties on a path point object share identical coordinates and the matching properties on the next path point in the line also match one another.
- A curved segment is formed when at least two properties in a path point object use different values.

For object-based path construction, or for adding points to an existing path, first create a path item object and then add the path points as its children:

```
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

### Combining path point types

This sample builds a three-point path by mixing the entire path property with an object-defined point.

```
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

### Specifying a series of x-y coordinates

For a path described by page-coordinate pairs, call the setEntirePath() property on the pathItems object. This script supplies three x-y coordinate pairs and produces a three-point path:

```
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();
//set stroked to true so we can see the path
myLine.stroked = true;
myLine.setEntirePath([[220, 475], [375, 300], [200, 300]]);
```

### Using path point objects

A pathPoint object needs three point values.

- A fixed anchor point, which lies on the path.
- Two direction points, left direction and right direction, that shape the curve for the path segment.

Each property is expressed as page coordinates in the [x, y] array format:

- When all three properties on a pathPoint object share identical coordinates, and the next pathPoint's properties also match one another, the resulting segment is straight.
- When at least two properties in a pathPoint object differ, the segment attached to that point becomes curved.

To make a path, or to append points to an existing path, with pathPoint objects, create a pathItem object and then add the path points beneath that pathItem as child objects:

```
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

### Combining path point types

This sample script constructs a path with three vertices:

```
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

### Providing x-y coordinate pairs

For a path described by page-coordinate pairs, set the entire path property on the PathItems object. This script uses three x-y coordinate pairs to build a three-point path:

```
Set appRef = CreateObject ("Illustrator.Application")

Set firstPath = appRef.ActiveDocument.PathItems.Add
    firstPath.Stroked = True
firstPath.SetEntirePath(Array(Array(220, 475),Array(375, 300),Array(200, 300)))
```

### Working with PathPoint objects

Each PathPoint object needs three point values:

- A fixed anchor point, which is the point located on the path.
- Two direction points, left direction and right direction, which shape the curve of the adjacent path segment.

Set each property to an array of page coordinates using the format (Array (x,y)):

- A straight-line segment is produced when all three properties on one PathPoint object share identical coordinates and the corresponding properties on the next PathPoint in the line also match each other.
- When a PathPoint object contains two or more different coordinate values, the segment attached to that point becomes curved.

To make a path from PathPoint objects, or to append points to a path that already exists, create a PathItem object and then add the path points beneath that PathItem as child objects.

```
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

### Mixing path point forms

Below, the script constructs a three-point path:

```
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
