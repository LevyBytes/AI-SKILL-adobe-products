# Access expression methods

Follow these steps to get at the expression methods:

Build a solid layer by selecting Layer > Solid.

With the solid in place, make a mask. Reach for a Shape tool — a polygon, say — and draw a mask across the solid layer.

Head to the Timeline panel, expand Mask properties by twirling it open, and then alt-click Mask Path.

The expression field shows up. Back in the Timeline panel, open the Expression language menu and pick Path Property.

From the list of path point expression methods, choose one.

Below are sample expression methods for these path objects:

- Layer mask paths: layer("Dark Gray Solid 1").mask("Mask 1").path or .maskPath
- Bezier shape paths: layer("Shape Layer 1").content("Shape 1").content("Path 1").path
- Paint effect stroke paths: layer("Dark Gray Solid 1").effect("Paint").stroke("Brush 1").path
- Roto Brush & Refine Edge effect stroke paths: layer("Dark Gray Solid 1").effect("Roto Brush & Refine Edge").stroke("Foreground 1").path

Pointers for working with these expression methods:

- Point and tangent values come back as an array of [x,y] number-pair arrays holding the vertex coordinates. Those coordinate values are rounded to four decimal places.
- Both the point and tangent arrays begin at the path's first vertex. The Layer > Mask and Shape Path > Set First Vertex command lets you reassign the first vertex of layer mask paths and Bezier shape paths.
- For layer mask path points, coordinates are measured from the layer's origin at its upper-left-hand corner.
- For Bezier shape path points, coordinates are measured from the anchor point of the path's shape group — for instance, Transform > Shape 1 > Anchor Point.
- For brush stroke path points, coordinates are measured from where the stroke begins; the opening point is [0,0].
- To pull coordinates from separate layers into one shared space, or just to express them relative to the composition space, the toComp() method and the other layer space transform methods come in handy.
- Since Bezier shape paths are referenced to their local shape group's anchor point instead of the layer, their values can land somewhere other than you'd expect. The fix is to zero out every Transform property in the shape group. Bear in mind that turning a parametric shape into a Bezier shape can shift the shape group's position.
- You can hand the createPath() method the points, tangents, and isClosed methods belonging to the same path or to other paths. Pass them along as-is to clone a path, or alter the point and tangent values first to reshape or animate the path.
