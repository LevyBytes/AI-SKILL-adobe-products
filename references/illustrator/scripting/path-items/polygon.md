# PathItems.polygon()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pathItems.polygon(
    [centerX = 200]
    [, centerY = 300]
    [, radius = 50]
    [, sides = 8]
    [, reversed = false]
)
```

### Description

Creates a new pathItem shaped as a polygon from the parameters supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| centerX | Number (double), optional | Path centerX. Defaults to 200 pt. |
| centerY | Number (double), optional | Path centerY. Defaults to 300 pt. |
| radius | Number (double), optional | Path radius. Defaults to 50 pt. |
| sides | Number (long), optional | Side count. Defaults to 8 |
| reversed | Boolean, optional | Reverses the path direction when true; false by default |

### Returns

PathItem
