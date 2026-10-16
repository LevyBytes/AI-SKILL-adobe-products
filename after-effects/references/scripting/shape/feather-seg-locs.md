# Shape.featherSegLocs

shapeObject.value.featherSegLocs

### Description

An array giving each feather point's mask path segment number (the stretch of mask path between vertices, numbered from 0).

Tip

The array keeps values in the same order the feather points were created. Relocate a feather point to a different segment by adjusting both its segment number (this attribute) and, if you like, its featherRelSegLocs attribute value.

### Type

Array of integers; read/write.

### Example

```javascript
// Assuming a rectangle closed mask (segments numbered 0-3) has 3 mask feather points,
// move all 3 feather points to the first mask segment.

// Get the Shape object for the mask, assumed here to be the first mask on the layer.
var my_maskShape = layer.mask(1).property("ADBE Mask Shape").value;

// Check where mask feather points are located.
// Note: They are stored in the order that they are added.
var where_are_myMaskFeatherPoints = my_maskShape.featherSegLocs;

// Move all 3 feather points to the first mask segment (numbered 0).
my_maskShape.featherSegLocs = [0, 0, 0];

// Update the mask path.
layer.mask(1).property("ADBE Mask Shape").setValue(my_maskShape);
```
