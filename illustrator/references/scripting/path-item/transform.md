# PathItem.transform()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pathItems[index].transform(
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
| transformationMatrix | Matrix | Matrix applied for the transformation |
| changePositions | Boolean, optional | Controls whether Positions change |
| changeFillPatterns | Boolean, optional | Controls whether Fill Patterns change |
| changeFillGradients | Boolean, optional | Controls whether Fill Gradients change |
| changeStrokePattern | Boolean, optional | Controls whether Stroke Pattern changes |
| changeLineWidths | Number (double), optional | Line-width scaling amount |
| transformAbout | Transformation, optional | Anchor used for the transformation |

### Returns

Nothing.
