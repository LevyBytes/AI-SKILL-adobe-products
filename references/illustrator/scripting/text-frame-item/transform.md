# TextFrameItem.transform()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.textFrames[index].transform(
    transformationMatrix
    [, changePositions]
    [, changeFillPatterns]
    [, changeFillGradients]
    [, changeStrokePattern]
    [, changeLineWidths]
    [, transformAbout]
)
```

### Description

Applies a transformation matrix to transform the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix used for the transformation |
| changePositions | Boolean, optional | Whether Positions are changed |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns are changed |
| changeFillGradients | Boolean, optional | Whether Fill Gradients are changed |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern is changed |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| transformAbout | Transformation, optional | Anchor point around which the transform is applied |

### Returns

Nothing.
