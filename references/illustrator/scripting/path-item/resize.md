# PathItem.resize()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pathItems[index].resize(
    scaleX,
    scaleY
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,scaleAbout]
)
```

### Description

Scales the art item with scaleX as the horizontal factor and scaleY as the vertical factor. At 100.0, scaling is 100% of the original size.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale multiplier |
| scaleY | Number (double) | Vertical scale multiplier |
| changePositions | Boolean, optional | Controls whether art object positions and orientations change |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns transform |
| changeFillGradients | Boolean, optional | Controls whether fill gradients transform |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns transform |
| changeLineWidths | Number (double), optional | Line-width scaling amount |
| scaleAbout | Transformation, optional | Anchor used for the transformation |

### Returns

Nothing.
