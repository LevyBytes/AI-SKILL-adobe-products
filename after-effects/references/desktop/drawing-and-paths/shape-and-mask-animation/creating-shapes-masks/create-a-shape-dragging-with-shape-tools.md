# Create a shape dragging with shape tools

Counted among the shape tools are the Rectangle , , Rounded Rectangle , Ellipse , Polygon , and Star tools.

Note

Pressing Q both activates the shape tools and steps through them.

Strip a star of its Inner Radius and Inner Roundness properties and what remains is a polygon. That's why a polygon and a star share one shape name: polystar.

Drag a shape tool across a selected layer in the Composition or Layer panel and you'll produce a mask. Drag that same tool over a selected shape layer in the Composition panel and you'll produce a shape. Drag a shape tool in the Composition panel while nothing is selected, and a shape appears on a freshly made shape layer.

Note

When you want a mask drawn on a shape layer, turn on the Tool Creates Mask button in the Tools panel while a shape tool is active.

Drawing a shape by dragging a shape tool in the Composition panel yields a parametric shape path. For a Bezier shape path instead, hold down Alt (Windows) or Option (macOS) before you start the drag; you're free to let go of the key before the drag finishes. Every mask path is a Bezier path. Learn more about working with shapes and shape layers.

The drag begins the instant you click in the Composition or Layer panel to start drawing and concludes once you let go of the mouse button. Holding modifier keys at various points within one continuous drag produces different outcomes:

- Hold the spacebar or the middle mouse button mid-drag to slide a shape or mask into a new position as you draw.
- To grow a circle, ellipse, square, rounded square, rectangle, or rounded rectangle outward from its center while drawing, press and hold Ctrl (Windows) or Command (macOS) once the drag is underway. Keep the key down until after the mouse button is released to finish drawing.
- Hit the Esc key to abandon the drawing operation.

Note

Whatever settings a shape tool last used stick with it for the next drawing operation. Say you draw a star and bump its point count up to 10 — the following star you draw inherits those 10 points too. Double-clicking the tool in the Tools panel resets it and produces a shape using the default settings.
