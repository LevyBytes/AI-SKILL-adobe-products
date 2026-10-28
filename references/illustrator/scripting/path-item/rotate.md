# PathItem.rotate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pathItems[index].rotate(
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

A positive angle rotates the object counter-clockwise; a negative value rotates it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Controls whether art object positions and orientations change |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns transform |
| changeFillGradients | Boolean, optional | Controls whether fill gradients transform |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns transform |
| rotateAbout | Transformation, optional | Anchor used for the rotation |

### Returns

Nothing.
