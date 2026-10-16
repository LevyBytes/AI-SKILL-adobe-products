# Drawing objects

ScriptUI can draw directly on controls to alter their appearance. Implement this by responding to onDraw and calling methods on the ScriptUIGraphics object; see Defining behavior with event callbacks and listeners.

Those methods receive helper objects that package drawing-related data, including these objects:

| Object | Description |
| --- | --- |
| ScriptUIGraphics | Encapsulates the drawing methods. The graphics object is associated with each control is found in the control object's graphics property. |
| ScriptUIBrush | Describes the brush used to paint textures in a control. |
| ScriptUIFont | Describes the font used to write text into a control. |
| ScriptUIImage | Describes an image to be drawn in a control. |
| ScriptUIPath | Describes a drawing path for a figure to be drawn into a control. |
| ScriptUIPen | Describes the pen used to draw lines in a control. |

For more information about these objects, see Graphic customization objects.

ScriptUIGraphics includes factory methods for the other graphics objects. For example, ScriptUIGraphics.newBrush() produces a ScriptUIBrush instance with a specified color. The resulting graphics objects can then be assigned as ScriptUIGraphics property values, determining how a user-interface element is rendered. If the new Brush object is assigned to backgroundColor, for example, that brush color is used for the element's background.

This code makes a window background light gray:

```javascript
g = myWindow.graphics;
myBrush = g.newBrush( g.BrushType.SOLID_COLOR, [ 0.75, 0.75, 0.75, 1 ] );
g.backgroundColor = myBrush;
```

The Adobe ExtendScript SDK includes these graphic-customization examples:

| Example | Description |
| --- | --- |
| ColorSelector.jsx | Uses graphic objects to change the background color of a window as the user selects the color value with a slider. |
| ColorPicker.jsx | A more complex version of the color-selection dialog shows how to use additional graphics objects, including fonts and paths. |

The Custom element class also lets scripts define fully customized controls of several kinds, including ranges, buttons, and lists, with all appearance handled by the onDraw implementation.
