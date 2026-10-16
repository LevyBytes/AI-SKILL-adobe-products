# TextFrameItem.resize()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.textFrames[index].resize(
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

Resizes the art item by using scaleX for horizontal scaling and scaleY for vertical scaling. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Scaling factor along the horizontal axis |
| scaleY | Number (double) | Scaling factor along the vertical axis |
| changePositions | Boolean, optional | Whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| scaleAbout | Transformation, optional | Anchor point around which the transform is applied |

### Returns

Nothing.
