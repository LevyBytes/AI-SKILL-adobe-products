# MeshItem.resize()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.meshItems[index].resize(
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

Resizes the art item using scaleX for horizontal scale and scaleY for vertical scale. 100.0 = 100%.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| scaleX | Number (double) | Horizontal scale multiplier |
| scaleY | Number (double) | Vertical scale multiplier |
| changePositions | Boolean, optional | Whether art object positions and orientations are also affected |
| changeFillPatterns | Boolean, optional | Whether fill patterns are transformed |
| changeFillGradients | Boolean, optional | Whether fill gradients are transformed |
| changeStrokePattern | Boolean, optional | Whether stroke patterns are transformed |
| changeLineWidths | Number (double), optional | Amount applied when scaling line widths |
| scaleAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.
