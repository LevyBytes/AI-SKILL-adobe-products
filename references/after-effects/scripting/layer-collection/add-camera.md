# LayerCollection.addCamera()

app.project.item(index).layers.addCamera(name, centerPoint)

### Description

Builds a camera layer and inserts the resulting CameraLayer object into this collection. Whether it starts at the comp's beginning is governed by the "Create Layers at Composition Start Time" preference.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new layer. |
| centerPoint | Array of floating-point values, [x, y] | The initial X and Y values of the new camera's Point of Interest property. The z value is set to 0. |

### Returns

CameraLayer object.
