# LightLayer.lightSource:

app.project.item(index).layer(index).lightSource

Note

LightLayer.lightSource was added in After Effects 24.3, but allowed only HDR and EXR layers as sources.

In After Effects 25.2, it was updated to allow any 2D layer type as a source.

### Description

On a light layer, this names the layer that acts as the light source whenever LightLayer.lightType equals LightType.ENVIRONMENT.

You may set LightLayer.lightSource to any 2D video, still, or pre-composition layer sitting in the same composition. Try to hand it a 3D layer and you get an "Invalid light source specified" error.
