# LayerCollection.addLight()

app.project.item(index).layers.addLight(name, centerPoint)

### Description

Builds a light layer and inserts the resulting LightLayer object into this collection. Whether it begins at the comp's start time is governed by the "Create Layers at Composition Start Time" preference.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new layer. |
| centerPoint | Array of floating-point values, [x, y] | The center of the new light |

### Returns

LightLayer object.
