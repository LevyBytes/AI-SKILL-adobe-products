# PageItem.resize()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pageItems[index].resize(
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

Applies scaling to the art item: scaleX controls horizontal scale, scaleY controls vertical scale, and 100.0 equals 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale value |
| scaleY | Number (double) | Vertical scale value |
| changePositions | Boolean, optional | Controls whether art object positions and orientations are affected |
| changeFillPatterns | Boolean, optional | Controls whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Controls whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Controls whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Scale factor applied to line widths |
| scaleAbout | Transformation, optional | Anchor point used for the scaling operation |

### Returns

Nothing.
