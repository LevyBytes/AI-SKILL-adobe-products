# PageItem.translate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pageItems[index].translate(
    deltaX
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item relative to where it currently sits, using deltaX for horizontal offset and deltaY for vertical offset.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Horizontal offset value |
| deltaY | Number (double), optional | Vertical offset value |
| transformObjects | Boolean, optional | Controls whether Objects are transformed |
| transformFillPatterns | Boolean, optional | Controls whether Fill Patterns are transformed |
| transformFillGradients | Boolean, optional | Controls whether Fill Gradients are transformed |
| transformStrokePatterns | Boolean, optional | Controls whether Stroke Patterns are transformed |

### Returns

Nothing.
