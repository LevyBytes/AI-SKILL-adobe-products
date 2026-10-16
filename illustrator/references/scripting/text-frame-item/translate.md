# TextFrameItem.translate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.textFrames[index].translate(
    [deltaX]
    [, deltaY]
    [, transformObjects]
    [, transformFillPatterns]
    [, transformFillGradients]
    [, transformStrokePatterns]
)
```

### Description

Moves the art item from its current location, with deltaX supplying the horizontal offset and deltaY supplying the vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Offset along the horizontal axis |
| deltaY | Number (double), optional | Offset along the vertical axis |
| transformObjects | Boolean, optional | Whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Whether Stroke Patterns are transformed |

### Returns

Nothing.
