# MeshItem.rotate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.meshItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Applies a rotation to the art item from its current rotation. Positive angle values rotate counter-clockwise; negative values rotate clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are also affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.
