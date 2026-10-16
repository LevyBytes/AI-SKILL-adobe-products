# Drawing on a perspective grid with JavaScript

With the Perspective Grid displayed, drawing methods can create or modify objects in perspective. This script opens a new document, displays a two-point perspective grid, and uses the left plane for the artwork.

```javascript
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

Related: [Drawing on a perspective grid with AppleScript](working-with-the-perspective-grid-draw-on-a-perspective-grid.md).
