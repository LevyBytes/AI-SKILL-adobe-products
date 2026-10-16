# PlacedItem.resize()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.placedItems[index].resize(
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

Scales the art item; scaleX controls horizontal scale and scaleY controls vertical scale. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale factor |
| scaleY | Number (double) | Vertical scale factor |
| changePositions | Boolean, optional | Whether art object positions and orientations are transformed |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| scaleAbout | Transformation, optional | Anchor point used for the transformation |

### Returns

Nothing.
