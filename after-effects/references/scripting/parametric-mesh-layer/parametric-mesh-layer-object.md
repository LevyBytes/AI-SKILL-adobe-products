# ParametricMeshLayer object

app.project.item(index).layer(index)

Note

This functionality was added in After Effects (Beta) 26.3 and is subject to change while it remains in Beta.

### Description

A Parametric Mesh layer inside a composition is represented by the ParametricMeshLayer object.

Info

ParametricMeshLayer is a subclass of AVLayer object. From that AVLayer object it inherits these properties and property groups:

- Marker
- Time Remap

  - Anchor Point
  - Position
  - Scale
  - Orientation
  - X Rotation
  - Y Rotation
  - Rotation
  - Opacity

- Layer Styles
  - AudioLevels

### Example

Suppose the project's first item is a CompItem and that comp's first layer is a ParametricMeshLayer; the snippet below tests its type.

```javascript
var layer = app.project.item(1).layer(1);
if (layer instanceof ParametricMeshLayer)
{
    // do something
}
```
