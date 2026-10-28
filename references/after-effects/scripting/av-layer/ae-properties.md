# AE Properties

The AE properties on offer vary by layer type. For AVLayer the available properties and property groups are:

- Marker
- Time Remap
- Motion Trackers
- Masks
- Effects

  - Anchor Point
  - Position
  - Scale
  - Orientation
  - X Rotation
  - Y Rotation
  - Rotation
  - Opacity

- Layer Styles
- Geometry Options // Ray-traced 3D

  - Casts Shadows
  - Light Transmission
  - Accepts Shadows
  - Accepts Lights
  - Appears in Reflections // Ray-traced 3D
  - Ambient
  - Diffuse
  - Specular Intensity
  - Specular Shininess
  - Metal
  - Reflection Intensity // Ray-traced 3D
  - Reflection Sharpness // Ray-traced 3D
  - Reflection Rolloff // Ray-traced 3D
  - Transparency // Ray-traced 3D
  - Transparency Rolloff // Ray-traced 3D
  - Index of Refraction // Ray-traced 3D

  - AudioLevels

### Example

Suppose the project's first item is a CompItem and that comp's first layer is an AVLayer; the snippet below assigns the layer's quality, startTime, and inPoint.

```javascript
var firstLayer = app.project.item(1).layer(1);
firstLayer.quality = LayerQuality.BEST;
firstLayer.startTime = 1;
firstLayer.inPoint = 2;
```
