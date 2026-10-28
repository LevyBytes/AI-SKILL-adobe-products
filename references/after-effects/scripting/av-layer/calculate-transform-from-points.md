# AVLayer.calculateTransformFromPoints()

app.project.item(index).layer(index).calculateTransformFromPoints(pointTopLeft, pointTopRight, pointBottomRight)

### Description

Works out a transformation from a collection of points belonging to this layer.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pointTopLeft | Array of floating-point values, [x, y, z] | The top left point coordinates. |
| pointTopRight | Array of floating-point values, [x, y, z] | The top right point coordinates. |
| pointBottomRight | Array of floating-point values, [x, y, z] | The bottom right point coordinates. |

### Returns

An Object with the transformation properties set.

### Example

```javascript
var newLayer = comp.layers.add(newFootage);
newLayer.threeDLayer = true;
newLayer.blendingMode = BlendingMode.ALPHA_ADD;
var transform = newLayer.calculateTransformFromPoints(tl, tr, bl);
for (var sel in transform) {
    newLayer.transform[sel].setValue(transform[sel]);
}
```
