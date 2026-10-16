# About paths

The notion of a path underpins a number of After Effects features—masks, shapes, paint strokes, and motion paths among them. While the tools and methods you reach for when building and editing these path types share a lot in common, every category of path also brings something distinct to the table.

Two building blocks make up any path: segments and vertices. The lines or curves running between vertices are the segments, and the vertices mark the start and finish of each segment. In some Adobe products you'll see a vertex referred to instead as an anchor point or a path point.

Reshaping a path happens through dragging—either the vertices themselves, the path segment, or the direction handles sitting at the ends of each vertex's direction lines (also called tangents).

The course a path takes as it leaves a vertex is governed by the angle and length of that vertex's outgoing direction line. Heading toward the following vertex, the path gradually loosens its tie to the previous vertex's outgoing direction line and instead answers more to the incoming direction line belonging to the next vertex.

Components of a path

A. Selected vertex B. Selected vertex C. Unselected vertex D. Curved path segment E. Direction line (tangent) F. Direction handle

Components of a path

Vertices come in two flavors—smooth points and corner points. Where a smooth point sits, the segments join as one continuous curve, because that point's incoming and outgoing direction lines fall along a single line. Where a corner point sits, the path snaps to a new heading, since its incoming and outgoing direction lines run along separate lines. Any mix of corner and smooth points is fair game when you draw, and a point of the wrong type is always changeable afterward.

Points on a path

A. Four corner points B. Four smooth points C. Combination of corner and smooth points

Points on a path

Drag a direction line belonging to a smooth point and the curves flanking that point both shift at once. A corner point behaves differently: dragging one of its direction lines reshapes only the curve on that same side of the point.

Adjusting the direction lines on a smooth point (left) and a corner point (right)

Paths fall into two kinds—open and closed. With an open path, the starting point and ending point differ; a straight line is one such case. A closed path loops around without any start or finish—a circle being the obvious example.

For standard geometric forms—polygons, ellipses, stars, and the like—the shape tools let you draw the path, whereas the Pen tool handles any freeform path you have in mind. A path you draw with the Pen tool comes out as either a manual Bezier path or a RotoBezier path. What sets RotoBezier apart from manual Bezier is automatic calculation of the direction lines, which speeds up drawing and makes it less fiddly.

Drawing a shape path onto a shape layer with the shape tools (Rectangle, Rounded Rectangle, Ellipse, Polygon, or Star) yields one of two path types—a parametric shape path or a Bezier shape path.

Expressions let you tie together mask paths, paint stroke paths, and Bezier shape paths. Copying and pasting also works across mask paths, paint stroke paths, Bezier shape paths, motion paths, and paths brought in from Adobe Illustrator and Photoshop.

To fuse several shape paths into a single path, reach for the Merge Paths path operation—it parallels the Pathfinder effects found in Adobe Illustrator.

Any time you need text or an effect to ride along a path, that path has to be a mask path.

On its own, a path renders as nothing visible—think of it as stored instructions for positioning or reshaping other visual elements. Giving a path a stroke is what makes it show up. For a mask path, that means applying the Stroke effect. For a path belonging to a shape layer object, a stroke property group (attribute) is created by default, sitting after the path property group in the Timeline panel.

When you put color or a gradient inside the region a path encloses, that's a fill.

Note

The Path Point and Handle Size value is where you set how large Bezier direction handles and vertices appear for masks and shapes; reach it through Edit > Preferences > Appearance (Windows) or After Effects > Settings > Appearance (macOS).
