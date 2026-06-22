# Animating Shape Paths Masks (part 2)

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Move a mask or pan a layer behind a mask

Reaching for the Pan Behind (Anchor Point) tool inside the Composition panel triggers two automatic adjustments from After Effects. The mask shifts relative to its layer over in the Layer panel, while in the Composition panel the layer shifts relative to the composition. How the layer ends up placed against the composition within the Composition panel is what the example underneath illustrates.

## Move a mask

1. Select the mask or masks you want to move.
   Within the Composition panel, drag your chosen mask or masks to a fresh spot. Holding Shift once you've begun dragging locks the movement to either horizontal or vertical.

## Pan a layer behind its mask

From the Tools panel, grab the Pan Behind (Anchor Point) tool.

Within the Composition panel, click inside the mask area and drag the layer over to a fresh position.

## Face tracking and mask tracking

The mask tracker lets you reshape a mask so it rides along with the motion of one or more objects in a movie.

Beyond that, the mask tracker can pinpoint and follow human faces with precision.

## Expression access to path points on masks, Bezier shapes, and brush strokes

Expressions give you a way to read and set the x and y coordinates of path points — vertices, that is — for the following:

- Layer masks
- Bezier shapes
- Strokes painted with the Paint effect and with Roto Brush & Refine Edge.

These expression methods closely mirror how you reach path vertices through scripting. For the sake of familiarity, the expression version goes by points() rather than vertices().

## Access expression methods

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

## Create Nulls from Paths panel

With the Create Nulls From Paths scriptUI panel, you can set up expression-driven animations that feel intuitive, all without typing expressions by hand. Linking one path to a shape, a shape to a solid, and so forth is done directly. Behind the scenes, the Create Nulls From Paths panel taps expression access to path points to wire up the nulls for you, sparing you from writing the expression.

For every path point on a mask path or Bezier shape path, the panel spawns nulls. The buttons below let you steer how those nulls behave:

- Points Follow Nulls: This button makes nulls that govern where the path points sit. The path points latch onto the nulls, so animating the nulls drives the path points.
- Nulls Follow Points: This button makes nulls whose positions answer to the path points. The nulls latch onto the path points, so animating the path points moves the nulls.
- Trace Path: This button makes a single null that rides along the path. That null's position is tied to the path's coordinates, and its rotation auto-orients to track the path. Trace Path governs how the null travels the path and whether it loops. Out of the box, keyframes are laid down to walk the path across 1 second, with looping turned on.

## Work with the panel

Open the panel through Windows > Create Nulls From Paths.jsx.

For a shape mask, go to Layer > New > Shape Layer, then add a shape mask to that layer.

Because the panel operates on Bezier shapes, you'll need to turn every parametric shape — rectangle, ellipse, star, and the like — into a Bezier shape first. To do that, twirl open the shape layer, right-click the shape path (Rectangle 1, for instance), and pick Convert To Bezier Path.

Run through step 2 again to bring in more shapes.

A path belongs to every Bezier shape and mask. Twirl the layers open in the Timeline panel to see the paths. To have nulls track path points, highlight a path in the Timeline panel and choose Nulls Follow Points in the Create Nulls from Paths panel.

One null per point on the path is what the script produces. Any nulls you don't want can be deleted.

Converting a parametric shape to a Bezier shape prompts After Effects to tweak the shape's Position property, which throws off the calculation of where the nulls go. Heading that off is simple: zero out the value of the shape's Transform property — Transform: Ellipse 1, for example — before you create any nulls.

To make the path points track nulls instead, highlight a path in the Timeline panel, then choose Points Follow Nulls in the Create Nulls From Paths panel.

With nulls made for all the path points, you can hook them to one another to build animations. The nulls produced by the Points Follow Nulls button and those produced by Nulls Follow Points carry different colors. Hooking them up works like this: select a null, hold Shift, and use the pickwhip to grab a parent layer so the null's coordinates snap to that parent.

Once all the nulls are linked together, run a preview of your animation to watch it play out.

### More like this

- Face Tracking
- Mask Tracking
- Keyboard shortcuts
- Keyframe interpolation
