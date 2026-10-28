# Strokes and fills for shapes

Counted among paint operations, strokes and fills lay colored pixels onto a path or onto whatever region that path encloses. Either one may be a single solid color or instead draw on a gradient. A stroke comes either as an unbroken line or as a repeating run of dashes separated by gaps. Every stroke and every fill carries its own blending mode, and that mode governs how the operation mixes with the other paint operations sharing its group.

Within a group, paint operations render by default from bottom up in the Timeline panel's stacking order. Put differently, a stroke draws in front of any stroke positioned later in the Timeline panel. Should you need to flip that default for one particular fill or stroke, set its Composite property to Above Previous In Same Group in the Timeline panel.

Note

Adding a stroke or fill through the Add menu in the Tools or Timeline panel drops that paint operation below existing paths but above existing strokes and fills. Pin a new stroke to the bottom of the group by holding Alt (Windows) or Option (Mac OS) as you pick an item from the Add menu.

When a new shape appears, it inherits the fill and stroke properties shown by the swatch buttons sitting beside the underlined Fill and Stroke text controls in the Tools panel. Those same controls let you change fill color, stroke color, fill type, and stroke type on selected shapes. Keep in mind the Fill and Stroke controls surface in the Tools panel only while a shape layer is selected or a drawing tool is in use.

Select several shapes whose fill or stroke properties differ, and the swatch button beside the Fill or Stroke control shows a question mark. Editing through these controls still works; doing so sets the matching property on every selected shape to one shared value.

Four types are available for fills and strokes:

None

Nothing gets painted.

Solid color

A single color fills the whole stroke or fill.

Linear gradient

Colors and opacity values come from a linear gradient that maps onto the composition along one axis running from the Start Point to the End Point.

Radial gradient

Colors and opacity values come from a linear gradient mapped onto the composition along a radius that runs outward—from the Start Point at the center to the End Point on the circumference of a circle. Shifting the Highlight Length and Highlight Angle values lets you offset that starting point.

Note

To animate and interpolate gradients, keyframe the Colors property and work the Color Picker in Gradient Editor mode to add, change, and delete color stops and opacity stops. Gradients can also be stored as animation presets. (See Save an animation preset.)

Shape-layer stroke and fill colors do not render as high-dynamic range colors. Any color value below 0.0 or above 1.0 gets clipped back into the 0.0-to-1.0 range.
