# Mesh Warp effect

A grid of Bezier patches is laid over a layer by the Mesh Warp effect, and working that grid lets you distort regions of an image. At every patch corner sits a vertex plus two to four tangents (the points steering the curvature of the line segment forming the patch edge). Whether the vertex falls in a corner, along an edge, or inside the grid decides how many tangents there are. Shifting the vertices and tangents reshapes the curved line segment. A finer grid lets you make tighter adjustments to the slice of the image within the patch.

Morphing a pair of images into a transition from one to the other is a frequent job for the Mesh Warp effect.

Color depths handled: 8-bpc and 16-bpc.

Original (upper-left), with distortion mesh (lower-left), and with Mesh Warp applied (lower-right)

Original (upper-left), with distortion mesh (lower-left), and with Mesh Warp applied (lower-right) Note

To select multiple vertices, Shift-click the vertices.

Rows, Columns

Set as many as 31 patches down the frame (Rows) or across it (Columns). Fewer patches suit broad distortion; more patches give finer control. Drag the vertices and tangents to reshape the grid. How closely the image tracks that grid shape depends on the elasticity setting and on the boundary the neighboring patch establishes.

Quality

Sets how tightly the image hugs the shape the curve defines. The higher the quality value, the closer the image tracks that shape. Steeper quality settings cost more rendering time.

Distortion Mesh

Click the stopwatch to drive the distortion as an animation across time.

Note

Every patch turns into a boundary for the distortion. Stretch a patch, for instance, and the image inside it stretches, compressing the image inside the neighboring patch. That neighboring patch's boundary keeps the image within it from being crushed down to nothing — put another way, you can't shove an image out of its own patch.
