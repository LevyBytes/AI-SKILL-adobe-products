# LightLayer.lightType

app.project.item(index).layer(index).lightType

Note

LightType.ENVIRONMENT was added in After Effects 24.3

### Description

On a light layer, this is the kind of light it is. Attempting to assign it on a layer that is not a light raises an error.

### Type

A LightType enumerated value; read/write. One of:

- LightType.PARALLEL
- LightType.SPOT
- LightType.POINT
- LightType.AMBIENT
- LightType.ENVIRONMENT
