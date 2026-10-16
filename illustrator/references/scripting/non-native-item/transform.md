# NonNativeItem.transform()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
nonNativeItem.transform(
    transformationMatrix
    [,changePositions]
    [,changeFillPatterns]
    [,changeFillGradients]
    [,changeStrokePattern]
    [,changeLineWidths]
    [,transformAbout]
)
```

### Description

Applies a transformation matrix to the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix used for the transformation |
| changePositions | Boolean, optional | Controls whether Positions are changed |
| changeFillPatterns | Boolean, optional | Controls whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Controls whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Controls whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Scale factor applied to line widths |
| transformAbout | Transformation, optional | Anchor point used for the transform operation |

### Returns

Nothing.
