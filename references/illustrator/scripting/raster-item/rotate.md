# RasterItem.rotate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.rasterItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Rotates the art item from its current rotation.

Positive angle values rotate counter-clockwise; negative values rotate clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Angle amount used to rotate the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point for the transformation |

### Returns

Nothing.
