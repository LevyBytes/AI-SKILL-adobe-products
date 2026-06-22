# Shapes, Working With The Perspective Grid, Use Perspective Presets, Show Or Hide The Grid ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Shapes; Working with the perspective grid; Use perspective presets; Show or hide the grid; Set the active plane; Draw on a perspective grid; Bring objects into perspective; Working with methods in JavaScript; Accessing and referencing objects; Referencing the application.

## Shapes

### Creating paths and shapes — Shapes

To make a shape, choose the object matching that shape name, such as ellipse, rectangle, or polygon, and set its properties for position, dimensions, and shape-specific details such as a polygon's side count.

Remember:

- The scripting engine treats every measurement and page coordinate as points. For details, see Measurement Units.
- Illustrator's Info panel follows the same convention: x and y values are measured from the document's bottom-left corner. For details, see Page-item positioning and dimensions.

### Write-once access

Path-item shape properties have "write-once" access, meaning they can be written only at object creation time. Once path-item objects already exist, those properties become read-only and their values cannot be modified.

### Creating a rectangle

Example:

```
tell application "Adobe Illustrator"
set docRef to make new document
set rectRef to make new rectangle in docRef with properties
    { bounds:{288, 360, 72, 144} }
end tell
```

The rectangle made by the sample uses these values:

- The rectangle's top-right corner sits 4 inches (288 points) up from the page bottom and 5 inches (360 points) from the page's left edge.
- For the rectangle's lower-left corner, the offsets are 1 inch (72 points) from the left edge and 2 inches (144 points) above the page bottom.

### Creating a polygon

Example:

```
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

### Creating a rectangle

Example:

```
var myDocument = app.documents.add()
var artLayer = myDocument.layers.add()
var rect = artLayer.pathItems.rectangle( 144, 144, 72, 216 );
```

The sample calls the pathItems object's rectangle() method, producing a rectangle with these characteristics:

- Its top is 2 inches (144 points) above the page's bottom edge.
- Its left edge sits 2 inches (144 points) from the page's left edge.
- Its dimensions are 1 inch (72 points) wide by 3 inches (216 points) long.

### Creating a polygon

Example:

```
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

### Creating a rectangle

Example:

```
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

### Creating a polygon

Example:

```
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

## Working with the perspective grid

Note

Illustrator CC 2017 added this functionality.

Perspective Grid lets you create and edit artwork in a spatial setup governed by perspective rules. Turn on Perspective Grid from View > Perspective Grid or by using the perspective tools in the toolbar.

The SDK includes an API for programmatic perspective-grid work, and scripts can use part of that API. With a script, you can:

- Use preset values to set default grid parameters.
- Toggle grid visibility.
- Choose the active plane.
- Create an object on the active plane in perspective.
- Move an existing object into perspective.

## Use perspective presets

### Working with the perspective grid — Use perspective presets

Illustrator's built-in grid-parameter presets cover one-point, two-point, and three-point perspective. The preset names are "[1P-NormalView]", "[2P-NormalView]", and "[3P-NormalView]".

This script demonstrates programmatic selection of the two-point perspective preset:

```
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Select the default two-point perspective preset
        select perspective preset perspective preset "[2P-Normal View]"
    end tell
end tell
```

Scripts may also create perspective presets, export presets to files, and import presets from files. These examples demonstrate export and import:

```
tell application "Adobe Illustrator"
    set docRef to make new document
    set filePath to "Macintosh HD:scripting:PGPresetsExported"
    export perspective grid preset of docRef to file filePath
end tell

tell application "Adobe Illustrator"
    set docRef to make new document
    set filePath to "Macintosh HD:scripting:PGPresets"
    import perspective grid preset of docRef from file filePath
end tell
```

Illustrator includes built-in grid-parameter presets for one-point, two-point, and three-point perspectives. Their names are "[1P-NormalView]", "[2P-NormalView]", and "[3P-NormalView]".

This script demonstrates programmatic selection of the two-point perspective preset:

```
//Set the default one-point perspective preset
app.activeDocument.selectPerspectivePreset("[1P-Normal View]");

//Set the default two-point perspective preset
app.activeDocument.selectPerspectivePreset("[2P-Normal View]");

//Set the default three-point perspective preset
app.activeDocument.selectPerspectivePreset("[3P-Normal View]");
```

Scripts can also create perspective presets, write presets out to files, and load presets from files. The next examples write preset data to disk and read preset data back:

```
//Create a new document
var mydoc = app.documents.add();
//Export perspective presets to a file
var exportPresetFile = new File("C:/scripting/PGPresetsExported")
mydoc.exportPerspectiveGridPreset(exportPresetFile);

//Create a new document
var mydoc = app.documents.add();
//Import perspective presets from a file
var importPresetFile = new File("C:/scripting/PGPresets")
mydoc.importPerspectiveGridPreset(importPresetFile);
```

Illustrator includes default grid-parameter presets for one-point, two-point, and three-point perspective. Their names are "[1P-NormalView]", "[2P-NormalView]", and "[3P-NormalView]".

The next script selects the two-point perspective preset through code:

```
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document
Set docRef = appRef.Documents.Add()

Rem Select the default two-point perspective preset
docRef.SelectPerspectivePreset("[2P-Normal View]")
```

Perspective presets can also be created, exported to files, and imported from files. These scripts demonstrate export and import:

```
Set appRef = CreateObject ("Illustrator.Application")
Rem Create a new document
Set docRef = appRef.Documents.Add()
Rem Export perspective presets to a file
docRef.ExportPerspectiveGridPreset("C:/scripting/PGPresetsExported")

Set appRef = CreateObject ("Illustrator.Application")
Rem Create a new document
Set docRef = appRef.Documents.Add()
Rem Import perspective presets from a file
docRef.ImportPerspectiveGridPreset("C:/scripting/PGPresets")
```

## Show or hide the grid

### Working with the perspective grid — Show or hide the grid

The following AppleScript toggles Perspective Grid visibility through a script:

```
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Display the perspective grid defined in the document
        show perspective grid
        --Hide the perspective grid defined in the document
        hide perspective grid
    end tell
end tell
```

Use this script to toggle the Perspective Grid from code:

```
//Show the Perspective Grid defined in the document
app.activeDocument.showPerspectiveGrid();

//Hide the Perspective Grid defined in the document
mydoc.hidePerspectiveGrid();
```

Use this script to show or hide the Perspective Grid from VBScript:

```
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document

Set docRef = appRef.Documents.Add()

Rem Show the Perspective Grid defined in the document
docRef.ShowPerspectiveGrid();

Rem Hide the Perspective Grid defined in the document
docRef.HidePerspectiveGrid();
```

## Set the active plane

### Working with the perspective grid — Set the active plane

Perspective grid plane types:

| Plane | Type |
| --- | --- |
| Left plane | perspective grid plane leftplane |
| Right plane | perspective grid plane rightplane |
| Floor plane | perspective grid plane floorplane |
| Invalid plane | perspective grid plane noplane |

In a one-point perspective grid, only the left plane and floor plane are valid.

The active perspective plane can be set to the left plane with this script:

```
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Set the active plane to the left plane
        set perspective active plane perspective grid plane leftplane
    end tell
end tell
```

Illustrator exposes these plane-type values for the perspective grid:

| Plane | Type |
| --- | --- |
| Left plane | PerspectiveGridPlaneType.LEFTPLANE |
| Right plane | PerspectiveGridPlaneType.RIGHTPLANE |
| Floor plane | PerspectiveGridPlaneType.FLOORPLANE |
| Invalid plane | PerspectiveGridPlaneType.NOPLANE |

With a one-point perspective grid, the valid choices are limited to the left plane and the floor plane.

The following calls choose which perspective plane is active:

```
//Set left plane as the active plane
app.activeDocument.setPerspectiveActivePlane(PerspectiveGridPlaneType.LEFTPLANE);

//Set right plane as the active plane
app.activeDocument.setPerspectiveActivePlane(PerspectiveGridPlaneType.RIGHTPLANE);

//Set floor plane as the active plane
app.activeDocument.setPerspectiveActivePlane(PerspectiveGridPlaneType.FLOORPLANE);
```

The perspective grid supports these plane types:

| Plane | Type |
| --- | --- |
| Left plane | aiLEFTPLANE (1) |
| Right plane | aiRIGHTPLANE (2) |
| Floor plane | aiFLOORPLANE (3) |
| Invalid plane | aiNOPLANE (4) |

With a one-point perspective grid, the valid choices are limited to the left plane and the floor plane.

This script makes the left plane active:

```
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document
Set docRef = appRef.Documents.Add()

Rem Set left plane as the active plane
docRef.SetPerspectiveActivePlane(1) 'aiLEFTPLANE
```

## Draw on a perspective grid

### Working with the perspective grid — Draw on a perspective grid

With Perspective Grid enabled, drawing methods can create or manipulate objects in perspective. The AppleScript below opens a document, turns on a two-point perspective grid, and then runs the drawing commands shown here.

```
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Select the default two-point perspective preset
        select perspective preset perspective preset "[2P-Normal View]"

        --Display the perspective grid defined in the document
        show perspective grid

        --Check if active plane is set to left, otherwise set it to left
        if (get perspective active plane) is not leftplane then
            set perspective active plane perspective grid plane leftplane
        end if

        --Draw rectangle in perspective, then resize to 200% and move
        set rectRef to make new rectangle with properties {bounds:{0, 0, 30, 30}, reversed:false}
        scale rectRef horizontal scale 200 vertical scale 200 about top left with transforming objects
        translate rectRef delta x -420 delta y 480

        --Draw ellipse in perspective
        set ellipseRef to make new ellipse with properties {bounds:{60, -60, 90, -30}, reversed:false, inscribed:true}

        --Draw rounded rectangle in perspective
        set rrectRef to make new rounded rectangle with properties {bounds:{90, -90, 30, 30}, horizontal radius:10, vertical radius:10, reversed:false}

        --Draw polygon in perspective
        set polyRef to make new polygon with properties {center point:{105, 105}, radius:15, sides:7, reversed:false}

        --Draw star in perspective
        set starRef to make new star with properties {center point:{135, 135}, radius:15, inner radius:10, point count:6, reversed:false}

        --Draw path in perspective
        set newPath to make new path item with properties {entire path:{ {anchor:{0, 0} }, {anchor:{60, 0} }, {anchor:{30, 45} }, {anchor:{90, 110} } } }
    end tell
end tell
```

With the Perspective Grid displayed, drawing methods can create or modify objects in perspective. This script opens a new document, displays a two-point perspective grid, and uses the left plane for the artwork.

```
//Create a new document
var mydoc = app.documents.add();

//Select the default two-point perspective preset
mydoc.selectPerspectivePreset("[2P-Normal View]");

//Display the perspective grid defined in the document
mydoc.showPerspectiveGrid();

//Check if active plane is set to left; if not, set it to left
if (mydoc.getPerspectiveActivePlane() != PerspectiveGridPlaneType.LEFTPLANE) {
    mydoc.setPerspectiveActivePlane(PerspectiveGridPlaneType.LEFTPLANE);
}

//Draw rectangle in perspective, then resize to 200% and move
var myrect = mydoc.pathItems.rectangle(30, -30, 30, 30, false);
myrect.resize(200, 200, true, false, false, false, 100, Transformation.TOPLEFT);
myrect.translate (-420, 480);

//Draw ellipse in perspective
var myellipse = mydoc.pathItems.ellipse(60, -60, 30, 30, false, true);

//Draw rounded rectangle in perspective
var myrrect = mydoc.pathItems.roundedRectangle(90, -90, 30, 30, 10, 10, false);

//Draw polygon in perspective
var mypoly = mydoc.pathItems.polygon(-105, 105, 15, 7, false);

//Draw star in perspective
var mystar = mydoc.pathItems.star(-135, 135, 15, 10, 6, false);

//Draw path in perspective
var newPath = mydoc.pathItems.add();
var lineList = new Array(4);
lineList[0] = new Array(0,0);
lineList[1] = new Array(60,0);
lineList[2] = new Array(30,45);
lineList[3] = new Array(90,110);
newPath.setEntirePath(lineList);
```

When the Perspective Grid is visible, drawing methods can create or manipulate artwork in perspective. The script below creates a new document, displays a two-point perspective grid, and targets the plane identified by aiLEFTPLANE.

```
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document
Set docRef = appRef.Documents.Add()

Rem Select the default two point perspective preset
docRef.SelectPerspectivePreset("[2P-Normal View]")

Rem Display the perspective grid defined in the document
docRef.ShowPerspectiveGrid()

Rem Check if active plane is set to left, otherwise set it to left
If docRef.GetPerspectiveActivePlane() <> 1 Then
    docRef.SetPerspectiveActivePlane(1) 'aiLEFTPLANE
End If

Rem Draw rectangle in perspective, then resize to 200% and move
Set pathItemRect = docRef.PathItems.Rectangle(30, -30, 30, 30, False)

call pathItemRect.Resize(200, 200, True, False, False, False, 100, 2)
call pathItemRect.Translate(-420, 480)

Rem Draw ellipse in perspective
Set pathItemEllipse = docRef.PathItems.Ellipse(60, -60, 30, 30, False, True)

Rem Draw rounded rectangle in perspective
Set pathItemRRect = docRef.PathItems.RoundedRectangle(90, -90, 30, 30, 10, 10, False)

Rem Draw polygon in perspective
Set pathItemPoly = docRef.PathItems.Polygon(-105, 105, 15, 7, False)

Rem Draw star in perspective
Set pathItemStar = docRef.PathItems.Star(-135, 135, 15, 10, 6, False)

Rem Draw path in perspective
Set newPath = docRef.PathItems.Add()
newPath.SetEntirePath(Array(Array(0,0),Array(60,0),Array(30,45),Array(90,110)))
```

## Bring objects into perspective

### Working with the perspective grid — Bring objects into perspective

Call bringInPerspective() when an art object needs to be projected onto a perspective-grid plane.

The following AppleScript builds a document and an art object, then positions that object as shown here:

```
tell application "Adobe Illustrator"
    --Create a new document
    set docRef to make new document
    tell docRef
        --Draw star
        set starRef to make new star with properties {center point:{135, 135}, radius:15, inner radius:10, point count:6, reversed:false}

        --Select the default three-point perspective preset
        select perspective preset perspective preset "[3P-Normal View]"

        --Display the perspective grid defined in the document
        show perspective grid

        --Check if active plane is set to left, otherwise set it to left
        if (get perspective active plane) is not leftplane then
            set perspective active plane perspective grid plane leftplane
        end if

        --Bring star to floor plane
        bring in perspective starRef position x 100 position y 100 perspective grid plane floorplane
    end tell
end tell
```

For artwork that is not already in perspective, call bringInPerspective() to put it into perspective and position it on a plane.

This script creates a document, draws artwork, and uses a three-point perspective grid when placing that artwork in perspective:

```
//Create a new document
var mydoc = app.documents.add();

//Draw ellipse
var myellipse = mydoc.pathItems.ellipse(60, -60, 30, 30, false, true);

//Draw polygon
var mypoly = mydoc.pathItems.polygon(-105, 105, 15, 7, false);

//Draw star
var mystar = mydoc.pathItems.star(-135, 135, 15, 10, 6, false);

//Select the default three-point perspective preset
mydoc.selectPerspectivePreset("[3P-Normal View]");

//Display the perspective grid defined in the document
mydoc.showPerspectiveGrid();

//Check if active plane is set to left; if not, set it to left
if (mydoc.getPerspectiveActivePlane() != PerspectiveGridPlaneType.LEFTPLANE) {
    mydoc.setPerspectiveActivePlane(PerspectiveGridPlaneType.LEFTPLANE);
}

//Bring the ellipse to the active plane (left plane)
myellipse.bringInPerspective(-100,-100, PerspectiveGridPlaneType.LEFTPLANE);

//Bring the polygon to the right plane
mypoly.bringInPerspective(100,-100,PerspectiveGridPlaneType.RIGHTPLANE);

//Bring the star to the floor plane
mystar.bringInPerspective(100,100,PerspectiveGridPlaneType.FLOORPLANE);
```

Use bringInPerspective() when an art object starts outside perspective and needs to be placed on a perspective plane.

In the script below, a new document is created, art objects are drawn, and those objects are moved using the three-point preset.

```
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document
Set docRef = appRef.Documents.Add()

Rem Draw ellipse
Set pathItemEllipse = docRef.PathItems.Ellipse(60, -60, 30, 30, False, True)

Rem Draw polygon
Set pathItemPoly = docRef.PathItems.Polygon(-105, 105, 15, 7, False)

Rem Draw star
Set pathItemStar = docRef.PathItems.Star(-135, 135, 15, 10, 6, False)

Rem Select the default three-point perspective preset
docRef.SelectPerspectivePreset("[3P-Normal View]")

Rem Display the perspective grid defined in the document
docRef.ShowPerspectiveGrid()

Rem Check if active plane is set to left, otherwise set it to left
If docRef.GetPerspectiveActivePlane() <> 1 Then
    docRef.SetPerspectiveActivePlane(1) 'aiLEFTPLANE
End If

Rem Bring the ellipse to the active plane (left plane)
Call pathItemEllipse.BringInPerspective(100,100, 1) 'aiLEFTPLANE

Rem Bring the polygon to the right plane
Call pathItemPoly.BringInPerspective(100,-100,2) 'aiRIGHTPLANE

Rem Bring the star to the floor plane
Call pathItemStar.BringInPerspective(100,100,3) 'aiFLOORPLANE
```

## Working with methods in JavaScript

For methods with several parameters, optional parameters may be left off only from the end of the parameter list; parameters in the middle cannot simply be skipped.

When a middle parameter should use its default, pass undefined in that position.

For an art object, rotate() is defined as follows.

```
rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

Tip

Square brackets ( [] ) in the definition mark optional parameters.

To rotate the object 30 degrees while changing fillGradients, use this script statement:

```
myObject.rotate(30, undefined, undefined, true);
```

Here, undefined is required for changePositions and changeFillPatterns. The two optional parameters after changeFillGradients can be omitted because they appear at the end of the parameter list.

## Accessing and referencing objects

A script first needs a target file or document to operate on. Via the application object, it can create a document, open one that already exists, or use a document that is already open.

Within the document, a script may create objects, work with the user's current selection, or operate on items from an object collection. The sections that follow show ways to access, reference, and manipulate Illustrator objects.

Before writing script logic, choose which file, or Document, the script should affect. Via the Application object, a script may create a document, open one that already exists, or work with an open document.

The script may add objects to the document, act on the user's selected objects, or work with objects inside an object collection. The sections that follow show ways to access, reference, and manipulate Illustrator objects.

## Referencing the application

### Accessing and referencing objects — Referencing the application object

Getting a reference to a specific object requires moving through the containment hierarchy. Since JavaScript scripts run from inside the Illustrator application, a direct reference to the application object is not mandatory. For instance, this assignment stores the active document in Illustrator in the frontMostDocument variable by referring to the activeDocument property of the application object:

```
var frontMostDocument = activeDocument;
```

Using the application object explicitly is also allowed. Reference it with the app global variable. To the JavaScript engine, these two statements are equivalent:

```
var frontMostDocument = activeDocument;

var frontMostDocument = app.activeDocument;
```
