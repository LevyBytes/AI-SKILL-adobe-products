# Working with the perspective grid — Set the active plane

Perspective grid plane types:

| Plane | Type |
| --- | --- |
| Left plane | perspective grid plane leftplane |
| Right plane | perspective grid plane rightplane |
| Floor plane | perspective grid plane floorplane |
| Invalid plane | perspective grid plane noplane |

In a one-point perspective grid, only the left plane and floor plane are valid.

The active perspective plane can be set to the left plane with this script:

```applescript
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

```javascript
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

```vbscript
Set appRef = CreateObject ("Illustrator.Application")

Rem Create a new document
Set docRef = appRef.Documents.Add()

Rem Set left plane as the active plane
docRef.SetPerspectiveActivePlane(1) 'aiLEFTPLANE
```
