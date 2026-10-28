# PathItems.roundedRectangle()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pathItems.roundedRectangle(
    top,
    left,
    width,
    height
    [,horizontalRadius = 15]
    [,verticalRadius = 20]
    [,reversed = false]
)
```

### Description

Creates a new pathItem in a rounded-corner rectangle shape from the parameters supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| top | Number (double) | Path top |
| left | Number (double) | Path left |
| width | Number (double) | Path width |
| height | Number (double) | Path height |
| horizontalRadius | Number (double), optional | Rounded-corner horizontal radius. Defaults to 15 pt. |
| verticalRadius | Number (double), optional | Rounded-corner vertical radius. Defaults to 20 pt. |
| reversed | Boolean, optional | Reverses the path direction when true; false by default |

### Returns

PathItem
