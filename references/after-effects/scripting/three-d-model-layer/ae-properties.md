# AE Properties

From the AVLayer object, ThreeDModelLayer inherits these properties and property groups:

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

Suppose the project's first item is a CompItem and that comp's first layer is a ThreeDModelLayer; the snippet below tests its type.

```javascript
var modelLayer = app.project.item(1).layer(1);
if (modelLayer instanceof ThreeDModelLayer)
{
    // do something
}
```
