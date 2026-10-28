# GroupItem.transform()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.groupItems[index].transform(
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

Uses transformationMatrix to transform the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Transformation matrix to apply |
| changePositions | Boolean, optional | Whether to change Positions |
| changeFillPatterns | Boolean, optional | Whether to change Fill Patterns |
| changeFillGradients | Boolean, optional | Whether to change Fill Gradients |
| changeStrokePattern | Boolean, optional | Whether to change Stroke Pattern |
| changeLineWidths | Number (double), optional | The amount to scale line widths |
| transformAbout | Transformation, optional | The point to use as anchor, to transform about |

### Returns

Nothing.
