# Move vertices in free-transform mode

The Free Transform Points command lets you scale and rotate a whole mask or shape path — or just selected vertices spread across one or more paths. Trigger it and a free-transform bounding box closes around the chosen vertices, with an anchor point appearing at the box's center to mark where the current transformation pivots. Dragging the box or its handles scales and rotates those vertices. You can also relocate the reference point the vertices rotate or scale around by shifting the bounding box anchor point. This bounding box's handles and anchor point operate apart from the layer's own handles and anchor point.

Note

Rotation animated through Free Transform Points interpolates the mask's vertices along a straight line from one keyframe to the next. Because of that, the outcome can diverge from what you anticipated.

Bring the layer holding the paths you want to transform into view in the Composition or Layer panel.

- For any selection of vertices, choose the ones to transform and then pick Layer > Mask and Shape Path > Free Transform Points.

- For a whole mask or shape path, select it in the Timeline panel and pick Layer > Mask and Shape Path > Free Transform Points.

To reposition the bounding box anchor point, hover the Selection tool over it until the Selection tool turns into a move anchor point icon. Then drag to set the anchor point.

- Moving the path or the selected vertices is done by placing the pointer inside the bounding box and dragging.

- Scaling the path or the selected vertices is done by setting the pointer on a bounding box handle and, once it becomes a straight, double-sided arrow, dragging to resize. Hold Shift while dragging to keep the scale constrained. Hold Ctrl (Windows) or Command (macOS) while dragging to scale about the bounding box anchor point.

- Rotating the path or the selected vertices is done by setting the pointer just beyond the free-transform bounding box and, once it becomes a curved double-sided arrow, dragging to spin it.

Leaving free-transform mode is done with Esc, Enter (Windows), or Return (macOS).
