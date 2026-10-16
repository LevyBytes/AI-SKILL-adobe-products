# PlacedItem.rotate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.placedItems[index].rotate(
    angle
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,rotateAbout]
)
```

### Description

Changes the art item's rotation from its current angle.

Positive angle values rotate the object counter-clockwise; negative values rotate it clockwise.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| angle | Number (double) | Rotation amount for the element |
| changePositions | Boolean, optional | Whether art object positions and orientations are transformed |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| rotateAbout | Transformation, optional | Anchor point used for rotation |

### Returns

Nothing.
