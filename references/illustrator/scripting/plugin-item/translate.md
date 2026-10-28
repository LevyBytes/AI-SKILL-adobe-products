# PluginItem.translate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pluginItems[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Moves the art item relative to where it is now; deltaX gives x-axis movement and deltaY gives y-axis movement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | X-axis offset |
| deltaY | Number (double), optional | Y-axis offset |
| transformObjects | Boolean, optional | Whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns are transformed |

### Returns

Nothing.
