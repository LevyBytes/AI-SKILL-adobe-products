# Project.layerByID()

app.project.layerByID(id)

Note

This functionality was added in After Effects 22.0 (2022)

### Description

A Project instance method that hands back the Layer object carrying the supplied ID, provided the ID is valid.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| id | Integer (non-negative) | The ID of the Layer to be retrieved from the Project. |

### Returns

Returns the matching Layer object when a layer with that ID is present on the project, or null when none is. Supplying an invalid ID raises an exception that reports the argument as not being an unsigned integer.

### Example

```javascript
var firstComp = app.project.item(1);
var firstLayer = firstComp.layer(1);
var layerID = firstLayer.id;

if (app.project.layerByID(layerID) === firstLayer) {
    alert("You can get the Layer from the ID!");
}
```

## See also

- [Application](../application-object.md)
