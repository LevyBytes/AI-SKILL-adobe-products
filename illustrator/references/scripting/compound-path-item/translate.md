# CompoundPathItem.translate()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.activeLayer.compoundPathItems[index].translate(
    deltaX
    [,deltaY]
    [,transformObjects]
    [,transformFillPatterns]
    [,transformFillGradients]
    [,transformStrokePatterns]
)
```

### Description

Moves the art item from its current location, using deltaX for side-to-side movement and deltaY for vertical movement.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| deltaX | Number (double), optional | Horizontal offset |
| deltaY | Number (double), optional | Vertical offset |
| transformObjects | Boolean, optional | Whether to transform Objects |
| transformFillPatterns | Boolean, optional | Whether to transform Fill Patterns |
| transformFillGradients | Boolean, optional | Whether to transform Fill Gradients |
| transformStrokePatterns | Boolean, optional | Whether to transform Stroke Patterns |

### Returns

Nothing.
