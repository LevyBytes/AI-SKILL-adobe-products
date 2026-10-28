# PluginItem.transform()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pluginItems[index].transform(
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

Applies a transformation matrix to the art item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| transformationMatrix | Matrix | Matrix applied for the transformation |
| changePositions | Boolean, optional | Whether Positions change |
| changeFillPatterns | Boolean, optional | Whether Fill Patterns change |
| changeFillGradients | Boolean, optional | Whether Fill Gradients change |
| changeStrokePattern | Boolean, optional | Whether Stroke Pattern changes |
| changeLineWidths | Number (double), optional | Amount used to scale line widths |
| transformAbout | Transformation, optional | Anchor point used for the transformation |

### Returns

Nothing.
