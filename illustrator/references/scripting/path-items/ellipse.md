# PathItems.ellipse()

Signature notation: square brackets mark optional arguments; supply actual values when calling this API.

```text
app.activeDocument.pathItems.ellipse(
    [top = 100]
    [, left = 100]
    [, width = 50]
    [, height = 100]
    [, reversed = false]
    [, inscribed]
)
```

### Description

Creates a new pathItem shaped as an ellipse from the parameters supplied.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| top | Number (double), optional | Path top. Defaults to 100 pt. |
| left | Number (double), optional | Path left. Defaults to 100 pt. |
| width | Number (double), optional | Path width. Defaults to 50 pt. |
| height | Number (double), optional | Path height. Defaults to 100 pt. |
| reversed | Boolean, optional | Reverses the path direction when true; false by default |
| inscribed | Boolean, optional | Inscribes the path when true |

### Returns

PathItem
