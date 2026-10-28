# PageItem.rotate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pageItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Rotates the art item from its current rotation; positive angle values turn it counter-clockwise and negative values turn it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Amount of rotation to apply to the element |
| changePositions | Boolean, optional | Controls whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Controls whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used for the rotation operation |

### Returns

Nothing.
