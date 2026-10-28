# Updating grouped artwork

Working with a group lets you change multiple contained objects together. This example simplifies operations by placing the objects inside one GroupItem.

```javascript
// Creates a new group item, adds a new path item, of triangle shape, to the group,
// then adds a new text item to the group and sets the fill color of the text to red

if (app.documents.length > 0) {
    var triangleGroup = app.activeDocument.groupItems.add();

    // Create a triangle and add text, the new art is created inside the group
    var trianglePath = triangleGroup.pathItems.add();
    trianglePath.setEntirePath(Array(Array(100, 100), Array(300, 100), Array(200, Math.tan(1.0471975) * 100 + 100)));
    trianglePath.closed = true;
    trianglePath.stroked = true;
    trianglePath.filled = false;
    trianglePath.strokeWidth = 3;

    var captionText = triangleGroup.textFrames.add();
    captionText.position = Array(100, 150);
    captionText.textRange.size = 48;
    captionText.contents = "A triangle";

    var fillColor = new RGBColor();
    fillColor.red = 255;
    fillColor.green = 0;
    fillColor.blue = 0;
    captionText.characters.fillColor = fillColor;
}
```
