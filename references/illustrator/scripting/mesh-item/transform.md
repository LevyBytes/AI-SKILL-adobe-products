# MeshItem.transform()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.meshItems[index].transform(
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

Applies a transformation matrix to modify the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Transformation matrix used for the operation |
| changePositions | Boolean, optional | Whether Positions are changed |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Amount applied when scaling line widths |
| transformAbout | Transformation, optional | Anchor point used as the center for the transformation |

### Returns

Nothing.
