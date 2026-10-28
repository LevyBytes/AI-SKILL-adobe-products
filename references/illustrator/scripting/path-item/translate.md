# PathItem.translate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pathItems[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Moves the art item from its current position, using deltaX for horizontal offset and deltaY for vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Offset along the X axis |
| deltaY | Number (double), optional | Offset along the Y axis |
| transformObjects | Boolean, optional | Whether Objects should be transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns should be transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients should be transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns should be transformed |

### Returns

Nothing.
