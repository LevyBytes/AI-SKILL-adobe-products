# GraphItem.rotate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.graphItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Uses the angle value to rotate the art item from its current orientation. Positive values turn counter-clockwise, and negative values turn clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | The angle amount to rotate the element |
| changePositions | Boolean, optional | Whether to effect art object positions and orientations |
| changeFillPatterns | Boolean, optional | Whether to transform fill patterns |
| changeFillGradients | Boolean, optional | Whether to transform fill gradients |
| changeStrokePattern | Boolean, optional | Whether to transform stroke patterns |
| rotateAbout | Transformation, optional | The point to use as anchor, to transform about |

### Returns

Nothing.
