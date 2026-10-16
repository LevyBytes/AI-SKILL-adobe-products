# Projecting objects with JavaScript

For artwork that is not already in perspective, call bringInPerspective() to put it into perspective and position it on a plane.

This script creates a document, draws artwork, and uses a three-point perspective grid when placing that artwork in perspective:

```javascript
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

Related: [Projecting objects with AppleScript](projecting-objects-with-applescript.md).
